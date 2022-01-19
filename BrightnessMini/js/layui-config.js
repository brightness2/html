/*
 * @Author: Brightness
 * @Date: 2022-01-13 15:20:26
 * @LastEditors: Brightness
 * @LastEditTime: 2022-01-14 17:10:33
 * @Description:  layui 扩展配置
 */
window.rootPath = (function (src) {
    src = document.scripts[document.scripts.length - 1].src;
    return src.substring(0, src.lastIndexOf("/") + 1);
})();

layui.config({
    base: rootPath + "layui-module/",
    version: true
}).extend({
    // dtree:"dtree/dtree",//dtree扩展
    admin:"brightness/admin",
    menu:"brightness/menu",
    adminTab:"brightness/adminTab",
    
});