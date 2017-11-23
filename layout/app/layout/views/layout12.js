/**
 * Created by feichongzheng on 16/12/15.
 */

import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import 'FayAntd/row/style/index.js';
import 'FayAntd/col/style/index.js';
import {NavTop, NavLeft} from '../../navigation';
import './style.css';
import PropTypes from 'prop-types';

const Layout12 = ({children}) => {
    return (
        <div>
            <div id='navTop'>
                <NavTop/>
            </div>
            <div id="navLeft">
                <NavLeft/>
            </div>
            <Row>
                <Col id="fayContent">
                    {children}
                </Col>
            </Row>
        </div>
    );
};

Layout12.propTypes = {
    children: PropTypes.any,
};

export default Layout12;
