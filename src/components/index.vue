<template>
    <div class="main-content">
        <!-- Start Hero Section -->
        <section class="hero-section gradient-overlay" id="home">
            <div class="swiper-container main-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-inner site-bg-image-1">
                            <div class="slide-content text-white">
                                <h2 class="mb-0 text-center">مؤسسة كود التشييد للمقاولات العامة</h2>
                                <p class="text-white text-center">
                                    نعمل على التقنيات الأساسية لتطوير البناء
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inner site-bg-image-2">
                            <div class="slide-content text-white">
                                <h2 class="mb-0 text-center">حلول مبتكرة وإبداعية</h2>
                                <p class="text-white text-center">
                                    نصمم وننفذ باحترافية عالية جميع المشاريع الهندسية
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next swiper-button-white"></div>
                <div class="swiper-button-prev swiper-button-white"></div>
            </div>
        </section>
        <!--End Hero Section -->
        <!-- Start About Area -->
        <section class="about-area section" id="aboutus">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-title section-title">
                            <span>ماهي</span>
                            <h2>مؤسسة كود التشييد</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="about-text pl-4">
                            <p>
                                مؤسسة كود التشييد ليست مجرد شركة مقاولات عامّة بل ركن وحجر زاوية في قطاع التشييد
                                والعمران: أحد أكبر القطاعات الاقتصادية في المملكة.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mt-4">
                    <div class="col-lg-7">
                        <div class="feature-contents section-heading wow fadeInUp"
                             style="text-align: right"
                             data-wow-duration="1s">

                            <!--                            <h1 class="font-18">-->
                            <!--                                حلول إبداعية-->
                            <!--                                <br>-->
                            <!--                                <span>لتصميم و تنفيذ المشاريع</span>-->
                            <!--                            </h1>-->

                            <p>
                                عبر سنين طويلة من الخبرة في مجال الإعمار والتشطيب والبناء كتبت قصصها المميزة في المملكة
                                العربية السعودية. لكل قصّة كان هنالك أبطال، وآثار هي الأعمال التي تفردت وأصبحت شواهد
                                حيّة، تثير الدهشة في كل لحظة.
                            </p>
                            <p>
                                في قطاع لا يتميز فيه إلا كل مجتهد فنان، وخبير، ثلاثية الإبداع كانت ولازالت هي مصدر
                                الإلهام الذي لا ينضب، ولازالت كود التشييد إلى اليوم تسخر قدراتها وإمكانياتها وخبراتها
                                المتراكمة عبر السنين، من خلال فريق يضمّ مجموعة مهندسيين وفنيين مدربين ومؤهلين لخوض كل
                                تجربة جديدة بروح التحدي والثقة والإبداع.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="download-img scale-image wow fadeInUp" data-wow-duration="1s">
                            <img src="assets/images/people.jpg" alt="download" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End About Area -->
        <!-- Start Services Area -->
        <OurServices/>
        <!-- End Services Area -->

        <!-- Start Portfolio Area -->
        <Portfolio/>
        <!-- End Portfolio Area -->

        <!-- Start partners Area -->
        <Partners/>
        <!-- End partners Area -->
        <!-- Start Jumbstrom Area -->
        <section class="section parallax-bg">
            <div class="container">
                <div class="z-index9 wow fadeIn" data-wow-duration="1s">
                    <h2 class="text-white text-center">
                        إبدأ بتصميم و تنفيذ<br/> مشروعك بأفضل التقنيات
                    </h2>
                    <div class="d-flex justify-content-center mt-4">
                        <button class="btn outline-theme-btn">تواصل معنا الأن</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Jumbstrom Area -->

        <!-- Start Faq's Area -->
        <section class="section" v-if="false">
            <div class="container">
                <div class="text-center section-title">
                    <span>FAQ's</span>
                    <h2>Frequently Ask Questions</h2>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div id="accordion" class="accordion accordion-faq wow fadeInUp" data-wow-duration="1s">
                            <div class="card bg-white">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse"
                                   href="#collapseOne">
                                    <span class="card-title">
                                        <strong> How do I get access to a theme?</strong>
                                    </span>
                                </a>
                                <div id="collapseOne" class="card-body collapse" data-parent="#accordion">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. simplify sustainable applications whereas adaptive schemas.
                                    </p>
                                </div>
                            </div>
                            <div class="card bg-white">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse"
                                   data-parent="#accordion" href="#collapseTwo">
                                    <span class="card-title">
                                        <strong> How do I get access to a theme?</strong>
                                    </span>
                                </a>
                                <div id="collapseTwo" class="card-body collapse" data-parent="#accordion">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. simplify sustainable applications whereas adaptive schemas.
                                    </p>
                                </div>
                            </div>
                            <div class="card bg-white">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse"
                                   data-parent="#accordion" href="#collapseThree">
                                    <span class="card-title">
                                        <strong> How do I get access to a theme?</strong>
                                    </span>
                                </a>
                                <div id="collapseThree" class="card-body collapse pt-0" data-parent="#accordion">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. simplify sustainable applications whereas adaptive schemas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="accordion1" class="accordion accordion-faq wow fadeInUp" data-wow-duration="1s">
                            <div class="card bg-white">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse"
                                   data-parent="#accordion1" href="#collapseFour">
                                    <span class="card-title">
                                        <strong> How do I get access to a theme?</strong>
                                    </span>
                                </a>
                                <div id="collapseFour" class="card-body collapse" data-parent="#accordion1">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. simplify sustainable applications whereas adaptive schemas.
                                    </p>
                                </div>
                            </div>
                            <div class="card bg-white">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse"
                                   data-parent="#accordion1" href="#collapseFive">
                                    <span class="card-title">
                                        <strong> How do I get access to a theme?</strong>
                                    </span>
                                </a>
                                <div id="collapseFive" class="card-body collapse" data-parent="#accordion1">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. simplify sustainable applications whereas adaptive schemas.
                                    </p>
                                </div>
                            </div>
                            <div class="card bg-white">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse"
                                   data-parent="#accordion1" href="#collapseSix">
                                    <span class="card-title">
                                        <strong> How do I get access to a theme?</strong>
                                    </span>
                                </a>
                                <div id="collapseSix" class="card-body collapse" data-parent="#accordion1">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. simplify sustainable applications whereas adaptive schemas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Faq's Area -->

        <!-- Start Contact Area -->
        <section class="section bg-light" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 pb-3 message-box d-none">
                        <div class="alert alert-danger"></div>
                    </div>
                    <div class="col-md-7">
                        <div class="wow fadeInLeft" data-wow-duration="1s" style="text-align: right">
                            <div class="section-heading">
                                <h3>تواصل معنا</h3>
                                <p>
                                    يرجى التواصل معنا لترتيب المواعيد اللازمة لمناقشة وتخطيط المشاريع الهندسية
                                    وبذلك نستطيع البدء في العمل على مشروعك القادم.
                                    تستطيع زيارتنا على العنوان الموضح ادناه او التواصل مباشرة معنا عن طريق ارقام التواصل
                                    المذكورة
                                </p>
                            </div>
                            <div class="footer-address mt-4">
                                <h6 class="font-20 mb-3">
                                    <strong>موقع مكتبنا الرئيسي</strong>
                                </h6>
                                <ul class="list-unstyled">
                                    <li class="mb-3">
                                        <i class="mdi-map-marker mdi mr-2"></i>
                                        <span>الرياض، شارع ابي بكر الصديق </span>
                                    </li>
                                    <li class="mb-3">
                                        <i class="mdi-cellphone mdi mr-2"></i>
                                        <span >

                                            <a href="tel:+966500473701">966500473701</a>
                                            +
                                        </span>
                                    </li>
                                    <li class="mb-3">
                                        <i class="mdi-email mdi mr-2"></i>
                                        <span>
                                            <a href="mailto:Constructioncode2016@gmail.com"
                                               class="text-dark">Constructioncode2016@gmail.com </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <iframe
                            width="450"
                            height="400"
                            frameborder="0" style="border:0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBH90KAxoz2xCoJnwrdvNAKf_d8AH9EknU&q=مؤسسة+كود+التشييد+للمقاولات+العامة"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
        <!-- Start Contact Area -->
    </div>
</template>
<script>
    //WOW JS
    import {WOW} from 'wowjs';
    // import Swiper styles
    import '../assets/css/swiper.min.css';
    // core version + navigation, pagination modules:
    import Swiper, {Navigation, Pagination} from 'swiper';
    import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
    import {TimelineMax, TweenMax} from "gsap"; // Also works with TweenLite and TimelineLite
    import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
    import OurServices from "../components/OurServices";
    import Partners from "../components/Partners";
    import Portfolio from "../components/Portfolio";
    // configure Swiper to use modules
    Swiper.use([Navigation, Pagination]);

    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    export default {
        name: 'index',
        components: {Portfolio, Partners, OurServices},
        mounted() {
            if (window.innerWidth < 600) {
                this.slider1 = 'assets/images/slider-img/slider2-mobile.jpg';
                this.slider2 = 'assets/images/slider-img/slider1-mobile.jpg';
            } else {
                this.slider1 = 'assets/images/slider-img/slider2.jpg';
                this.slider2 = 'assets/images/slider-img/slider1.jpg';
            }
            this.init();

            window.onresize = () => {
                if (window.innerWidth < 600) {
                    this.slider1 = 'assets/images/slider-img/slider2-mobile.jpg';
                    this.slider2 = 'assets/images/slider-img/slider1-mobile.jpg';
                } else {
                    this.slider1 = 'assets/images/slider-img/slider2.jpg';
                    this.slider2 = 'assets/images/slider-img/slider1.jpg';
                }
                this.initSiteBackgroundImage();
            }
        },
        data() {
            return {
                render: true,
                slider1: '',
                slider2: '',
            }
        },
        methods: {
            init() {
                this.initMainSlider();
                this.initBackgroundImage();
                this.initSiteBackgroundImage();
                this.initWowAnimation();
                this.initAccordian();
                this.windowScroll();
                this.initFooterHeight();
            },
            /*----MAIN ANIMATION-----*/
            initMainSlider() {
                var swiperOptions = {
                    loop: true,
                    speed: 1000,
                    grabCursor: true,
                    watchSlidesProgress: true,
                    mousewheelControl: true,
                    keyboardControl: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                };
                var swiper = new Swiper(".main-slider", swiperOptions);
            },
            /*----BACKGROUND IMAGE-----*/
            initBackgroundImage() {
                $(".bg-image").css('background', function() {
                    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
                    return bg;
                });
            },
            initSiteBackgroundImage() {
                let self = this;
                $(".site-bg-image-1").css('background', function() {
                    var bg = ('url(' + self.slider1 + ') center center / cover no-repeat');
                    return bg;
                })
                $(".site-bg-image-2").css('background', function() {
                    var bg = ('url(' + self.slider2 + ') center center / cover no-repeat');
                    return bg;
                });
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
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
            /*----ONSCROLL JS-----*/
            windowScroll() {
                var self = this;
                $(window).on("scroll", function() {
                    //self.initCounter();
                });
            },
            /*----ACCORDIAN-----*/
            initAccordian() {
                $(".question-card").on('click', function() {
                    if ($(this).hasClass('active')) {
                        $('.question-card').removeClass('active');
                        $(this).removeClass('active')
                    } else {
                        $('.question-card').removeClass('active');
                        $(this).addClass('active')
                    }
                });
            },
        }
    }
</script>