$(function () {

    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        useTransform: false
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/TWlRhK8Ll-Q',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });


    let sw = true;

    $('.main_movie .switch').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    });


    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });


    $('.mian_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.mian_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });


    $('.main_event_slide').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
    });



})