/**
 * Created by feichongzheng on 17/9/28.
 */
import {get} from '../../request';
import apiPath from './apiPath';

const findForPage = () => get(apiPath.findForPage);

export {
    findForPage
};



