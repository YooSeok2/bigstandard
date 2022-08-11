import React, { useCallback } from 'react';
import { TopTenWrap } from './StyleComponents';
import { Row, Col } from 'antd';
import SwrHooks from 'hooks/swrHooks';
import Loading from './Loading';
import { TopTenRankBox } from './StyleComponents';
import { useRouter } from 'next/router';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const TopTenRank = () => {
    const router = useRouter();
    const ranks = SwrHooks(`${BASE_URL}/ranks?offset=0&limit=10`);

    const onClickTopTenBox = useCallback((code) => {
        router.push({
            pathname: '/bigrank',
            query: { shcode: code }
        });
    }, []);

    const drawColumns = () => {
        const cols = [];
        const datas = ranks.data;

        cols.push(<Col key={'colstart'} ><span>실시간 큰손정석 순위 : </span></Col>);
        datas.forEach((ele, idx) => {
            cols.push(
                <Col key={`col${idx}`} style={{ textAlign: 'center' }}>
                    <TopTenRankBox key={`top${idx}`} onClick={() => onClickTopTenBox(ele.shcode)}>
                        {ele.hname}
                    </TopTenRankBox>
                </Col>
            );
        });
        return cols;
    };

    if (ranks) {
        const topTenCols = drawColumns();
        return (
            <TopTenWrap>
                <Row align='middle' justify='center' gutter={[10, 15]}>
                    {topTenCols}
                </Row>
            </TopTenWrap>
        );
    } else {
        return (
            <Loading></Loading>
        );
    }

};

export default TopTenRank;