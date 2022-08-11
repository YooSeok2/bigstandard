import React from 'react';
import PropTypes from 'prop-types';
import { DeskHeader, MobileHeader } from './Header';
import { MbMain } from './StyleComponents';
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {
    const { windowWidth, windowHeight } = useSelector((state) => state.global);
    if (windowWidth) {
        return (
            <>
                {windowWidth < 600 || windowHeight < 700 ?
                    <div>
                        <MobileHeader/>
                        <MbMain>
                            {children}
                        </MbMain>
                    </div>
                    :
                    <div>
                        <DeskHeader />
                        {children}
                    </div>
                }
            </>
        );
    } else {
        return (
            <></>
        );
    }

};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppLayout;