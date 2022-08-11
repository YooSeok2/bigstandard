import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LOAD_QUARTERS_REQUEST } from 'reducers/stock';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import Loading from './Loading';
import LineChart from './charts/LineChart';
import TableGridNormal from './grids/TableGridNormal';
import { KindsHooks } from 'hooks';

const DetailQuarter = ({ url }) => {
    const dispatch = useDispatch();
    const [kinds, onChangeKinds] = KindsHooks('sales');
    const { quarters } = useSelector((state) => state.stock);

    useEffect(() => {
        dispatch({
            type: LOAD_QUARTERS_REQUEST,
            url: url + `/${kinds}`
        });

    }, [kinds]);

    if (quarters) {
        return (
            <>
                <div className='detail-analy-select'>
                    <Select defaultValue={kinds} onChange={onChangeKinds} style={{ width: 200 }} >
                        <Select.OptGroup label='분기'>
                            <Select.Option value = "sales">매출액</Select.Option>
                            <Select.Option value = "operating">영업이익</Select.Option>
                            <Select.Option value = "earnings">순이익</Select.Option>
                        </Select.OptGroup>
                    </Select>
                </div>
                <div className='detail-analy-chart'>
                    <LineChart chart={quarters.chart} subType={kinds}></LineChart>
                </div>
                <div className='detail-analy-summary'>
                    <TableGridNormal tableData={quarters.table} tableType={kinds} />
                </div>
            </>
        );
    }
    return (
        <Loading></Loading>
    );
};

DetailQuarter.propstype = {
    url: PropTypes.string.isRequired
};

export default DetailQuarter;