/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../base';
import apiPath from './apiPath';

const find1 = () => request.get(apiPath.find1);
const find2 = () => request.get(apiPath.find2);
const find3 = () => request.get(apiPath.find3);

export {find1, find2, find3};



