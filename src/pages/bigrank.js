import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import BigRankListView from '../components/BigRankListView';
import BigRankSingleView from '../components/BigRankSingleView';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_RANKS_REQUEST } from '../reducers/stock';
import { debounce } from 'lodash';


const BigRank = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { ranks, loadRanksLoading, hasMoreRanks } = useSelector((state) => state.stock);
    const { shcode } = router.query;
    const { windowWidth } = useSelector((state) => state.global);

    const onScroll = debounce(() => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
            if (!loadRanksLoading && hasMoreRanks) {
                dispatch({
                    type: LOAD_RANKS_REQUEST,
                    data: { offset: ranks.length }
                });
            }
        }
    }, 100);

    const handleBackEvent = () => {
        router.push('/');
    };

    useEffect(() => {
        window.addEventListener('popstate', handleBackEvent);
        return () => {
            window.removeEventListener('popstate', handleBackEvent);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [ranks, loadRanksLoading]);

    return (
        <AppLayout>
            <div className='bigrank-main'>
                {ranks.length > 0 && windowWidth && shcode ?
                    <BigRankSingleView stockCode={shcode} winWidth={windowWidth} />
                    :
                    ranks.map((stock, index) => <BigRankListView key={index} stock={stock} winWidth={windowWidth} />)
                }
            </div>
        </AppLayout>
    );
};

export default BigRank;