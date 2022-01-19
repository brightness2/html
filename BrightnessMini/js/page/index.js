/*
 * @Author: Brightness
 * @Date: 2022-01-13 15:22:36
 * @LastEditors: Brightness
 * @LastEditTime: 2022-01-14 15:27:18
 * @Description:  首页js
 */
layui.use(['jquery','admin'],function(){
    var $ = layui.jquery,admin = layui.admin
    
    let options = {
        initUrl:'../../json/init.json',
    }
    admin.render(options);
    
})