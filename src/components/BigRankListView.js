import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
    BigRankList,
    RankSumTop,
    RankTopWrap,
    GoDetail,
    MobileBigRankList,
    LookAtMore,
    MobileTopRank,
    CloseLookAt }
    from './StyleComponents';
import StockPreset from './StockPreset';
import TopBars from './TopBars';
import { useRouter } from 'next/router';
import Loading from './Loading';

const BigRankListView = ({ stock, winWidth }) => {
    const [isLook, setIsLook] = useState(false);
    const router = useRouter();

    const goToDetailPage = useCallback(() => {
        router.push({
            pathname: '/detail',
            query: { shcode: stock.shcode }
        });
    }, []);

    const onClickLookAt = useCallback(() => {
        setIsLook(true);
    }, []);

    const onClickCloseLookAt = useCallback(() => {
        setIsLook(false);
    }, []);

    if (stock) {
        const { grade, ay_grade, aq_grade, cy_grade, cq_grade, su_grade, ti_grade } = stock;
        return (
            winWidth > 600
                ? <BigRankList>
                    <div className='rank-li-stock'>
                        <div className='stock-preset'>
                            <StockPreset stockData={stock}/>
                        </div>
                        <RankSumTop>
                            <div className='rank-sum-ct'>
                                <span>종합</span>
                                <p>Lv {grade}</p>
                                <GoDetail onClick={goToDetailPage}>상세보기→</GoDetail>
                            </div>
                            <div className='rank-sum-top'>
                                <TopBars grade={grade}/>
                            </div>
                        </RankSumTop>
                    </div>
                    <div className='rank-li-tops'>
                        <RankTopWrap>
                            <h4>연간 실적</h4>
                            <TopBars grade={ay_grade}/>
                            <span>Lv {ay_grade}</span>
                        </RankTopWrap>
                        <RankTopWrap>
                            <h4>분기 실적</h4>
                            <TopBars grade={aq_grade}/>
                            <span>Lv {aq_grade}</span>
                        </RankTopWrap>
                        <RankTopWrap>
                            <h4>연간 추정</h4>
                            <TopBars grade={cy_grade}/>
                            <span>Lv {cy_grade}</span>
                        </RankTopWrap>
                        <RankTopWrap>
                            <h4>분기 추정</h4>
                            <TopBars grade={cq_grade}/>
                            <span>Lv {cq_grade}</span>
                        </RankTopWrap>
                        <RankTopWrap>
                            <h4>수급</h4>
                            <TopBars grade={su_grade}/>
                            <span>Lv {su_grade}</span>
                        </RankTopWrap>
                        <RankTopWrap>
                            <h4>기술</h4>
                            <TopBars grade={ti_grade}/>
                            <span>Lv {ti_grade}</span>
                        </RankTopWrap>
                    </div>
                </BigRankList>
                : <MobileBigRankList $islook={isLook}>
                    <div className='rank-li-stock'>
                        <div className='stock-preset'>
                            <StockPreset stockData={stock}/>
                        </div>
                        <RankSumTop>
                            <div className='rank-sum-ct'>
                                <span>종합</span>
                                <p>Lv {grade}</p>
                                <GoDetail onClick={goToDetailPage}>상세보기→</GoDetail>
                            </div>
                            <div className='rank-sum-top'>
                                <TopBars grade={grade}/>
                            </div>
                        </RankSumTop>
                    </div>
                    <LookAtMore $islook={isLook} type='text' onClick={onClickLookAt}>더보기</LookAtMore>
                    <MobileTopRank $islook={isLook} >
                        <div>
                            <RankTopWrap>
                                <h4>연간 실적</h4>
                                <TopBars grade={ay_grade}/>
                                <span>Lv {ay_grade}</span>
                            </RankTopWrap>
                            <RankTopWrap>
                                <h4>분기 실적</h4>
                                <TopBars grade={aq_grade}/>
                                <span>Lv {aq_grade}</span>
                            </RankTopWrap>
                        </div>
                        <div>
                            <RankTopWrap>
                                <h4>연간 추정</h4>
                                <TopBars grade={cy_grade}/>
                                <span>Lv {cy_grade}</span>
                            </RankTopWrap>
                            <RankTopWrap>
                                <h4>분기 추정</h4>
                                <TopBars grade={cq_grade}/>
                                <span>Lv {cq_grade}</span>
                            </RankTopWrap>
                        </div>
                        <div>
                            <RankTopWrap>
                                <h4>수급</h4>
                                <TopBars grade={su_grade}/>
                                <span>Lv {su_grade}</span>
                            </RankTopWrap>
                            <RankTopWrap>
                                <h4>기술</h4>
                                <TopBars grade={ti_grade}/>
                                <span>Lv {ti_grade}</span>
                            </RankTopWrap>
                        </div>
                    </MobileTopRank>
                    <CloseLookAt $islook={isLook} type='text' onClick={onClickCloseLookAt}>닫기</CloseLookAt>
                </MobileBigRankList>
        );
    } else {
        return (
            <Loading></Loading>
        );
    }
};

BigRankListView.propstype = {
    stock: PropTypes.object,
    winWidth: PropTypes.string.isRequired
};

export default BigRankListView;