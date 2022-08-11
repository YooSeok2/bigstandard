import React, { useCallback, useState } from 'react';
import { SearchOutlined, CloseCircleFilled } from '@ant-design/icons';
import { SearchInputBox } from './StyleComponents';
import SearchPreview from './SearchPreview';
import { useSelector } from 'react-redux';
import { debounce, toUpper } from 'lodash';
import { useRouter } from 'next/router';
import { onChangeInputSearchVal } from 'utils/method';

const SearchInput = () => {
    const [focus, setFocus] = useState(false);
    const [disable, setDisable] = useState(false);
    const [result, setResult] = useState([]);
    const [value, setValue] = useState('');
    const router = useRouter();
    const { windowWidth } = useSelector((state) => state.global);
    const { stocks } = useSelector((state) => state.stock);

    const goToSearchPage = () => router.push('/search');

    const onChangeSearchVal = (e) => {
        const curVal = e.target.value;
        const { datas } = onChangeInputSearchVal(curVal, stocks);
        setResult([...datas]);
        setValue(curVal);
    };

    const onFocus = useCallback(() => {
        setFocus(true);
        if (windowWidth < 600) {
            setDisable(true);
            goToSearchPage();
        }
    }, []);

    const onBlur = useCallback(() => {
        debounce(() => {setFocus(false);
        }, 200);}, []);

    const onEnterSearchStock = useCallback((e) => {
        const targetName = toUpper(e.target.value);
        if (result) {
            const matchStock = result.find((ele) => {
                return toUpper(ele.hname) === targetName;
            });
            if (matchStock) {
                router.push({
                    pathname: '/bigrank',
                    query: { shcode: matchStock.shcode }
                });
            }
        }
    }, [result]);

    return (
        <div className='search-input-box'>
            <SearchInputBox
                placeholder="종목 이름 및 코드 입력"
                prefix={<SearchOutlined className='search-input-icon'/> }
                bordered={false}
                onFocus={onFocus}
                onBlur={onBlur}
                allowClear={{ clearIcon: <CloseCircleFilled className='search-input-close' /> }}
                value = {value}
                onChange = {onChangeSearchVal}
                size="large"
                disabled={disable}
                onPressEnter={onEnterSearchStock}
            />
            {focus && windowWidth > 600 && result.length > 0 ?
                <div className='search-plus-box'>
                    { result.map((item, index) => {
                        return <SearchPreview key={`${item.hname}${index}`} item={item} />;
                    })}
                </div>
                : <></>}
        </div>
    );
};

export default SearchInput;