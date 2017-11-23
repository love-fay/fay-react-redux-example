/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPage: uumsServer + apiRelativePath.findForPage
};

export default apiPath;
