/*
 * @Author: Brightness
 * @Date: 2021-07-27 09:09:35
 * @LastEditors: Brightness
 * @LastEditTime: 2021-07-27 16:14:03
 * @Description:
 */
layui.use(["layer", "jquery", "carousel"], () => {
    var layer = layui.layer,
        carousel = layui.carousel,
        $ = layui.jquery;

    carousel.render({
        elem: "#lunbo-carousel",
        width: "100%", //设置容器宽度
        height: "56vw",
        arrow: "always", //始终显示箭头
    });

    $(window).scroll(function () {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 100) {
            $(".nav.big").addClass("nav-fixed");
        } else {
            $(".nav.big").removeClass("nav-fixed");
        }
    });
});
