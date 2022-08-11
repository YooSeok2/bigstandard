import React from 'react';
import { Spin } from 'antd';
import { LoadingSpin } from './StyleComponents';

const Loading = () => {
    return (
        <LoadingSpin>
            <Spin size='large' />
        </LoadingSpin>

    );
};

export default Loading;