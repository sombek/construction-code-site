<template>
    <section class="section portfolio-section">
        <div class="container">
            <div class="section-title text-center z-index9">
                <span>ملف الأعمال</span>
                <h2>ملف اعمالنا للخدمات المنفذة</h2>
            </div>

<!--            <div class="d-flex justify-content-center wow fadeIn" data-wow-duration="1s">-->
<!--                <ul id="portfolio-filter" class="portfolio-filter filters mt-4 p-0">-->
<!--                    <li class="button-border list-inline-item">-->
<!--                        <a href="#" data-filter="*" class="pill-button">جميع الأعمال</a>-->
<!--                    </li>-->

<!--                    <li class="button-border list-inline-item" v-for="filter of filters" :key="filter.filter">-->
<!--                        <a href="#" :data-filter="'.'+filter.filter"-->
<!--                           :class="['pill-button',filter.isActive?'active':''].join(' ')">-->
<!--                            {{filter.title}}-->
<!--                        </a>-->
<!--                    </li>-->

<!--                </ul>-->
<!--            </div>-->

            <div style="text-align: center">
                <b-dropdown text="تصميم تجاري" class="m-md-2" style="margin: 0 5px;min-width: 150px">
                    <b-dropdown-item v-for="item of commercialDesign"
                                     :data-filter="`.${item.filter}`"
                                     :key="item.title">{{item.title}}
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown text="تنفيذ تجاري" class="m-md-2" style="margin: 0 5px;min-width: 150px">
                    <b-dropdown-item v-for="item of commercialWork"
                                     :data-filter="`.${item.filter}`"
                                     :key="item.title">{{item.title}}
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <br>
            <div style="text-align: center">
                <b-dropdown text="تصميم سكني" class="m-md-2" style="margin: 0 5px;min-width: 150px">
                    <b-dropdown-item v-for="item of residentialDesign"
                                     :data-filter="`.${item.filter}`"
                                     :key="item.title">{{item.title}}
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown text="تنفيذ سكني" class="m-md-2" style="margin: 0 5px;min-width: 150px">
                    <b-dropdown-item v-for="item of residentialWork"
                                     :data-filter="`.${item.filter}`"
                                     :key="item.title">{{item.title}}
                    </b-dropdown-item>
                </b-dropdown>
            </div>

            <h4 style="margin-top: 20px;text-align: center">{{currentTitle}}</h4>

            <div id="clickMe"></div>
            <div class="portfolio-items row no-gutters mt-4  wow fadeIn" data-wow-duration="1s">

                <div v-for="item of items"
                     :key="item.imageLink"
                     :class="['col-lg-4 col-sm-2 portfolio-item', item.category].join(' ')">
                    <div class="image-border">
                        <div class="portfolio-box scale-image">
                            <div :style="`height: 250px;background:url(${item.imageLink}); background-position: center; background-size: cover;`"/>

                            <div class="portfolio-icon d-flex align-items-center justify-content-center">
                                <a :href="item.imageLink" class="js-zoom-gallery">
                                    <i class="mdi mdi-magnify-plus-outline"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<style>
    .dropdown-toggle::after {
        margin-right: 0.255em;
    }

    .dropdown.b-dropdown button {
        background: transparent;
        color: #314584;
        border-radius: 30px;
        border: 2px solid #314584;
    }

    .show > .btn.btn-secondary.dropdown-toggle {
        background: #f2b636;
        color: #fff;
        border: 2px solid #f2b636;
    }

    dropdown-item.active, .dropdown-item:active {
        color: #fff;
        text-decoration: none;
        background-color: #f2b636 !important;
    }
</style>
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
        return this.split('-').map(function(word, index) {
            if (index === 0)
                return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }

    Array.prototype.unique = function(propertyName) {
        return this.filter((e, i) => this.findIndex(a => a[propertyName] === e[propertyName]) === i);
    }

    export default {
        name: 'Portfolio',
        mounted() {
            this.init();
            const baseUrl = 'https://my-storage.ams3.digitaloceanspaces.com/'
            const fileName = 'construction-code/'
            const self = this;

            Axios.get('https://my-storage.ams3.digitaloceanspaces.com/').then(async x => {
                let images = xmlToJSON.parseString(x.data).ListBucketResult[0].Contents
                images = images.map(c => c.Key[0]._text.includes('construction-code') ? baseUrl + c.Key[0]._text : false)
                images = images.filter(c => c)

                const fullFolderName = baseUrl + fileName;
                let imageFoldersNames = new Set();
                images.forEach(image => imageFoldersNames.add(image.split(fullFolderName)[1].split('/')[0]));
                imageFoldersNames = Array.from(imageFoldersNames).filter(c => c);

                const allItems = [];
                for (const folder of imageFoldersNames) {
                    let jsonFile;

                    // find the title of the folder by finding the json file and use the title from it
                    await new Promise((resolve) => {
                        images.forEach(async c => {
                            if (c.includes(folder + '/') && c.includes('.json')) {
                                jsonFile = (await Axios.get(c)).data;
                                this.filters.push(jsonFile)
                                resolve();
                            }
                        });
                    });

                    if (folder.includes("commercial-designs")) {
                        // find the title of the folder by finding the json file and use the title from it
                        await new Promise((resolve) => {
                            images.forEach(async c => {
                                if (c.includes(folder + '/') && c.includes('.json')) {
                                    jsonFile = (await Axios.get(c)).data;
                                    resolve();
                                }
                            });
                        });
                        self.commercialDesign.push({...jsonFile})
                    } else if (folder.includes("commercial-work")) {
                        // find the title of the folder by finding the json file and use the title from it
                        await new Promise((resolve) => {
                            images.forEach(async c => {
                                if (c.includes(folder + '/') && c.includes('.json')) {
                                    jsonFile = (await Axios.get(c)).data;
                                    resolve();
                                }
                            });
                        });
                        self.commercialWork.push({...jsonFile})
                    } else if (folder.includes("housing-design")) {
                        // find the title of the folder by finding the json file and use the title from it
                        await new Promise((resolve) => {
                            images.forEach(async c => {
                                if (c.includes(folder + '/') && c.includes('.json')) {
                                    jsonFile = (await Axios.get(c)).data;
                                    resolve();
                                }
                            });
                        });
                        self.residentialDesign.push({...jsonFile})
                    } else if (folder.includes("housing-work")) {
                        // find the title of the folder by finding the json file and use the title from it
                        await new Promise((resolve) => {
                            images.forEach(async c => {
                                if (c.includes(folder + '/') && c.includes('.json')) {
                                    jsonFile = (await Axios.get(c)).data;
                                    resolve();
                                }
                            });
                        });
                        self.residentialWork.push({...jsonFile})
                    }

                    // prepare the object for images
                    images.forEach(c => {
                        if (c.includes(folder + '/') && c.split(folder + '/')[1] && !c.includes('.json'))
                            allItems.push({
                                title: jsonFile.title,
                                category: folder.camelize(),
                                imageLink: c,
                            })
                    })
                }

                this.items = allItems;
                this.images = images
            }).then(() => {
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
                const self = this;
                $('li a').click(function() {
                    var $container = $('.portfolio-items');
                    var selector = $(this).attr('data-filter');

                    self.currentTitle = self.filters.find(filter => selector.substring(1) === filter.filter).title
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
                items: [],

                currentTitle: '',

                commercialDesign: [],
                commercialWork: [],

                residentialDesign: [],
                residentialWork: []
            }
        }
    }
</script>
