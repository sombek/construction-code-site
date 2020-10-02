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
                                        <h1 class="title text-center text-white">404</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="#" @click="$router.push('/')">Home</a>
                                            </li>
                                            <li class="theme-light-color active">404</li>
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
        <!-- 404 Area Start-->
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <img src="assets/images/404.png" alt="" class="img-fluid w-100">
                        <div class="mt-4 text-center">
                            <h2 class="title">Sorry Page Not found</h2>
                            <button class="btn theme-btn mt-4">
                                Back to Homepage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 404 Area End-->
    </div>
</template>
<script>

    export default {
        name: 'error',
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.initFooterHeight();
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
            },
        }
    }
</script>