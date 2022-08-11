import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import { LinexAxis, LineyAxis } from './options';
import { useSelector } from 'react-redux';

const tooltipFormatter = (param) => {
    const { name, data } = param;
    let newData = data + '억원';
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

const chartOpt = (datas, winWidth) => {
    return {
        xAxis: LinexAxis(datas.date, winWidth),
        yAxis: LineyAxis({}, winWidth),
        grid: setGrid(winWidth),
        tooltip: {
            formatter: function (param) {
                return tooltipFormatter(param);
            }
        },
        series: [
            {
                data: datas.value,
                type: 'bar',
                itemStyle: {
                    opacity: 0.8,
                    color: '#30a46c'
                },
                smooth: true
            }

        ]
    };
};

const BarChart = ({ chart }) => {
    const chartCanvas = useRef();
    const { windowWidth } = useSelector((state) => state.global);

    useEffect(() => {
        if (chart) {
            const lineChart = echarts.init(chartCanvas.current);
            lineChart.setOption(chartOpt(chart, windowWidth));
        }
    }, [chart, windowWidth]);

    if (chart) {
        return (
            <div style={{ width: '100%', height: '100%' }} ref={chartCanvas}></div>
        );
    }

    return <Loading></Loading>;

};

BarChart.propstype = {
    chart: PropTypes.object.isRequired
};

export default BarChart;