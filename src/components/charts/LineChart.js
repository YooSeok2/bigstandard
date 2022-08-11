import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import { convertToYearsType } from 'utils/method';
import { LinexAxis, LineyAxis } from './options';
import { useSelector } from 'react-redux';

const tooltipFormatter = (param, type) => {
    const { name, data } = param;
    let newData = convertToYearsType(data, type);
    if (type === 'supplys') {
        newData = data + '억원';
    }
    return [
        name + '&nbsp;&nbsp;&nbsp;' +
        '<span style="font-weight: 600">' +
        newData +
        '</span>'
    ].join('');
};

const setGrid = (winWidth) => {
    if (winWidth < 600) {
        return {
            left: '13%',
            right: '4%'
        };
    }
    return {
        left: '10%',
        right: '6%'
    };
};

const chartOpt = (datas, type, winWidth) => {
    let symbolSize = 30;
    if (winWidth < 600) {
        symbolSize = 20;
    }
    if (datas.value) {
        const chartValues = datas.value.filter((ele) => ele !== null);
        return {
            title: {
                show: chartValues.length === 0,
                text: '데이터가 없습니다',
                left: 'center',
                top: 150,
                textStyle: {
                    color: '#bcbcbc'
                }
            },
            xAxis: LinexAxis(datas.date, winWidth),
            yAxis: LineyAxis({}, winWidth),
            grid: setGrid(winWidth),
            tooltip: {
                formatter: function (param) {
                    const dataType = type;
                    return tooltipFormatter(param, dataType);
                }
            },
            series: [
                {
                    data: chartValues,
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: symbolSize,
                    itemStyle: {
                        opacity: 0.8,
                        color: '#30a46c'
                    },
                    smooth: true,
                    lineStyle: {
                        color: '#fff',
                        opacity: 0
                    }
                }

            ]
        };
    }
    return {
        title: {
            show: true,
            text: '데이터가 없습니다',
            left: 'center',
            top: 'center',
            textStyle: {
                color: '#bcbcbc'
            }
        }
    };
};

const LineChart = ({ chart, subType }) => {
    const chartCanvas = useRef();
    const { windowWidth } = useSelector((state) => state.global);

    useEffect(() => {
        if (chart) {
            const lineChart = echarts.init(chartCanvas.current);
            lineChart.setOption(chartOpt(chart, subType, windowWidth));
        }
    }, [chart, subType, windowWidth]);

    if (chart) {
        return (
            <div style={{ width: '100%', height: '100%' }} ref={chartCanvas}></div>
        );
    }
    return <Loading></Loading>;
};

LineChart.propstype = {
    chart: PropTypes.object.isRequired,
    subType: PropTypes.string.isRequired
};

export default LineChart;