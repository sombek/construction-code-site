<template>
    <!-- Start Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top custom-nav sticky">
        <div class="container">
            <!-- LOGO -->
            <router-link class="navbar-brand brand-logo mr-4" to="/">
                    <img src="assets/images/logo.png" class="img-fluid logo-light" alt="">
                    <img src="assets/images/dark-logo.png" class="img-fluid logo-dark" alt="">
            </router-link>
            <div class="navbar-collapse collapse justify-content-end" id="navbarCollapse">
                <ul class="navbar-nav navbar-center" id="mySidenav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">الرئيسية</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">من نحن</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/services">خدماتنا</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/ourWorks">معرض الأعمال</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">تواصل معنا</router-link>
                    </li>
                </ul>
                <div class="menu-close-btn"><i class="mdi mdi-close-circle-outline"></i></div>
            </div>
            <div class="header_btn">
                <button class="navbar-toggler ml-2 p-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<script>
   
    export default {
        name: "template_header",
        methods: {

        }
    }</script>