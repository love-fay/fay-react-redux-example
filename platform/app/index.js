/**
 * Created by feichongzheng on 16/12/7.
 */
import React from 'react';
import {render} from 'react-dom';
import Router from './router';
import {appInfo} from '../../base';

document.title = appInfo.appName;
render(<Router/>, document.getElementById('app'));
