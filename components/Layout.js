import React from 'react';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';

import styler from '../helpers/styler';

const Layout = (props) => (
    <div className={styler(['main_wrapper'])}>
        <Header/>
        <Navigation/>
        <div className={styler(['main'])}>
        {props.children}
        </div>

    </div>
);

export default Layout