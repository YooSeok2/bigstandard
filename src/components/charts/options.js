export const LinexAxis = (data, width) => {
    let ftSize = 14;
    if (width < 600) {
        ftSize = 10;
    }
    return {
        type: 'category',
        data: data,
        scale: true,
        axisTick: {
            show: false,
            length: 0
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'dotted',
                color: '#777'
            }
        },
        axisLabel: {
            show: true,
            fontSize: ftSize,
            padding: [10, 0, 0, 0]
        },
        axisPointer: {
            snap: true
        },
        boundaryGap: true
    };
};

export const LineyAxis = (opt, width) => {
    let ftSize = 14;
    let scale = true;
    if (width < 600) {
        ftSize = 10;
    }
    return {
        ...opt,
        type: 'value',
        boundaryGap: false,
        axisTick: {
            show: false,
            length: 0
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#777'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#d3d3d3'
            }
        },
        axisLabel: {
            show: true,
            fontSize: ftSize,
            interval: 1,
            margin: 5
        },
        axisPointer: {
            snap: true
        },
        scale: scale
    };
};