//IMPORT HEADER
import template_header from "./components/header";
//IMPORT FOOTER
import template_footer from "./components/footer";

export default {
    name: 'app',
    created() {
        document.title = "شركة كود التشييد | للمقاولات العامة";
    },
    components: {
        template_header,
        template_footer
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            //this.hidePreloader();
            this.windowScroll();
            this.initElementClick();
            this.initDropdownHover();
        },
        /*----ONSCROLL JS-----*/
        windowScroll() {
            var self = this;
            $(window).on("scroll", function () {
                self.initSectionScroll();
            });
        },
        /*----DROPDOWN HOVER JS-----*/
        initDropdownHover() {
            $(".dropdown").on('mouseover', function () {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).addClass('open');
            });
            $(".dropdown").on('mouseleave', function () {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).removeClass('open');
            });
        },
        /*----Element Clicks -----*/
        initElementClick() {
            /*----Menu CLose Click -----*/
            $(".menu-close-btn").on("click", function () {
                $('.navbar-collapse').removeClass('show');
            }),
                /*----Mobile Menu Click -----*/
                $(document).on("click", ".navbar-collapse.show", function (o) {
                    $(o.target).is("a") && $(this).collapse("hide")
                }),
                /*----Back To Top Clicks -----*/
                $(".back_top").on("click", function () {
                    return $("html, body").animate({
                        scrollTop: 0
                    }, 1e3), !1
                });
        },
        /*----Section Scroll -----*/
        initSectionScroll() {
            var win_scroll_top = $(window).scrollTop();
            win_scroll_top >= 80 ? $("nav").addClass("sticky-header") : $(".sticky").removeClass("sticky-header");
            win_scroll_top > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
        },

    }
}