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
                        <a href="#" :data-filter="'.'+filter.filter"
                           :class="['pill-button',filter.isActive?'active':''].join(' ')">
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
    import {TweenMax} from "gsap";
    //MAGNIFIC POPUP JS
    import 'magnific-popup/dist/jquery.magnific-popup.min.js';
    import 'magnific-popup/dist/magnific-popup.css';
    import xmlToJSON from '../assets/xml2json'
    import Axios from 'axios'

    export default {
        name: 'Portfolio',
        mounted() {
            this.init();
            const baseUrl = 'https://my-storage.ams3.digitaloceanspaces.com/'

            Axios.get('https://my-storage.ams3.digitaloceanspaces.com/').then(x => {
                let images = xmlToJSON.parseString(x.data).ListBucketResult[0].Contents
                images = images.map(c => c.Key[0]._text.includes('construction-code') ? baseUrl + c.Key[0]._text : false)
                images = images.filter(c => c)

                const commercialDesign = images.map(c => {
                    if (c.includes('commercial-design'))
                        return {
                            title: 'مشاريع التصميم التجارية',
                            category: 'commercialDesign',
                            imageLink: c,
                        }
                }).filter(c => c)
                commercialDesign.shift()

                const commercialWork = images.map(c => {
                    if (c.includes('commercial-work'))
                        return {
                            title: 'مشاريع التنفيذ التجارية',
                            category: 'commercialWork',
                            imageLink: c,
                        }
                }).filter(c => c)

                const woodWork = images.map(c => {
                    if (c.includes('wood-work'))
                        return {
                            title: 'الاعمال الخشبية',
                            category: 'woodWork',
                            imageLink: c,
                        }
                }).filter(c => c)
                woodWork.shift()

                const housingWork = images.map(c => {
                    if (c.includes('housing-work'))
                        return {
                            title: 'مشاريع التنفيذ السكنية',
                            category: 'housingWork',
                            imageLink: c,
                        }
                }).filter(c => c)
                housingWork.shift()

                const housingDesign = images.map(c => {
                    if (c.includes('housing-design'))
                        return {
                            title: 'مشاريع التصميم السكنية',
                            category: 'housingDesign',
                            imageLink: c,
                        }
                }).filter(c => c)
                housingDesign.shift()

                this.items = [
                    ...commercialDesign,
                    ...commercialWork,
                    ...housingWork,
                    ...housingDesign,
                    ...woodWork
                ]

                this.images = images
            }).then(()=>{
                var $container = $('.portfolio-items');
                $container.imagesLoaded(function() {
                    $container.isotope({
                        filter: '.housingDesign',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                });
            })
        },
        methods: {
            init() {
                this.initIsotop();
                this.initMagnificPopup();
                this.initScaleImage();
            },

            /*----ISOTOP JS-----*/
            initIsotop() {
                $('.portfolio-filter a').click(function() {
                    var $container = $('.portfolio-items');
                    $('.portfolio-filter .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    console.log(selector)
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
                        title: 'تصميم سكني 🏠',
                        filter: 'housingDesign',
                        isActive: true
                    },
                    {
                        title: 'تنفيذ سكني 🏠',
                        filter: 'housingWork'
                    },
                    {
                        title: 'تصميم تجاري 🏦',
                        filter: 'commercialDesign',
                    },
                    {
                        title: 'تنفيذ تجاري 🏦',
                        filter: 'commercialWork'
                    },
                    {
                        title: 'الاعمال الخشبية ',
                        filter: 'woodWork'
                    }
                ],
                items: []
            }
        }
    }
</script>