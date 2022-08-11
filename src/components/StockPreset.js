import React, { useEffect, useState } from 'react';
import { StockPresetLeft, StockPresetRight, RatioSpan } from './StyleComponents';
import { commas } from 'utils/method';
import PropTypes from 'prop-types';
import AnimatingNumber from './AnimatingNumber';
import { useSelector } from 'react-redux';

const initialStock = {
    hname: '-',
    shcode: '-',
    ratio: 0,
    price: 0,
    diff: 0
};


const StockPreset = ({ stockData, rightClass = '' }) => {
    const [socketVal, setSocketVal] = useState(null);
    const { socket } = useSelector(state => state.global);
    useEffect(() => {
        if (socket) {
            socket.emit('subscribe', [stockData.shcode]);
            socket.on('publish', function (val) {
                if (val.shcode === stockData.shcode) {
                    setSocketVal(val);
                }
            });
        }
    }, []);

    if (stockData) {
        const { hname, shcode, price, ratio, diff } = socketVal || stockData || initialStock;
        return (
            <>
                <StockPresetLeft>
                    <h4>{hname}</h4>
                    <span>{shcode}</span>
                </StockPresetLeft>
                <StockPresetRight className={rightClass}>
                    <div className='rank-diff-wrap'>
                        <h4><AnimatingNumber value={price}/></h4>
                        <div>
                            <span className='rank-price-diff'>{commas(diff)}</span>
                            <RatioSpan num={ratio}>{parseFloat(ratio).toFixed(1)}%</RatioSpan>
                        </div>
                    </div>
                </StockPresetRight>
            </>
        );
    } else {
        return (
            <></>
        );
    }

};

StockPreset.propstype = {
    stockData: PropTypes.object.isRequired,
    rightClass: PropTypes.string
};


export default StockPreset;
