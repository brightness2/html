/*
 * @Author: Brightness
 * @Date: 2022-01-14 15:08:46
 * @LastEditors: Brightness
 * @LastEditTime: 2022-01-14 17:22:37
 * @Description:  
 */
layui.define(['jquery','menu','adminTab','layer'], function(exports) {
    var $ = layui.jquery,
        adminTab = layui.adminTab,
        layer = layui.layer,
        menu = layui.menu;
    
    var admin = {

        render: function (options) {
            let {initUrl} = options;

            //请求菜单
            $.getJSON(initUrl, {},
                function (data) {
                    if(data == null){
                        admin.error('暂无菜单信息');
                    }else{
                        let {logoInfo,menuInfo} = data;
                        admin.renderLogo(logoInfo);
                        menu.render({menuList:menuInfo});
                        adminTab.listen();
                    }
                }
            );
        },
        renderLogo:function(data){ 
            $('#logo img').attr('src',data.image);
            $('#logo h1').html(data.title);
        },
        error:function(str){
            layer.msg(str,{icon:2})
        }

    }

    exports('admin',admin);
});
