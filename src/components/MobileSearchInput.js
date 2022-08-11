import React, { useState, useCallback } from 'react';
import { MobileSearchInputBox, MobileSearchBoxFooter } from './StyleComponents';
import { ArrowLeftOutlined, CloseCircleFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { onChangeInputSearchVal } from 'utils/method';
import SwrHooks from 'hooks/swrHooks';
import SearchPreview from './SearchPreview';
import { toUpper } from 'lodash';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const MobileSearchInput = () => {
    const [matchValues, setMatchValues] = useState([]);
    const [value, setValue] = useState('');
    const router = useRouter();
    const ranks = SwrHooks(`${BASE_URL}/ranks?offset=0&limit=10`);
    const { stocks } = useSelector((state) => state.stock);

    const onChangeSearchVal = (e) => {
        const curVal = e.target.value;
        const { datas } = onChangeInputSearchVal(curVal, stocks);
        setMatchValues([...datas]);
        setValue(curVal);
    };


    const onClickBackBtn = useCallback(() => {
        router.back();
    }, []);

    const renderPlusBoxLabel = (txt) => {
        return <p key="searchP">{txt}</p>;
    };

    const onEnterSearchStock = useCallback((e) => {
        const targetName = toUpper(e.target.value);
        if (matchValues) {
            const matchStock = matchValues.find((ele) => {
                return toUpper(ele.hname) === targetName;
            });
            if (matchStock) {
                router.push({
                    pathname: '/bigrank',
                    query: { shcode: matchStock.shcode }
                });
            }
        }
    }, [matchValues]);

    return (
        <div className='mobile-search-input'>
            <MobileSearchInputBox
                placeholder="종목 이름 및 코드 입력"
                prefix={ <div onClick={onClickBackBtn}><ArrowLeftOutlined className='search-input-icon'/></div> }
                bordered={false}
                allowClear={{ clearIcon: <CloseCircleFilled className='search-input-close' /> }}
                size="large"
                value={value}
                onChange={onChangeSearchVal}
                onPressEnter={onEnterSearchStock}
            />
            <div className='mobile-search-plus-box'>
                {matchValues.length < 1 && value === '' ?
                    [renderPlusBoxLabel('실시간 큰손정석 순위'),
                        ranks && ranks.data.map((item, idx) => {
                            return <SearchPreview key={`${item.shcode}${idx}`} item={item} />;
                        })]
                    : [renderPlusBoxLabel('키워드 자동완성 종목'),
                        matchValues.map((item, idx) => {
                            return <SearchPreview key={`${item.shcode}${idx}`} item={item}/>;
                        })]
                }
            </div>
            <MobileSearchBoxFooter>
                <div onClick={onClickBackBtn}>닫기</div>
            </MobileSearchBoxFooter>
        </div>
    );
};

export default MobileSearchInput;