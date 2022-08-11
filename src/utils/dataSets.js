export const summaryDataSet = {
    normal: [
        { name: '증권사적정주가(원)', val: 'target_price', type: 'num' },
        { name: '상승여력(%)', val: 'target_price_ratio', type: 'ratio' },
        { name: '시가총액(억원)', val: 'market_cap', type: 'num' },
        { name: '발행주식수(천주)', val: 'shares_outstanding', type: 'num' },
        { name: '외국인지분율(%)', val: 'foreigner_held', type: 'ratio' },
        { name: '업종(대)', val: 'sc_large', type: '' },
        { name: '업종(중)', val: 'sc_medium', type: '' }
    ],
    product: [
        { name: 'product_1', val: 'product_ratio_1', type: 'ratio' },
        { name: 'product_2', val: 'product_ratio_2', type: 'ratio' },
        { name: 'product_3', val: 'product_ratio_3', type: 'ratio' }
    ],
    earning: [
        { name: '1주간', val: 'price_yield_1w', type: 'ratio' },
        { name: '1개월', val: 'price_yield_1M', type: 'ratio' },
        { name: '3개월', val: 'price_yield_3M', type: 'ratio' },
        { name: '년초대비', val: 'price_yield_ytd', type: 'ratio' }
    ]
};

export const yearsSelects = [
    { key: 'sales', name: '매출액' },
    { key: 'operating', name: '영업이익' },
    { key: 'earnings', name: '순이익' },
    { key: 'debt', name: '순부채' },
    { key: 'debt-ratio', name: '부채비율' },
    { key: 'dividend', name: '주당 배당금' },
    { key: 'eps', name: 'EPS' },
    { key: 'per', name: 'PER' },
    { key: 'bps', name: 'BPS' },
    { key: 'pbr', name: 'PBR' },
    { key: 'roe', name: 'ROE' }
];

export const supplySelects = [
    { key: 'net-buying', name: '순매수금액' },
    { key: 'net-buying-5d', name: '5일 누적 순매수' },
    { key: 'net-buying-10d', name: '10일 누적 순매수' },
    { key: 'net-buying-sum', name: '누적 순매수 금액' },
    { key: 'kospi-net-buying', name: '거래소-5일 누적 순매수' },
    { key: 'kosdaq-net-buying', name: '코스닥-5일 누적 순매수' },
    { key: 'sector-net-buying', name: '업종별-순매수' }
];

export const rankSelects = [
    { key: 'default', name: '종합' },
    { key: 'ay_rank', name: '연간 실적' },
    { key: 'aq_rank', name: '분기 실적' },
    { key: 'cy_rank', name: '연간 추정' },
    { key: 'cq_rank', name: '분기 추정' },
    { key: 'su_rank', name: '수급' },
    { key: 'ti_rank', name: '기술' }
];