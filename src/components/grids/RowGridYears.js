import React from 'react';
import { RowGrid, DetailCol } from '../StyleComponents';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import { convertToRatioInYears } from 'utils/method';
import { useSelector } from 'react-redux';

const parseRowData = (data, type, winWidth) => {
    switch (type) {
    case 'sales':
        return {
            ...data,
            mk_growth_avg: data.mk_ay_sales_growth_avg,
            ay_growth_avg: data.ay_sales_growth_avg,
            mk_growth_est: data.mk_ay_sales_growth_est,
            sc_growth_avg: data.sc_ay_sales_growth_avg,
            sc_growth_est: data.sc_ay_sales_growth_est,
            mk_growth_est_year: data.mk_ay_sales_growth_est_year,
            sc_growth_est_year: data.sc_ay_sales_growth_est_year,
            title: '매출액',
            winWidth: winWidth
        };
    case 'operating':
        return {
            ...data,
            ay_growth_avg: data.ay_operating_growth_avg,
            mk_growth_avg: data.mk_ay_operating_growth_avg,
            mk_growth_est: data.mk_ay_operating_growth_est,
            sc_growth_avg: data.sc_ay_operating_growth_avg,
            sc_growth_est: data.sc_ay_operating_growth_est,
            mk_growth_est_year: data.mk_ay_operating_growth_est_year,
            sc_growth_est_year: data.sc_ay_operating_growth_est_year,
            title: '영업이익',
            winWidth: winWidth
        };
    case 'earnings':
        return {
            ...data,
            ay_growth_avg: data.ay_earnings_growth_avg,
            mk_growth_avg: data.mk_ay_earnings_growth_avg,
            mk_growth_est: data.mk_ay_earnings_growth_est,
            sc_growth_avg: data.sc_ay_earnings_growth_avg,
            sc_growth_est: data.sc_ay_earnings_growth_est,
            mk_growth_est_year: data.mk_ay_earnings_growth_est_year,
            sc_growth_est_year: data.sc_ay_earnings_growth_est_year,
            title: '순이익',
            winWidth: winWidth
        };
    case 'per':
        return {
            ...data,
            mk: data.mk_per,
            sc: data.sc_per,
            title: 'PER',
            winWidth: winWidth
        };
    case 'pbr':
        return {
            ...data,
            mk: data.mk_pbr,
            sc: data.sc_pbr,
            title: 'PBR',
            winWidth: winWidth
        };
    case 'roe':
        return {
            ...data,
            mk: data.mk_roe,
            sc: data.sc_roe,
            title: 'ROE',
            winWidth: winWidth
        };
    default :
        return data;
    }
};


const renderFifthCols = (data) => {
    const { hname, mk_name, sc_name, ay_growth_avg, mk_growth_avg,
        mk_growth_est, sc_growth_avg, sc_growth_est, mk_growth_est_year,
        sc_growth_est_year, title } = data;
    return (
        <>
            <DetailCol sm={12} xs={24}>
                <span>{hname}</span>
                <h4>{title} 증가율(평균)</h4>
                <p>{convertToRatioInYears(ay_growth_avg)}</p>
            </DetailCol>
            {data.winWidth > 600 ? <DetailCol sm={12} xs={0}></DetailCol> : <></>}
            <DetailCol sm={12} xs={24} className='col-color'>
                <span>{mk_name}</span>
                <h4>{title} 증가율(평균)</h4>
                <p>{convertToRatioInYears(mk_growth_avg)}</p>
            </DetailCol>
            <DetailCol sm={12} xs={24} className='col-border'>
                <span>{mk_name}</span>
                <h4>{`${mk_growth_est_year}년 예상 ${title} 증가율(연간)`}</h4>
                <p>{convertToRatioInYears(mk_growth_est)}</p>
            </DetailCol>
            <DetailCol sm={12} xs={24} className='col-border'>
                <span>{sc_name}</span>
                <h4>{title} 증가율(평균)</h4>
                <p>{convertToRatioInYears(sc_growth_avg)}</p>
            </DetailCol>
            <DetailCol sm={12} xs={24} className='col-color'>
                <span>{sc_name}</span>
                <h4>{`${sc_growth_est_year}년 예상 ${title} 증가율(연간)`}</h4>
                <p>{convertToRatioInYears(sc_growth_est)}</p>
            </DetailCol>
        </>
    );
};

const renderTwoCols = (data) => {
    const { mk_name, sc_name, mk, sc, title } = data;
    return (
        <>
            <DetailCol span={12} xs={24} className='col-color'>
                <span>{mk_name}</span>
                <h4>{title}</h4>
                <p>{convertToRatioInYears(mk)}</p>
            </DetailCol>
            <DetailCol span={12} xs={24}>
                <span>{sc_name}</span>
                <h4>{title}</h4>
                <p>{convertToRatioInYears(sc)}</p>
            </DetailCol>
        </>
    );
};

const renderCols = (values, type, winWidth) => {
    if (winWidth) {
        if (type === 'sales' || type === 'operating' || type === 'earnings') {
            return renderFifthCols(parseRowData(values, type, winWidth));
        }
        if (type === 'dividend') {
            const { mk_name, ay_dividend_yield_avg } = parseRowData(values, type, winWidth);
            return (
                <>
                    <DetailCol span={12} xs={24} className='col-color'>
                        <span>{mk_name}</span>
                        <h4>배당수익률(평균)</h4>
                        <p>{ay_dividend_yield_avg}%</p>
                    </DetailCol>
                    <DetailCol span={12} xs={24}></DetailCol>
                </>
            );
        }
        if (type === 'per' || type === 'pbr' || type === 'roe') {
            return renderTwoCols(parseRowData(values, type, winWidth));
        }
    }

    return <></>;
};

const RowGridYears = ({ rowData, tableType }) => {
    const { windowWidth } = useSelector((state) => state.global);
    if (rowData && rowData.mk_name) {
        return (
            <RowGrid>
                <Row gutter={[0, 10]} className='detail-grid-row'>
                    {renderCols(rowData, tableType, windowWidth)}
                </Row>
            </RowGrid>
        );
    }
    return <></>;
};

RowGridYears.propsType = {
    rowData: PropTypes.object.isRequired,
    tableType: PropTypes.string.isRequired
};

export default RowGridYears;