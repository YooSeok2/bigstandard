import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../components/AppLayout';
import Loading from '../components/Loading';
import { StockDetail, SummaryCol, DetailAnalysis, RadioBtn } from '../components/StyleComponents';
import StockPreset from '../components/StockPreset';
import SwrHooks from '../hooks/swrHooks';
import { Row, Radio } from 'antd';
import { summaryDataSet } from '../utils/dataSets';
import { convertToType } from '../utils/method';
import StockChart from '../components/charts/StockChart';
import moment from 'moment';
import switchDetailCont from '../utils/switchDeatilCont';
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';


const STOCK_CHART_URL = process.env.NEXT_PUBLIC_CHART_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const Detail = () => {
    const [detailType, setDetailType] = useState('ay');
    const { windowWidth } = useSelector((state) => state.global);
    const router = useRouter();
    const { shcode } = useRouter().query;
    const stock = SwrHooks(`${BASE_URL}/stocks/${shcode}`);
    const summary = SwrHooks(`${BASE_URL}/details/${shcode}/summary`);
    const day = new Date().getTime();
    const sixMonthAgo = moment(day).add("-6", "M").format("YYYYMMDD");
    const chartDatas = SwrHooks(`${STOCK_CHART_URL}/${shcode}/price?interval=1d&from=${sixMonthAgo}`);


    const onClickBack = () => {
        router.back();
    };

    const drawCols = (item, data, idx) => {
        const { name, val, type } = item;
        const value = data[val] ? convertToType(data[val], type) : '-';
        if ((idx + 1) % 2 === 1) {
            return (
                <SummaryCol key={name}>
                    <span>{name}</span>
                    <p>{value}</p>
                </SummaryCol>
            );
        } else {
            return (
                <SummaryCol className='col-color' key={name}>
                    <span>{name}</span>
                    <p>{value}</p>
                </SummaryCol>
            );
        }
    };

    const renderNormalCols = (normal, data) => {
        const result = [];
        normal.forEach((item, idx) => {
            result.push(drawCols(item, data, idx));
        });
        return result;
    };

    const renderProductCols = (product, data) => {
        const result = [];
        result.push(<SummaryCol className='col-border' key="mainProductWeight" span={24}>주요제품비중(%)</SummaryCol>);
        product.forEach((item, idx) => {
            const newItem = {
                ...item,
                name: data[item.name]
            };
            result.push(drawCols(newItem, data, idx));
        });
        return result;
    };

    const renderEarningCols = (earning, data) => {
        const result = [];
        result.push(<SummaryCol className='col-border' key="mainProductWeight" span={24}>주가수익률(%)</SummaryCol>);
        earning.forEach((item, idx) => {
            result.push(drawCols(item, data, idx));
        });
        return result;
    };

    const onChangeRadioBtn = useCallback((e) => {
        setDetailType(e.target.value);
    }, []);

    if (stock && summary && chartDatas && windowWidth) {
        return (
            <AppLayout>
                <StockDetail>
                    <div className='detail-summary'>
                        <div className='detail-summary-left'>
                            <div className='detail-stock-preset'>
                                <div className='back-btn' onClick={onClickBack}><ArrowLeftOutlined /></div>
                                <div className='detail-preset-box'>
                                    <StockPreset stockData={stock} rightClass={'detail-right-preset'}/>
                                </div>
                            </div>
                            <div className='detail-summary-grid'>
                                <Row gutter={[0, 10]} align='middle' className='detail-row'>
                                    {renderNormalCols(summaryDataSet.normal, summary)}
                                    {renderProductCols(summaryDataSet.product, summary)}
                                    {renderEarningCols(summaryDataSet.earning, summary)}
                                </Row>
                            </div>
                        </div>
                        <div className='detail-summary-right'>
                            <StockChart chartDatas={chartDatas} market={stock.market}/>
                        </div>
                    </div>
                    <DetailAnalysis>
                        <Radio.Group
                            className='detail-radio-group'
                            onChange={onChangeRadioBtn}
                            defaultValue={detailType}>
                            <RadioBtn value='ay' >연간 실적</RadioBtn>
                            <RadioBtn value='aq' >분기 실적</RadioBtn>
                            <RadioBtn value='cy' >연간 추정</RadioBtn>
                            { windowWidth < 600 ? <br/> : <></>}
                            <RadioBtn value='cq' >분기 추정</RadioBtn>
                            <RadioBtn value='su' >수급</RadioBtn>
                            <RadioBtn value='ti' >기술 분석</RadioBtn>
                        </Radio.Group>
                        <div className='detail-analy-content'>
                            {switchDetailCont(shcode, detailType)}
                        </div>
                    </DetailAnalysis>
                </StockDetail>
            </AppLayout>);
    } else {
        return (
            <AppLayout>
                <Loading></Loading>
            </AppLayout>
        );
    }

};


export default Detail;