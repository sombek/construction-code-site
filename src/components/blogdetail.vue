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
                                        <h1 class="title text-center text-white">Blog Details</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="#" @click="$router.push('/')">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Blog Details</li>
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
        <!-- Blog Details Start-->
        <section class="section section-blog">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-lg-2 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="1.5s">
                        <aside class="sidebar sidebar-padding border">

                            <h6 class="post-news-title search-title">Search</h6>
                            <div class="input-group">
                                <input class="form-control search-input" placeholder="Search..." name="" id="" type="text">
                                <button type="submit" class="btn btn-search p-0">
                                    <span class="mdi mdi-magnify"></span>
                                </button>
                            </div>
                            <div class="pb-2 mt-5 mb-3">
                                <ul class="blog-news list-unstyled">
                                    <li class="blog-item">
                                        <h6 class="post-news-title">Categories</h6>
                                    </li>
                                </ul>

                                <div class="blog-news-content">
                                    <div class="blog-post-list">
                                        <ul class="list-unstyled">
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">
                                                        Journey
                                                        <span class="float-right">102</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">
                                                        Development
                                                        <span class="float-right">83</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">
                                                        Sport
                                                        <span class="float-right">54</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">
                                                        Photography
                                                        <span class="float-right">75</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">
                                                        Symphony
                                                        <span class="float-right">15</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-2 mb-3">
                                <ul class="blog-news list-unstyled">
                                    <li class="blog-item">
                                        <h6 class="post-news-title">Archives</h6>
                                    </li>
                                </ul>

                                <div class="blog-news-content">
                                    <div class="blog-post-list">
                                        <ul class="list-unstyled">
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">February 2020</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">January 2020</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">June 2020</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">May 2020</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">January 2020</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tags-post">
                                <ul class="blog-news list-unstyled">
                                    <li class="blog-item">
                                        <h6 class="post-news-title">Tags</h6>
                                    </li>
                                </ul>

                                <div class="blog-news-content">
                                    <div class="blog-post-list">
                                        <ul class="list-unstyled list-inline mb-0">
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Journey </a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Development </a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Sport</a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Business</a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Events</a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Portfolio</a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Corporate</a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Ecommerce</a>
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="blog-news-info">
                                                    <a href="#" class="text-dark">Architecture</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-lg-8 order-lg-1 mt-lg-0 mt-4 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="1.5s">
                        <article class="blog-post-left border">
                            <div class="row">

                                <div class="col-lg-12">
                                    <div class="post-image">
                                        <a href="#">
                                            <img src="assets/images/blog/blog-01.jpg" class="img-fluid img-thumbnail border-0">
                                        </a>
                                    </div>
                                    <div class="blog-post-content text-left mt-3">
                                        <h4 class="blog-post-title">
                                            <a href="#" class="text-left text-dark">
                                                This is a stardard post with preview image
                                            </a>
                                        </h4>
                                        <div class="post-event d-flex align-items-center my-3">
                                            <a href="#" class="blog-info-meta">June 25, 2020</a>
                                            <a href="#" class="blog-category">Life Style</a>
                                        </div>
                                    </div>
                                    <div class="post-content">
                                        <p class="f-16">Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae.</p>
                                        <p class="f-16">Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae.</p>
                                        <blockquote class="blockquote my-4">
                                            <p>To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.</p>
                                            <span class="blockquote-footer font-weight-light text-dark">Amanda Pollock, Google Inc.</span>
                                        </blockquote>
                                        <p class="f-16">Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. </p>
                                    </div>
                                </div>

                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </section>
        <!-- Blog Details Section End-->
    </div>
</template>
<script>
    export default {
        name: 'blogdetail',
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