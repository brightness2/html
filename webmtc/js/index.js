/*
 * @Author: Brightness
 * @Date: 2021-08-26 16:52:06
 * @LastEditors: Brightness
 * @LastEditTime: 2021-09-03 15:15:21
 * @Description:
 */
document.documentElement.style.overflowY = "hidden"; //隐藏滚动条
$(function () {
    /******全局轮播 开始******** */
    var overSwiper = new Swiper("#over-swiper", {
        autoplay: false,
        loop: false,
        grabCursor: false,
        direction: "vertical",
        height: window.innerHeight,
        mousewheel: true,
        speed: 800,
        simulateTouch: false, //禁止鼠标模拟
        on: {
            init: function (swiper) {
                /***********轮播 开始***************** */
                var banner = new Swiper("#banner", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 8000, //5秒切换一次
                    },
                    loop: true,
                    grabCursor: true,
                });

                /*****************轮播 开始************************* */
                $(".doAnime").css("opacity", 0);
                doAnime();
            },
            slideChangeTransitionStart: function () {
                $(".doAnime").css("opacity", 0);
            },
            slideChangeTransitionEnd: function () {
                doAnime();
            },
        },
    });
    /*********全局轮播 结束****************** */
    /*************导航点击************ */
    $(".nav .item").click(function () {
        let id = $(this).attr("data-nav");
        overSwiper.slideTo(id);
    });
});

/*****动画 */
function doAnime() {
    anime({
        targets: ".doAnime.fadeIn",
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
    });
    anime({
        targets: ".doAnime.fadeInLeft",
        opacity: [0, 1],
        translateX: ["240px", 0],
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
    });
    anime({
        targets: ".doAnime.fadeInRight",
        opacity: [0, 1],
        translateX: ["-240px", 0],
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
    });
    anime({
        targets: ".doAnime.scale",
        opacity: [0, 1],
        scale: [0, 1],
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
    });
    anime({
        targets: ".doAnime.fadeInTop",
        opacity: [0, 1],
        translateY: ["240px", 0],
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
    });
    anime({
        targets: ".doAnime.fadeInBottom",
        opacity: [0, 1],
        translateY: ["-240px", 0],
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
    });
}
