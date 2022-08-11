import React from 'react';
import AppLayout from '../components/AppLayout';
import SearchInput from '../components/SearchInput';
import TopTenRank from '../components/TopTenRank';

const Home = () => {
    return (
        <AppLayout>
            <div className='home-main'>
                <div className='home-img-box'></div>
                <SearchInput />
                <TopTenRank />
            </div>
        </AppLayout>
    );
};

export default Home;
