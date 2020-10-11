<template>
    <div>
        <!-- Start Footer Area -->
        <footer class="text-white">
            <div class="container">
                <a class="footer-logo" href="#top" title="">
                    <img src="assets/images/logo.png" alt="" class="img-fluid"/>
                </a>
                <ul class="social-links list-unstyled d-flex justify-content-center">
                    <li class="facebook">
                        <a href="" title="Facebook"
                           onclick="window.open('http://www.snapchat.com/add/code-2016')"
                           target="_blank">
                            <i class="mdi mdi-snapchat font-20 text-white"></i>
                        </a>
                    </li>
                    <li class="instagram">
                        <a href="" title="Instagram"
                           onclick="window.open('https://www.instagram.com/construction_code_2016')"
                           target="_blank">
                            <i class="mdi  mdi-instagram font-20 text-white"></i>
                        </a>
                    </li>
                    <li class="youtube">
                        <a href="" title="youtube"
                           onclick="window.open('https://www.youtube.com/channel/UCylgi49hOdDDMMykXie54Mw')"
                           target="_blank">
                            <i class="mdi  mdi-youtube font-20 text-white"></i>
                        </a>
                    </li>
                </ul>
                <nav>
                    <div class="menu-footer-menu-container mt-4">
                        <ul class="menu list-unstyled">
                            <li class="menu-item">
                                <a href="#" @click="$router.push('/')">
                                    <span class="line">تواصل</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="#" @click="$router.push('/')">
                                    <span class="line">خريطة الموقع</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav>
                    <div class="menu-footer-menu-container mt-4">
                        <a href="https://raqam.io"
                           target="_blank"
                           style="text-decoration: none;color: white">
                            &copy; 2020 <br>تنفيذ <span class="line">منصة رقم</span>
                        </a>
                    </div>
                </nav>

            </div>
        </footer>
        <!-- End Footer Area -->
        <!-- Back To Top -->
        <a href="#" class="back_top" style="bottom:80px" onclick="window.open('https://wa.me/966500473701')"> <i
                class="mdi mdi-whatsapp"></i></a>
        <a href="#" class="back_top"> <i class="mdi mdi-chevron-up"></i></a>
    </div>
</template>
<style scoped>
    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    a:active {
        text-decoration: underline;
    }
</style>
<script>
    export default {
        name: "template_footer",
        methods: {}
    }</script>
