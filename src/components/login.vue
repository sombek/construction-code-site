<template>
    <div class="main-content bg-light">
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
                                        <h1 class="title text-center text-white">Login</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="#" @click="$router.push('/')">Pages</a>
                                            </li>
                                            <li class="theme-light-color active">Login</li>
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
        <!-- Login Start-->
        <section class="login-form section bg-light">
            <div class="container bg-white">
                <div class="login-container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 form-thumbnail">
                            <div class="thumboverlay"></div>
                        </div>
                        <div class="col-lg-6">
                            <form class="form-body">

                                <div class="text-center section-title">
                                    <h2 class="text-center">Login</h2>
                                </div>

                                <div class="mt-4">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name" placeholder="Enter username" required="required">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="password" class="form-control" name="password" placeholder="Enter password" required="required">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <button type="submit" class="btn theme-btn rounded w-100">
                                                Login
                                            </button>
                                        </div>
                                        <div class="col-sm-12 mt-5">
                                            <div class="lost-password text-center">
                                                <span>Forgot <a href="#" class="theme-light-color"> user name / password?</a></span>
                                                <a href="register.html" class="d-block mt-2 theme-light-color">
                                                    SIGN UP
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Login End -->
    </div>
</template>
<script>
    export default {
        name: 'login',
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