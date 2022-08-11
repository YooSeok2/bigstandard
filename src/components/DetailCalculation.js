import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { LOAD_CAL_QUARTERS_REQUEST, LOAD_CAL_YEARS_REQUEST } from 'reducers/stock';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import LineChart from './charts/LineChart';
import TableGridNormal from './grids/TableGridNormal';
import { KindsHooks } from 'hooks';

const DetailCalculation = ({ url, type }) => {
    const dispatch = useDispatch();
    const [kinds, onChangeKinds] = KindsHooks('sales');
    const Cals = useSelector((state) => type === 'cy' ? state.stock['calYears'] : state.stock['calQuarters']);

    useEffect(() => {
        if (type === 'cy') {
            dispatch({
                type: LOAD_CAL_YEARS_REQUEST,
                url: url + `/${kinds}`
            });
        } else {
            dispatch({
                type: LOAD_CAL_QUARTERS_REQUEST,
                url: url + `/${kinds}`
            });
        }

    }, [kinds, url]);

    if (Cals) {
        return (
            <>
                <div className='detail-analy-select'>
                    <Select defaultValue={kinds} onChange={onChangeKinds} style={{ width: 200 }} >
                        <Select.OptGroup label='추정'>
                            <Select.Option value = "sales">매출액</Select.Option>
                            <Select.Option value = "operating">영업이익</Select.Option>
                            <Select.Option value = "earnings">순이익</Select.Option>
                        </Select.OptGroup>
                    </Select>
                </div>
                <div className='detail-analy-chart'>
                    <LineChart chart={Cals.chart} subType={kinds}></LineChart>
                </div>
                <div className='detail-analy-summary'>
                    <TableGridNormal
                        tableData={Cals.table}
                        tableType={kinds}
                        category={{ period: Cals.base_period, mainType: type }} />
                </div>
            </>
        );
    }
    return (
        <Loading></Loading>
    );
};

DetailCalculation.propstype = {
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default DetailCalculation;