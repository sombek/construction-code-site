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

    String.prototype.camelize = function() {
        return this.split('-').map(function(word,index){
            if(index === 0)
                return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }

    Array.prototype.unique =function(propertyName) {
        return this.filter((e, i) => this.findIndex(a => a[propertyName] === e[propertyName]) === i);
    }

    export default {
        name: 'Portfolio',
        mounted() {
            this.init();
            const baseUrl = 'https://my-storage.ams3.digitaloceanspaces.com/'
            const fileName = 'construction-code/'
            Axios.get('https://my-storage.ams3.digitaloceanspaces.com/').then(async x => {
                let images = xmlToJSON.parseString(x.data).ListBucketResult[0].Contents
                images = images.map(c => c.Key[0]._text.includes('construction-code') ? baseUrl + c.Key[0]._text : false)
                images = images.filter(c => c)

                const fullFolderName = baseUrl+fileName;
                let imageFoldersNames = new Set();
                images.forEach(image=>imageFoldersNames.add(image.split(fullFolderName)[1].split('/')[0]));
                imageFoldersNames = Array.from(imageFoldersNames).filter(c=>c);

                const allItems = [];
                for (const folder of imageFoldersNames) {
                    let jsonFile;

                    // find the title of the folder by finding the json file and use the title from it
                    await new Promise((resolve) => {
                        images.forEach(async c => {
                            if (c.includes(folder+'/') && c.includes('.json')){
                                jsonFile = (await Axios.get(c)).data;
                                this.filters.push(jsonFile)
                                resolve();
                            }
                        });
                    });

                    // prepare the object for images
                    images.forEach(c => {
                        if (c.includes(folder+'/') && c.split(folder + '/')[1] && !c.includes('.json'))
                            allItems.push({
                                title: jsonFile.title,
                                category: folder.camelize(),
                                imageLink: c,
                            })
                    })
                }

                this.items = allItems;
                this.images = images
            }).then(()=>{
                this.initIsotop();
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
                filters: [],
                items: []
            }
        }
    }
</script>
