import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { HeaderWrap, MbHeader, HeaderMenuItem } from './StyleComponents';
import { HomeOutlined, OrderedListOutlined } from '@ant-design/icons';
import Image from 'next/image';
import bigstandard2_img from 'images/bigstandard2.png';

export const DeskHeader = () => {
    return (
        <HeaderWrap>
            <div className='bigstandard-logo'>
                <Link href="/">
                    <a>
                        <Image
                            src={bigstandard2_img}
                            alt="큰손정석 로고 이미지"
                        />
                    </a>
                </Link>
            </div>
            <div className='header-menu'>
                <div><Link href="/"><a>큰손정석</a></Link></div>
                <div><Link href="/bigrank"><a>정석랭킹</a></Link></div>
            </div>
        </HeaderWrap>
    );
};

export const MobileHeader = () => {
    const [current, setCurrent] = useState(null);

    const handleClick = useCallback((e) => {
        setCurrent(e.key);
    }, []);

    return (

        <MbHeader
            mode='horizontal'
            onClick={handleClick}
            selectedKeys={[current]}
        >
            <HeaderMenuItem icon={<HomeOutlined style={{ fontSize: 20 }}/>} key='home'>
                <Link href="/"><a>큰손정석</a></Link></HeaderMenuItem>
            <HeaderMenuItem icon={<OrderedListOutlined style={{ fontSize: 20 }}/>} key='bigrank'>
                <Link href="/bigrank"><a>정석랭킹</a></Link></HeaderMenuItem>
        </MbHeader>


    );
};

