/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    find1: uumsServer + apiRelativePath.find1,
    find2: uumsServer + apiRelativePath.find2,
    find3: uumsServer + apiRelativePath.find3,
};

export default apiPath;
