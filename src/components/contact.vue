<template>
    <div class="main-content">
        <!-- BradCrumb header Start-->
        <section class="inner-header-bg">
            <div class="container">
                <!-- Breadcrumb Start-->
                <div class="section-breadcrumb contact-breadcrumb">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 justify-content-center align-self-center pb-2">
                                <div class="breadcrumb-content">
                                    <div class="title-section">
                                        <h1 class="title text-center text-white">Contact Us</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Contact</li>
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
        <!-- Start Contact Area -->
        <section class="section contact-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-12">
                        <div class="contact-main form-box">
                            <div class="contact-inner z-index9">
                                <div class="section-title">
                                    <h2 class="text-white">Let's Connect</h2>
                                </div>
                                <div class="contact-address mt-5">
                                    <h2 class="text-white">Visit our location</h2>
                                    <div class="address mt-2">
                                        <p class="text-white">
                                            300 King St, Melbourne<br>
                                            VIC 5000, Australia
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-email mt-5">
                                    <h2 class="text-white">Mail us</h2>
                                    <div class="address text-white mt-2">
                                        <p>hello@yourdomain.com</p>
                                        <p>+xx x xxxx xxxx</p>
                                    </div>
                                </div>
                                <div class="social-media-transparent  mt-5">
                                    <ul class="social-links list-unstyled d-flex justify-content-start">
                                        <li class="facebook">
                                            <a href="" title="Facebook" target="_blank">
                                                <i class="mdi mdi-facebook font-20"></i>
                                            </a>
                                        </li>
                                        <li class="twitter">
                                            <a href="" title="Twitter" target="_blank">
                                                <i class="mdi  mdi-twitter font-20"></i>
                                            </a>
                                        </li>
                                        <li class="instagram">
                                            <a href="" title="Instagram" target="_blank">
                                                <i class="mdi  mdi-google-plus font-20"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="mt-5">
                            <div class="row">
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" placeholder="Enter name" required="required">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" placeholder="Enter email" required="required">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" name="phone" value="" class="form-control" placeholder="Your Phone">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" name="company" value="" size="40" class="form-control" placeholder="Your Company">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" rows="7" cols="25" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="submit" class="btn theme-btn w-100 rounded">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Contact Area -->
    </div>
</template>
<script>
        export default {
        name: 'contact',
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