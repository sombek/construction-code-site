<template>
    <div>
        <section class="section pt-0 testimonial-section">
            <div class="testimonial-header-area bg-image ssss"
                 data-image-src="https://images.unsplash.com/photo-1466803000100-40016de08ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1419&q=80">
                <div class="container">
                    <div class="text-center section-title">
                        <span>شركائنا</span>
                        <h2>شركاء النجاح في كود التشييد</h2>
                    </div>
                </div>
            </div>
            <div class="testimonial-content-area wow fadeIn" data-wow-duration="1s">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="client-swiper-slider mt-4">
                                <div class="client-container">
                                    <div class="swiper-wrapper ">
                                        <div class="swiper-slide" v-for="partner of partnersList" :key="partner">
                                            <div class="testimonial-item bg-white">
                                                <figure class="client-thumb">
                                                    <img :src="'assets/images/partners/'+partner"
                                                         class="img-fluid" alt="Client">
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Add Pagination -->
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    .ssss {
        background-size: cover !important;
    }
</style>
<script>
    import Swiper from "swiper";

    export default {
        name: 'Partners',
        data() {
            return {
                partnersList: [
                    '1.JPG',
                    '2.JPG',
                    '3.JPG',
                    '4.JPG',
                    '5.JPG',
                    '6.JPG',
                    '7.JPG',
                    '8.JPG',
                    '9.JPG',
                    '10.JPG',
                    '11.JPG',
                    '12.JPG',
                    '13.JPG',
                ]
            }
        },
        mounted() {
            $(".bg-image").css('background', function() {
                var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
                return bg;
            });

            new Swiper('.client-container', {
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

        },
    }
</script>
