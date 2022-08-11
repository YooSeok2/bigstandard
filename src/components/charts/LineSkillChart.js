import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import { LinexAxis, LineyAxis } from './options';
import { useSelector } from 'react-redux';

const matchSkillTypeData = (data, type) => {
    let skill = [];
    if (data && type === 'ema10') return data.ema10;
    if (data && type === 'macd') return data.macd;
    if (data && type === 'rsi') return data.rsi;
    return skill;
};

const matchSkillTypeName = (type) => {
    let name = '';
    if (type === 'ema10') return '10일 이동평균선';
    if (type === 'macd') return 'MACD선';
    if (type === 'rsi') return 'RSI선';
    return name;
};

const matchTypeLineColor = (type) => {
    let color = '';
    if (type === 'ema10') return '#91cc75';
    if (type === 'macd') return '#fac858';
    if (type === 'rsi') return '#ee6666';
    return color;
};

const chartOpt = (datas, type, winWidth) => {
    let legendFtSize = 14;
    let lineWidth = 3;
    let sybolSize = 7;
    if (winWidth < 600) {
        legendFtSize = 11;
        lineWidth = 2;
    }
    return {
        legend: {
            bottom: 0,
            textStyle: {
                fontSize: legendFtSize
            }
        },
        xAxis: LinexAxis(datas.date, winWidth),
        yAxis: LineyAxis({}, winWidth),
        grid: {
            left: '10%',
            right: '6%'
        },
        tooltip: {},
        series: [
            {
                data: datas.price,
                name: '주가(원)',
                type: 'line',
                lineStyle: {
                    width: lineWidth
                },
                symbolSize: sybolSize
            },
            {
                data: matchSkillTypeData(datas, type),
                name: matchSkillTypeName(type),
                type: 'line',
                symbolSize: sybolSize,
                lineStyle: {
                    width: lineWidth,
                    color: matchTypeLineColor(type)
                },
                tooltip: {
                    borderColor: matchTypeLineColor(type)
                },
                itemStyle: {
                    color: matchTypeLineColor(type)
                }
            }
        ]
    };
};

const LineSkillChart = ({ chart, subType }) => {
    const chartCanvas = useRef();
    const { windowWidth } = useSelector((state) => state.global);
    useEffect(() => {
        if (chart) {
            const lineSkillChart = echarts.init(chartCanvas.current);
            lineSkillChart.setOption(chartOpt(chart, subType, windowWidth));
        }
    }, [chart, subType, windowWidth]);

    if (chart) {
        return (
            <div style={{ width: '100%', height: '100%' }} ref={chartCanvas}></div>
        );
    }

    return <Loading></Loading>;

};

LineSkillChart.propstype = {
    chart: PropTypes.object.isRequired,
    subType: PropTypes.string.isRequired
};

export default LineSkillChart;