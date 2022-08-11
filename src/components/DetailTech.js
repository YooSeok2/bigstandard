import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LOAD_SKILLS_REQUEST } from 'reducers/stock';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import Loading from './Loading';
import LineSkillChart from './charts/LineSkillChart';
import { KindsHooks } from 'hooks';

const DetailTech = ({ url }) => {
    const dispatch = useDispatch();
    const [kinds, onChangeKinds] = KindsHooks('ema10');
    const { skills } = useSelector((state) => state.stock);

    useEffect(() => {
        dispatch({
            type: LOAD_SKILLS_REQUEST,
            url: url + `/${kinds}`
        });

    }, [kinds]);

    if (skills) {
        return (
            <>
                <div className='detail-analy-select'>
                    <Select defaultValue={kinds} onChange={onChangeKinds} style={{ width: 200 }} >
                        <Select.OptGroup label='기술분석'>
                            <Select.Option value = "ema10">10일 이동평균선</Select.Option>
                            <Select.Option value = "macd">MACD선</Select.Option>
                            <Select.Option value = "rsi">RSI선</Select.Option>
                        </Select.OptGroup>
                    </Select>
                </div>
                <div className='detail-skills-chart'>
                    <LineSkillChart chart={skills.chart} subType={kinds}></LineSkillChart>
                </div>
            </>
        );
    }
    return (
        <Loading></Loading>
    );
};

DetailTech.propstype = {
    url: PropTypes.string.isRequired
};

export default DetailTech;