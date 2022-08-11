import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SmallLoading from './loadings/SmallLoading';

const TopBars = ({ grade }) => {
    const [bars, setBars] = useState([]);

    const barRendering = () => {
        const bars = [];
        for (let loop = 0; loop < 5; loop += 1) {
            if (loop < grade) {
                bars.unshift(<div key={loop} className='stack stack-on'></div>);
            } else {
                bars.unshift(<div key={loop} className='stack'></div>);
            }
        }
        setBars([...bars]);
    };

    useEffect(() => {
        barRendering();
    }, []);


    if (bars.length > 0) {
        return (
            <div className='barlist'>{bars}</div>
        );
    } else {
        return (
            <SmallLoading/>
        );
    }

};

TopBars.propstype = {
    grade: PropTypes.number.isRequired
};

export default TopBars;