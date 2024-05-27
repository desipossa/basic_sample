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

})