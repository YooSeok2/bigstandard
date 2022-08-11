import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { SearchPreviewBox } from './StyleComponents';
import { useRouter } from 'next/router';


const SearchPreview = ({ item }) => {
    const router = useRouter();

    const goToStockDetailPage = useCallback(() => {
        router.push({
            pathname: '/bigrank',
            query: { shcode: item.shcode }
        });
    }, [item]) ;

    return (
        <SearchPreviewBox onClick={goToStockDetailPage}>
            <h4>{item.hname}</h4>
            <span>{item.shcode}</span>
        </SearchPreviewBox>
    );
};

SearchPreview.propstype = {
    item: PropTypes.object.isRequired
};

export default SearchPreview;