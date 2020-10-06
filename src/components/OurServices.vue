<template>
    <section class="section parallax-bg" id="services">
        <div class="container">
            <div class="section-title text-center z-index9">
                <span>خدماتنا</span>
                <h2 class="text-white">الخدمات الهندسية</h2>
            </div>
            <div class="service-boxes-area">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="0.2s"
                             data-wow-duration="1s">
                            <div class="icon">
                                <i class="mdi mdi-format-paint"></i>
                            </div>
                            <h3>التشطيبات</h3>
                            <p>
                                نتقن كل مايخص التشطبيات من دهان وجبس ورخام وبلاط
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="0.4s"
                             data-wow-duration="1s">
                            <div class="icon">
                                <i class="mdi mdi-ruler"></i>
                            </div>
                            <h3>الشبكات</h3>
                            <p>نصمم ونخطط وننفذ أعمال الشبكات لكافّة أنواع المباني
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="0.6s"
                             data-wow-duration="1s">
                            <div class="icon">
                                <i class="mdi mdi-factory"></i>
                            </div>
                            <h3>الحديد والألمنيوم
                            </h3>
                            <p>
                                نصمم ونصنع أبواب الألمنيوم والأبواب الحديدية
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="0.8s"
                             data-wow-duration="1s">
                            <div class="icon">
                                <i class="mdi mdi-city"></i>
                            </div>
                            <h3>الترميم</h3>
                            <p>
                                نرمم الفلل والقصور القديمة حسب متطلبات العميل
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="1s"
                             data-wow-duration="1s">
                            <div class="icon">
                                <i class="mdi mdi-login"></i>
                            </div>
                            <h3>نجارة الموبيليا</h3>
                            <p>
                                نقدم كل الخدمات المتعلقة بأعمال النجارة كغرف النوم والدواليب وغيرها
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="1.2s"
                             data-wow-duration="1s">
                            <div class="icon">
                                <i class="mdi mdi-domain"></i>
                            </div>
                            <h3>العظم</h3>
                            <p>
                                خطوة بخطوة ننجز كل أعمال النجارة والحديد والمباني
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>

    @media (max-width: 576px) {
        .row div.col-sm-6 {
            padding-left: 40px ;
            padding-right: 40px

        }
    }

    .parallax-bg {
        background: url(https://assets.dmagstatic.com/wp-content/uploads/2018/12/dallas-construction.jpg) no-repeat center fixed;
        background-size: cover;
    }
</style>
<script>
    export default {
        name: 'OurServices',
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.initCounter();
            },
            /*----COUNTER-----*/
            initCounter() {
                $.fn.jQuerySimpleCounter = function(options) {
                    var settings = $.extend({
                        start: 0,
                        end: 100,
                        easing: 'swing',
                        duration: 400,
                        complete: ''
                    }, options);

                    var thisElement = $(this);

                    $({count: settings.start}).animate({count: settings.end}, {
                        duration: settings.duration,
                        easing: settings.easing,
                        step: function() {
                            var mathCount = Math.ceil(this.count);
                            thisElement.text(mathCount);
                        },
                        complete: settings.complete
                    });
                };


                $('#number1').jQuerySimpleCounter({end: 69, duration: 3000});
                $('#number3').jQuerySimpleCounter({end: 212, duration: 2000});
                $('#number4').jQuerySimpleCounter({end: 32, duration: 1500});
            }
        }
    }

</script>
