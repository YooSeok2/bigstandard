export const commas = (val) => {
    if (val) return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return val;
};

export const matchName = (el, key) => {
    const keyword = key.toLowerCase();
    const name = el.toLowerCase();
    if (key.length > 0) {
        return name.indexOf(keyword) !== -1;
    }
};

export const matchCode = (code, keyword) => {
    if (keyword.length > 0) {
        return code.indexOf(keyword) !== -1;
    }
};

export const convertToType = (val, type) => {
    let convertVal = val;
    if (type === 'num') {
        convertVal = commas(val);
    }
    if (type === 'ratio') {
        convertVal = `${val}%`;
    }
    return convertVal;
};

export const convertToYearsType = (val, type) => {
    let newData = val;
    if (type === 'sales' || type === 'operating' || type === 'earnings'
        || type === 'debt') {
        newData = commas(parseInt(val)) + ' 억원';
    }
    if (type === 'debt-ratio' || type === 'roe') {
        newData = val + '%';
    }
    if (type === 'eps' || type === 'bps' || type === 'dividend') {
        newData = commas(val) + ' 원';
    }
    if (type === 'per' || type === 'pbr') {
        newData = val + ' 배';
    }
    return newData;
};

export const convertToRatioInYears = (val) => {
    if (val) {
        if (typeof val === 'number') return val + '%';
        else return val;
    }
    return '-';
};

export const onChangeInputSearchVal = (targetVal, stocks) => {
    const matchNames = stocks.filter(item => matchName(item.hname, targetVal));
    const matchDatas = stocks.filter(item => matchCode(item.shcode, targetVal)).concat(matchNames);
    return {
        datas: matchDatas
    };
};


