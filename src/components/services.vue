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
                                        <h1 class="title text-center text-white">خدماتنا</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="index.html">الرئيسية</a>
                                            </li>
                                            <li class="theme-light-color active">خدماتنا</li>
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
        <!-- Funfacts Area Start -->
        <section class="section fun-facts bg-light">
            <div class="container">
                <div style="text-align: center">
                    <div class="section-title">
                        <span>خبرة أكثر من ١٠ سنوات</span>
                        <h2>خبراتنا و خدماتنا</h2>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-4 col-8">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-cube-outline"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number1" class="funfact-number">69</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">مشروع</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-8">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-account-group-outline"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number3" class="funfact-number">212</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">عميل</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-8">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-trending-up"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number4" class="funfact-number">21</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">خبراء الفريق</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Funfacts Area End -->

        <!-- Start Services Area -->
        <OurServices/>
        <!-- End Services Area -->

    </div>
</template>
<script>
    import OurServices from "../components/OurServices";

    export default {
        name: 'services',
        components: {OurServices},
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.initFooterHeight();
                this.initPogressBar();
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
            },
            initPogressBar() {
                $('.bar-percentage[data-percentage]').each(function () {
                    var progress = $(this);
                    var percentage = Math.ceil($(this).attr('data-percentage'));
                    $({ countNum: 0 }).animate({ countNum: percentage }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {
                            // What todo on every count
                            var pct = Math.floor(this.countNum) + '%';
                            progress.text(pct) && progress.siblings().children().css('width', pct);
                        }
                    });
                });
            }
        }
    }
</script>