/**
 * Created by feichongzheng on 17/1/4.
 */
export function getQueryString (name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {return decodeURI(r[2]);} return null;
}
