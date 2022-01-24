/*
 * @Author: Brightness
 * @Date: 2022-01-14 09:52:12
 * @LastEditors: Brightness
 * @LastEditTime: 2022-01-14 15:38:18
 * @Description:  菜单模块
 */
layui.define(["element" ,"jquery"], function(exports) {
    var element = layui.element,
        $ = layui.$;
    var menu = {
        menuList:[],
        render: function (options) {
            let {menuList=[]} = options;
            menu.menuList = menuList;
            menu.renderHeaderMenu(menuList);
            menu.renderSideMenu(menuList[0].child);
            menu.listen()
        },
        //渲染头部菜单
        renderHeaderMenu:function(menuList){
            let html = '';

            menuList.forEach((obj,index)=>{
                html += `<li class="item ${index==0?'active':''}" data-menu="${index}">${obj.title}</li>`
            })
            $('.brightness .header .nav').html(html);
        },
        //渲染侧边菜单
        renderSideMenu:function(menuList){
            let html = '';
            menuList.forEach((obj,index)=>{
                let hasChild = Array.isArray(obj.child)&&obj.child.length;
                html += `<li class="layui-nav-item">
                    <a ${hasChild?'':`admin-herf='${obj.href}'`} target="${obj.target}" herf="javascript:;">
                    ${obj.icon?`<i class="${obj.icon}"></i>`:''}
                    <span>${obj.title}</span>
                    </a>`;
                if(Array.isArray(obj.child)&&obj.child.length){
                    html += `<dl class="layui-nav-child">`;
                    obj.child.forEach(c=>{
                        html += `<dd><a admin-herf="${c.href}" target="${c.target}" href="javascript:;">${c.icon?`<i class="${c.icon}"></i>`:''}<span>${c.title}</span></a></dd>`
                    })
                    html += `</dl>`;
                }   
                html += `</li>`;
            });
            $('.brightness .layui-nav-side').html(html);
            element.init('nav','side-nav');
        },
        //监听
        listen:function(){

             //头部菜单点击
            $('body').on('click','[data-menu]',function(){
                $('.brightness .header .nav .item').removeClass('active');
                let menuId = $(this).attr('data-menu');
                $(this).addClass('active');
                menu.renderSideMenu(menu.menuList[menuId].child);
            });

            //监听url变化
            function urlChange(){
                function hashChangeFire(){
                    let hash = location.hash.slice(1);
                    let p = document.querySelector(`[admin-herf="${hash}"]`);
                    p&&p.click();
                }

                if(("onhashchange" in window) && ((typeof document.documentMode==="undefined") || (document.documentMode==8)) ){
                    window.onhashchange = hashChangeFire;
                }
            }
            urlChange();
            //
        }
    };
    exports("menu", menu);
});