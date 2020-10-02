<template>
    <div class="main-content">
        <!-- BradCrumb header Start-->
        <section class="inner-header-bg">
            <div class="container">
                <!-- Breadcrumb Start-->
                <div class="section-breadcrumb">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 justify-content-center align-self-center pb-2">
                                <div class="breadcrumb-content">
                                    <div class="title-section">
                                        <h1 class="title text-center text-white">
                                            من نحن
                                        </h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="index.html">الرئيسية</a>
                                            </li>
                                            <li class="theme-light-color active">من نحن</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Breadcrumb End -->
            </div>
        </section>
        <!-- BradCrumb header End -->

        <!-- About-bottom section Start-->
        <section class="section about-bottom" style="text-align: right">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7 col-sm-12">
                        <div class="section-title">
                            <span>ماهي</span>
                            <h2>مؤسسة كود التشييد</h2>
                        </div>
                        <p class="about-text mt-4">
                            كود التشييد ليست مجرد شركة مقاولات عامّة بل ركن وحجر زاوية في قطاع التشييد والعمران: أحد أكبر القطاعات الاقتصادية في المملكة.
                        </p>
                        <div class="mt-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="about-list">
                                        <div class="about_series">
                                            <h4 class="font-20 theme-light-color">01.</h4>
                                        </div>
                                        <div class="about_desc section-title">
                                            <h5 class="font-20">رسالتنا</h5>
                                            <p>
                                                أن نكوّن خبراتنا ونسخر القدرات لبناء مجتمعات تقوم على عمران حديث بمواصفات هندسية عالمية في وقت قياسي وبأسعار منافسة.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="about-list">
                                        <div class="about_series">
                                            <h4 class="font-20 theme-light-color">02.</h4>
                                        </div>
                                        <div class="about_desc section-title">
                                            <h5 class="font-20">رؤيتنا</h5>
                                            <p>
                                                أن نساهم في خلق بيئات آمنة وملائمة وحديثة قائمة على الإبداع والتطوير  في جميع أنحاء المملكة.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12">
                        <div class="about-inner-img mt-lg-0 mt-4">
                            <img src="assets/images/dark-logo.png" alt="" class="img-fluid w-100">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About-bottom section End-->


    </div>
</template>
<script>
    //WOW JS
    import { WOW } from 'wowjs';
    // import Swiper styles
    import '../assets/css/swiper.min.css';
    // core version + navigation, pagination modules:
    import Swiper, { Navigation, Pagination } from 'swiper';
    // configure Swiper to use modules
    Swiper.use([Navigation, Pagination]);
    export default {
        name: 'about',
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.initWowAnimation();
                this.initBackgroundImage();
                this.initFooterHeight();
                this.initCounter();
                this.initTestimonialSlider();
            },
            /*----WOW ANIMATION-----*/
            initWowAnimation() {
                var length = $('.wow').length;
                if (length >= 1) {
                    const wow = new WOW({
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 0,
                    });
                    wow.init();
                }
            },
            /*----BACKGROUND IMAGE-----*/
            initBackgroundImage() {
                $(".bg-image").css('background', function () {
                    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
                    return bg;
                });
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
            },
            /*----TESTIMONIAL SLIDER-----*/
            initTestimonialSlider() {
                if ($('.swiper-container').length > 0) {
                    var swiper = new Swiper('.client-container', {
                        slidesPerView: 1,
                        draggable: true,
                        spaceBetween: 10,
                        // init: false,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }
                    });
                }
            },
            /*----COUNTER-----*/
            initCounter() {
                $.fn.jQuerySimpleCounter = function (options) {
                    var settings = $.extend({
                        start: 0,
                        end: 100,
                        easing: 'swing',
                        duration: 400,
                        complete: ''
                    }, options);

                    var thisElement = $(this);

                    $({ count: settings.start }).animate({ count: settings.end }, {
                        duration: settings.duration,
                        easing: settings.easing,
                        step: function () {
                            var mathCount = Math.ceil(this.count);
                            thisElement.text(mathCount);
                        },
                        complete: settings.complete
                    });
                };


                $('#number1').jQuerySimpleCounter({ end: 69, duration: 3000 });
                $('#number2').jQuerySimpleCounter({ end: 45, duration: 3000 });
                $('#number3').jQuerySimpleCounter({ end: 212, duration: 2000 });
                $('#number4').jQuerySimpleCounter({ end: 64, duration: 3000 });
            }
        }
    }
</script>