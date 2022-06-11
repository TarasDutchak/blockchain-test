(function ($) {

    /*** PHP localize vars ***/
    let stages_count = 6;

    $(document).ready(
        function () {

            function slider_responsive(count) {
                let responsiveArray = [];

                if (count >= 3) {
                    responsiveArray.push({
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    }, {
                        breakpoint: 576,
                        settings: {

                            slidesToShow: 1.5,
                            slidesToScroll: 1,
                        }
                    })
                }
                if (count >= 4) {
                    responsiveArray.push({
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    })
                }
                if (count >= 5) {
                    responsiveArray.push({
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    })
                }
                if (count >= 6) {
                    responsiveArray.push({
                        breakpoint: 1601,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1,
                        }
                    })
                }

                return responsiveArray;
            }

            $('.servoperateslider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                responsive: slider_responsive(stages_count)
            });

            $('.workinslider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                responsive: slider_responsive(stages_count)
            });

            // FAQ.
            $('.service-faqrow__header').click(
                function () {
                    $('.service-faqrow__header').not($(this)).removeClass('open');
                    $(this).toggleClass('open');

                    $('.service-faqrow__body').not($(this).next('.service-faqrow__body')).slideUp();
                    $(this).next('.service-faqrow__body').slideToggle('fast');
                }
            );

            if ($('.worksect').length > 0) {
                $(
                    function () {
                        $(document).scroll(
                            function () {
                                if ($('.case1').length > 0) {
                                    if ($(this).scrollTop() >= $('.case1').offset().top - 350) {

                                        let bgattr = $('.case1').attr('data-color');
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                                if ($('.case2').length > 0) {
                                    if ($(this).scrollTop() >= $('.case2').offset().top - 350) {

                                        let bgattr = $('.case2').attr('data-color');
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                                if ($('.case3').length > 0) {

                                    if ($(this).scrollTop() >= $('.case3').offset().top - 350) {

                                        let bgattr = $('.case3').attr('data-color');
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                                if ($('.case4').length > 0) {

                                    if ($(this).scrollTop() >= $('.case4').offset().top - 350) {
                                        let bgattr = $('.case4').attr('data-color');
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                                if ($('.case5').length > 0) {

                                    if ($(this).scrollTop() >= $('.case5').offset().top - 350) {
                                        let bgattr = $('.case5').attr('data-color');
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                            }
                        );
                    }
                );
            }
        }
    );


    $('.header__burger').click(
        function () {
            $('header.header').toggleClass('header__blackcolor');
            $('.header__message').toggle();
            $(window).scrollTop(0);
            $('body').toggleClass('noscroll')
            $(this).toggleClass('open');
            $('.header.header .header__nav').toggleClass('show');
        }
    );

    $('.testimonialslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 1380,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    settings: "unslick"
                }
            }

        ]
    });

    // 06.05 - footer
    $('.footerteamsl').slick({
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
        speed: 1500,
        centerMode: false,
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 1601,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });




    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $(document).ready(function () {
        $(':file').on('fileselect', function (event, numFiles, label) {
            $('label span text').text(label);
            $('label span').addClass('active');
        });

    });


    $(document).ready(function () {


        // tabs
        $('.tabsheader__btn').click(function (e) {
            e.preventDefault();
            $('.tabsheader__btn').removeClass('active');
            $(this).addClass('active');
        });

        $('.tabsheader__btn.btn1').click(function () {
            $('.tabsbody__tabcontent').addClass('hide');
            $('.tabsbody__tabcontent.tbcont1').removeClass('hide');
        });

        $('.tabsheader__btn.btn2').click(function () {
            $('.tabsbody__tabcontent').addClass('hide');
            $('.tabsbody__tabcontent.tbcont2').removeClass('hide');
        });

        $('.tabsheader__btn.btn3').click(function () {
            $('.tabsbody__tabcontent').addClass('hide');
            $('.tabsbody__tabcontent.tbcont3').removeClass('hide');
        });



        if ($('textarea').length) {
            var textarea = document.querySelector('textarea');

            textarea.addEventListener('keyup', function () {
                if (this.scrollTop > 0) {
                    this.style.height = this.scrollHeight + "px";
                }
            });
        }

















    });





}(jQuery));