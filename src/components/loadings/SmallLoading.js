import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SmallLoading = () => {
    return (
        <Loading>
            <Spin size='large' />
        </Loading>
    );
};

export default SmallLoading;