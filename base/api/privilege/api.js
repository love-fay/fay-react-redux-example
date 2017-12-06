/**
 * Created by feichongzheng on 17/9/28.
 */
import {get} from '../../request';
import apiPath from './apiPath';

const find1 = () => get(apiPath.find1);
const find2 = () => get(apiPath.find2);
const find3 = () => get(apiPath.find3);

export {find1, find2, find3};



