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
                                        <h1 class="title text-center text-white">Blog Grid</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="#" @click="$router.push('/')">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Blog</li>
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
        <!-- Blog Grid Section Start -->
        <section class="section">
            <div class="container">
                <div class="blog-post-grid">
                    <div class="row">
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                      <img src="assets/images/blog/blog-01.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>                                   
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-02.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-03.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-04.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-05.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-06.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-07.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-08.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" to="/blogdetail">
                                    <img src="assets/images/blog/blog-01.jpg" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" to="/blogdetail">
                                            Appropriately productize fully
                                        </router-link>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet,  adipiscing consectetur gravida elit</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">June 10, 2020</a>
                                        <a href="#" class="blog-category text-dark">Life Style</a>
                                    </div>
                                    <router-link class="blog-read-more" to="/blogdetail">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                    </div>
                </div>
                <div class="pagination  d-flex justify-content-center mt-lg-5">
                    <ul class="pagination mb-0">
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">
                                <i class="mdi mdi-chevron-left"></i>
                            </a>
                        </li>
                        <li class="page-item text-center active">
                            <a href="#" class="page-link rounded-0">1</a>
                        </li>
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">2</a>
                        </li>
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">3</a>
                        </li>
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">
                                <i class="mdi mdi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Blog Grid Section End -->
    </div>
</template>
<script>
    export default {
        name: 'blog',
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