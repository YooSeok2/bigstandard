import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import GlobalStyle from '../styles/globals';
import '../styles/common.scss';
import '../styles/app.css';
import '../fonts/fonts.css';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_STOCKS_REQUEST, LOAD_RANKS_REQUEST } from 'reducers/stock';
import { SET_WINDOW_WIDTH, SET_WINDOW_HEIGHT, SET_SOCKET } from 'reducers/global';
import { debounce } from 'lodash';
import { io } from 'socket.io-client';
import Head from 'next/head';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

const Bigstandard = ({ Component, pageProps }) => {
    const dispatch = useDispatch();
    const { socket } = useSelector((state) => state.global);

    useEffect(() => {
        if (socket === null) {
            const socket = io.connect(SOCKET_URL, {
                transports: ['websocket']
            });
            dispatch({
                type: SET_SOCKET,
                data: socket
            });
        }
        dispatch({
            type: SET_WINDOW_WIDTH,
            data: window.innerWidth
        });
        dispatch({
            type: SET_WINDOW_HEIGHT,
            data: window.innerHeight
        });
        dispatch({
            type: LOAD_STOCKS_REQUEST
        });
        dispatch({
            type: LOAD_RANKS_REQUEST,
            data: { offset: 0 }
        });
    }, []);

    useEffect(() => {
        const onWindowResize = debounce(() => {
            dispatch({
                type: SET_WINDOW_WIDTH,
                data: window.innerWidth
            });
            dispatch({
                type: SET_WINDOW_HEIGHT,
                data: window.innerHeight
            });
        }, 200);
        window.addEventListener('resize', onWindowResize);
        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0,
                 maximum-scale=1.0, user-scalable=no" />
                <title>큰손정석</title>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    );
};

Bigstandard.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default wrapper.withRedux(Bigstandard);
