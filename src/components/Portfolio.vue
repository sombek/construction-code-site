<template>
    <section class="section portfolio-section">
        <div class="container">
            <div class="section-title text-center z-index9">
                <span>ملف الأعمال</span>
                <h2>ملف اعمالنا للخدمات المنفذة</h2>
            </div>
            <div class="d-flex justify-content-center wow fadeIn" data-wow-duration="1s">
                <ul id="portfolio-filter" class="portfolio-filter filters mt-4 p-0">
                    <li class="button-border list-inline-item">
                        <a href="#" data-filter="*" class="pill-button">جميع الأعمال</a>
                    </li>

                    <li class="button-border list-inline-item" v-for="filter of filters" :key="filter.filter">
                        <a href="#" :data-filter="'.'+filter.filter" class="pill-button">
                            {{filter.title}}
                        </a>
                    </li>

                </ul>
            </div>

            <div class="portfolio-items row no-gutters mt-4  wow fadeIn" data-wow-duration="1s">

                <div v-for="item of items"
                     :key="item.imageLink"
                     :class="['col-lg-4 col-sm-2 portfolio-item', item.category].join(' ')">
                    <div class="image-border">
                        <div class="portfolio-box scale-image">
                            <div :style="`height: 250px;background:url(${item.imageLink});  background-position: center; background-size: cover;`"/>
                            <div class="portfolio-icon d-flex align-items-center justify-content-center">
                                <a :href="item.imageLink" class="js-zoom-gallery">
                                    <i class="mdi mdi-magnify-plus-outline"></i>
                                </a>
                            </div>
                            <div class="img-overlay text-white text-center">
                                <h5 class="mb-0">{{item.title}}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
    //ISOTOP JS
    import '../assets/js/jquery.isotope.min.js';
    import * as ScrollMagic from "scrollmagic";
    import {TweenMax, TimelineMax} from "gsap";
    //MAGNIFIC POPUP JS
    import 'magnific-popup/dist/jquery.magnific-popup.min.js';
    import 'magnific-popup/dist/magnific-popup.css';

    export default {
        name: 'Portfolio',
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.initIsotop();
                this.initMagnificPopup();
                this.initScaleImage();
            },

            /*----ISOTOP JS-----*/
            initIsotop() {
                var $container = $('.portfolio-items');
                $container.imagesLoaded(function() {
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                });

                $('.portfolio-filter a').click(function() {
                    $('.portfolio-filter .current').removeClass('current');
                    $(this).addClass('current');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
                });
            },
            /*----MAGNIFIC POPUP JS-----*/
            initMagnificPopup() {
                if (('.portfolio-items').length > 0) {
                    $('.portfolio-items').each(function() {
                        $(this).magnificPopup({
                            delegate: '.js-zoom-gallery',
                            type: 'image',
                            gallery: {
                                enabled: true
                            }
                        });
                    });
                }
            },
            initScaleImage() {
                var controller = new ScrollMagic.Controller();
                var slides = $('.scale-image');
                for (var i = 0; i < slides.length; i++) {
                    var image = $('img', slides[i]);
                    var tween = TweenMax.to(image, 1, {scale: 1.2});
                    var scene = new ScrollMagic
                        .Scene({
                            triggerElement: slides[i],
                            duration: "200%",
                            triggerHook: 'onEnter'
                        })
                        .setTween(tween)
                        .addTo(controller);
                }
            }
        },
        data() {
            return {
                filters: [
                    {
                        title: 'مشاريع مطاعم واكشاك',
                        filter: 'cafe'
                    },
                    {
                        title: 'مشاريع صوالين حلاقة',
                        filter: 'barber'
                    },
                    {
                        title: 'مشاريع فلل',
                        filter: 'villa'
                    },
                    {
                        title: 'مشاريع مجالس',
                        filter: 'rooms'
                    },
                    {
                        title: 'مشاريع المكاتب',
                        filter: 'offices'
                    },
                ],
                items: [
                    {
                        title: 'مشروع كوفي شوب | 1',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/1.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 2‎',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/2.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 3‎',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/3.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 4‎',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/4.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 5',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/5.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 6‎',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/6.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 7',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/7.jpg'
                    }, {
                        title: 'مشروع كوفي شوب | 8‎',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/cafe/8.jpg'
                    }, {
                        title: 'تنفيذ مطاعم و اكشاك | 1',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/rest/1.jpg'
                    }, {
                        title: 'تنفيذ مطاعم و اكشاك | 2',
                        category: 'cafe',
                        imageLink: 'assets/images/portfolio/rest/2.jpg'
                    },


                    {
                        title: 'مشروع صالون حلاقة | 1‎',
                        category: 'barber',
                        imageLink: 'assets/images/portfolio/barber/1.jpg'
                    }, {
                        title: 'مشروع صالون حلاقة | 2‎',
                        category: 'barber',
                        imageLink: 'assets/images/portfolio/barber/2.jpg'
                    }, {
                        title: 'مشروع صالون حلاقة | 3‎',
                        category: 'barber',
                        imageLink: 'assets/images/portfolio/barber/3.jpg'
                    },

                    {
                        title: 'تصميم واجهة ڤيلا | 1‎',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/1.jpg'
                    }, {
                        title: 'تصميم واجهة ڤيلا | 2‎',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/2.jpg'
                    }, {
                        title: 'تصميم واجهة ڤيلا | 3‎',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/3.jpg'
                    }, {
                        title: 'تصميم واجهة ڤيلا | 4‎',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/4.jpg'
                    }, {
                        title: 'تصميم واجهة ڤيلا | 5',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/5.jpg'
                    }, {
                        title: 'تصميم واجهة ڤيلا | 6',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/6.jpg'
                    }, {
                        title: 'تصميم واجهة ڤيلا | 7',
                        category: 'villa',
                        imageLink: 'assets/images/portfolio/villa/7.jpg'
                    },

                    {
                        title: 'مشروع مجلس اسلامي | 1',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/islamic/1.jpg'
                    }, {
                        title: 'مشروع مجلس اسلامي | 2',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/islamic/2.jpg'
                    }, {
                        title: 'مشروع مجلس اسلامي | 3',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/islamic/3.jpg'
                    }, {
                        title: 'مشروع مجلس اسلامي | 4',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/islamic/4.jpg'
                    },

                    {
                        title: 'تنفيذ مكاتب | 1',
                        category: 'offices',
                        imageLink: 'assets/images/portfolio/office/1.jpg'
                    }, {
                        title: 'تنفيذ مكاتب | 2',
                        category: 'offices',
                        imageLink: 'assets/images/portfolio/office/2.jpg'
                    }, {
                        title: 'تنفيذ مكاتب | 3',
                        category: 'offices',
                        imageLink: 'assets/images/portfolio/office/3.jpg'
                    }, {
                        title: 'تنفيذ مكاتب | 4',
                        category: 'offices',
                        imageLink: 'assets/images/portfolio/office/4.jpg'
                    },

                    {
                        title: 'مجالس عربية | 1',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/rooms/1.jpg'
                    }, {
                        title: 'مجالس عربية | 2',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/rooms/2.jpg'
                    }, {
                        title: 'مجالس عربية | 3',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/rooms/3.jpg'
                    }, {
                        title: 'مجالس عربية | 4',
                        category: 'rooms',
                        imageLink: 'assets/images/portfolio/rooms/4.jpg'
                    },

                ]
            }
        }
    }
</script>