import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LineChart from './charts/LineChart';
import { LOAD_YEARS_REQUEST } from 'reducers/stock';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import Loading from './Loading';
import TableGridNormal from './grids/TableGridNormal';
import RowGridYears from './grids/RowGridYears';
import { yearsSelects } from 'utils/dataSets';
import { SelectOpt } from './StyleComponents';
import { KindsHooks } from 'hooks';

const DetailYearly = ({ url }) => {
    const dispatch = useDispatch();
    const [kinds, onChangeKinds] = KindsHooks('sales');
    const { years } = useSelector((state) => state.stock);

    useEffect(() => {
        dispatch({
            type: LOAD_YEARS_REQUEST,
            url: url + `/${kinds}`
        });

    }, [kinds]);

    if (years) {
        return (
            <>
                <div className='detail-analy-select'>
                    <Select defaultValue={kinds} onChange={onChangeKinds} style={{ width: 200 }} >
                        <Select.OptGroup label='연간'>
                            {yearsSelects.map((ele) => {
                                return <SelectOpt key={ele.key} value = {ele.key}>{ele.name}</SelectOpt>;
                            })}
                        </Select.OptGroup>
                    </Select>
                </div>
                <div className='detail-analy-chart'>
                    <LineChart chart={years.chart} subType={kinds}></LineChart>
                </div>
                <div className='detail-analy-summary'>
                    <TableGridNormal tableData={years.table} tableType={kinds} />
                    <RowGridYears rowData={years} tableType={kinds} />
                </div>
            </>
        );
    }
    return (
        <Loading></Loading>
    );
};

DetailYearly.propstype = {
    url: PropTypes.string.isRequired
};


export default DetailYearly;