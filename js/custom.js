$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.mainVisual .visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true
    })

    $('.mainSlider .slider_wrap').slick({
        arrows: false,
        autoplay: true
    })

    $('.mainSlider .slider_wrap').on('afterChange', function (e, s, c) {
        console.log(e, s, c);   //c=0,1
        $('.mainSlider .top_dots li').removeClass('on');
        $('.mainSlider .top_dots li').eq(c).addClass('on');
        $('.mainSlider .num span').text(c + 1);

        const current = $('.mainSlider .slider_wrap .slick-current')
        current.addClass('on').siblings().removeClass('on')
    });

    $('.mainSlider .top_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.mainSlider .slider_wrap').slick('slickGoTo', idx)
    });

    $('.mainSlider .arrows .left').on('click', function () {
        $('.slider_wrap').slick('slickPrev');
    })
    $('.mainSlider .arrows .right').on('click', function () {
        $('.slider_wrap').slick('slickNext');
    });



    $('.mainTap .maintap_slide').slick({
        arrows: false,
        autoplay: true,
        dots: false,
    })

    $('.mainTap .bot_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.mainTap .maintap_slide').slick('slickGoTo', idx)
    });

    $('.mainTap .maintap_slide').on('afterChange', function (e, s, c) {
        $('.mainTap .bot_dots ul li').eq(c).addClass('on').siblings().removeClass('on')
    })


    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

});