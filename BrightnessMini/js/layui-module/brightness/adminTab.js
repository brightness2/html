/*
 * @Author: Brightness
 * @Date: 2022-01-14 17:08:54
 * @LastEditors: Brightness
 * @LastEditTime: 2022-01-14 17:57:11
 * @Description:  admin-tab
 */
layui.define([
    'jquery','element',
], function(exports) {
    var $ = layui.jquery,element = layui.element;
    var adminTab = {

        //监听
        listen:function(){
            
            //监听Tab切换，以改变地址hash值
            element.on('tab(admin-tab)', function(){
                let href = this.getAttribute('lay-id');
                location.hash = href ;
                
            });
            //菜单点击
            $('.brightness').on('click','[admin-herf]',function(){
                let herf = $(this).attr('admin-herf');
                let hasTab = $(`[lay-filter="admin-tab"] [lay-id="${herf}"]`);
                //tab不存在页面则新增tab
                if(hasTab.length<=0){
                    element.tabAdd('admin-tab', {
                        title: $(this).text()
                        ,content: `<iframe src="${herf}" frameborder="0"></iframe>` //支持传入html
                        ,id: herf
                    });
                }
                element.tabChange('admin-tab', herf);  
            })
        }
    };

    exports('adminTab',adminTab);
});