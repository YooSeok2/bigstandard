import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import moment from 'moment';
import { commas } from 'utils/method';
import { useSelector } from 'react-redux';

const tooltipFormatter = (param, market) => {
    let marketName = param.seriesName;
    if (market) {
        market === 'KS' ? marketName = '코스피' : marketName = '코스닥';
    }
    return [
        param.name + '<hr size=1 style="margin: 3px 0">',
        marketName + '<br/>',
        '시가&nbsp;&nbsp;' +
        '<span style="font-weight: 600">' +
        commas(param.data[1]) + '원' +
        '</span>' +
        '<br/>',
        '종가&nbsp;&nbsp;' +
        '<span style="font-weight: 600">' +
        commas(param.data[2]) + '원' +
        '</span>' +
        '<br/>',
        '저가&nbsp;&nbsp;' +
        '<span style="font-weight: 600">' +
        commas(param.data[3]) + '원' +
        '</span>' +
        '<br/>',
        '고가&nbsp;&nbsp;' +
        '<span style="font-weight: 600">' +
        commas(param.data[4]) + '원' +
        '</span>' +
        '<br/>'
    ].join('');
};


const splitData = (rawData) => {
    const { time, open, high, low, close } = rawData;
    const categoryData = [];
    const values = [];
    const ma10 = [];

    for (var loop = 0; loop < time.length; loop += 1) {
        categoryData.push(moment(time[loop]).format('YYYY.MM.DD'));
    }

    for (var valLoop = 0; valLoop < open.length; valLoop += 1) {
        if (open[valLoop] !== 0 && low[valLoop] !== 0 && high[valLoop] !== 0) {
            values.push([open[valLoop], close[valLoop], low[valLoop], high[valLoop]]);
        }
    }

    for (var maLoop = 0, len = values.length; maLoop < len; maLoop += 1) {
        if (maLoop < 10) {
            ma10.push('-');
            continue;
        }
        var sum = 0;
        for (var maInr = 0; maInr < 10; maInr += 1) {
            sum += +values[maLoop - maInr][1];
        }
        ma10.push(parseInt(sum / 10));
    }

    return {
        categoryData: categoryData,
        values: values,
        ma10: ma10
    };
};

const matchWindowGrid = (winWidth) => {
    if (600 < winWidth && winWidth < 1440) {
        return {
            left: '7%',
            right: '3%',
            bottom: '10%',
            top: '15%'
        };
    }
    if (winWidth < 600) {
        return {
            left: 10,
            right: 50,
            bottom: 50,
            top: '14%'
        };
    }
    return {
        left: '12%',
        right: '12px',
        bottom: '10%',
        top: '15%'
    };
};

const setxAsis = (datas, winWidth) => {
    let newObj = {};
    if (winWidth < 600) {
        newObj = {
            axisLabel: {
                fontSize: 10
            }

        };
    }
    return {
        ...newObj,
        type: 'category',
        data: datas.categoryData,
        boundaryGap: true,
        scale: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        axisTick: { show: false }
    };
};

const setyAxis = (winWidth) => {
    let newOpt = {};
    if (winWidth < 600) {
        newOpt = {
            axisLabel: {
                show: true,
                fontSize: 10,
                interval: 1,
                margin: 5
            },
            position: 'right'
        };
    }
    return {
        ...newOpt,
        scale: true,
        splitArea: {
            show: true
        },
        boundaryGap: false
    };
};

const chartOpt = (datas, winWidth, market) => {
    return {
        legend: {
            data: ['10일 이동평균선'],
            top: '5%'
        },
        grid: matchWindowGrid(winWidth),
        xAxis: setxAsis(datas, winWidth),
        yAxis: setyAxis(winWidth),
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 100
            }
        ],
        tooltip: {
            axisPointer: {
                type: 'cross'
            },
            formatter: function (param) {
                return tooltipFormatter(param, market);
            }
        },
        series: [
            {
                name: '코스피,코스닥',
                type: 'candlestick',
                data: datas.values,
                itemStyle: {
                    color: '#ee6666',
                    color0: '#5470c6',
                    borderColor: '#ee6666',
                    borderColor0: '#5470c6'
                }
            },
            {
                name: '10일 이동평균선',
                type: 'line',
                data: datas.ma10,
                smooth: true,
                lineStyle: {
                    opacity: 0.5,
                    color: '#3ba272'
                },
                itemStyle: {
                    color: '#3ba272'
                },
                symbolSize: 0,
                tooltip: {
                    show: false
                }
            }
        ]
    };
};

const StockChart = ({ chartDatas, market = null }) => {
    const chartCanvas = useRef();
    const { windowWidth } = useSelector((state) => state.global);
    useEffect(() => {
        const splitDatas = splitData(chartDatas);
        const stockChart = echarts.init(chartCanvas.current);
        stockChart.setOption(chartOpt(splitDatas, windowWidth, market));
    }, [chartDatas, market, windowWidth]);

    return (
        <div style={{ width: '100%', height: '100%' }} ref={chartCanvas}></div>
    );
};

StockChart.propstype = {
    chartDatas: PropTypes.object.isRequired,
    market: PropTypes.string.isRequired
};

export default StockChart;

