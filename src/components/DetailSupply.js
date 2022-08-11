import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LOAD_SUPPLYS_REQUEST } from 'reducers/stock';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Select } from 'antd';
import Loading from './Loading';
import { supplySelects } from 'utils/dataSets';
import { SelectOpt, RadioBtn } from './StyleComponents';
import SupplyTableGrid from './grids/SupplyTableGrid';
import _ from 'lodash';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import { KindsHooks } from 'hooks';

const DetailSupply = ({ url }) => {
    const dispatch = useDispatch();
    const [target, setTarget] = useState('개인');
    const [kinds, onChangeKinds] = KindsHooks('net-buying', setTarget);
    const { supplys } = useSelector((state) => state.stock);

    useEffect(() => {
        dispatch({
            type: LOAD_SUPPLYS_REQUEST,
            url: url + `/${kinds}`
        });

    }, [kinds]);

    const onChangeTarget = useCallback((e) => {
        setTarget(e.target.value);
    }, [target]);

    const extractKeyFromChart = (chart) => {
        const targets = [];
        _.forIn(chart, (value, key) => {
            if (key !== 'date') targets.push(key);
        });
        return targets;
    };

    if (supplys) {
        const targets = extractKeyFromChart(supplys.chart);
        return (
            <>
                <div className='detail-analy-select'>
                    <Select defaultValue={kinds} onChange={onChangeKinds} style={{ width: 200 }} >
                        <Select.OptGroup label='수급'>
                            {supplySelects.map((ele) => {
                                return <SelectOpt key={ele.key} value={ele.key}>{ele.name}</SelectOpt>;
                            })}
                        </Select.OptGroup>
                    </Select>
                </div>
                {supplys.chart &&
                 <div className='detail-analy-chart supply-chart'>
                     {kinds !== 'sector-net-buying' ?
                         <>
                             <Radio.Group
                                 className='supply-radio'
                                 onChange={onChangeTarget}
                                 defaultValue={target}
                             >
                                 {targets.map((item, idx) => {
                                     return <RadioBtn key={`${item}${idx}`} value={item}>{item}</RadioBtn>;
                                 })}
                             </Radio.Group>
                             <LineChart
                                 chart={{ date: supplys.chart.date, value: target
                                     ? supplys.chart[target]
                                     : supplys.chart['개인'] }}
                                 subType={'supplys'}
                             />
                         </>
                         : <BarChart chart={supplys.chart} />
                     }
                 </div>}
                {supplys.table &&
                    <div className='detail-analy-summary supply-summary'>
                        <SupplyTableGrid tables={supplys.table} kind={kinds} />
                    </div>}
            </>
        );
    }
    return (
        <Loading></Loading>
    );
};

DetailSupply.propstype = {
    url: PropTypes.string.isRequired
};

export default DetailSupply;