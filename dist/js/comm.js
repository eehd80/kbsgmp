$(function () {
    // load
    // ("use strict");
    // $("#u_skip").load("./layout/u_skip.html");
    // $("#header").load("./layout/header.html");
    // $("#footer").load("./layout/footer.html");

    // navi_total

    // gnb ham
    let $window = $(window),
        $header = $("#header"),
        $gnb = $header.find("#gnb"),
        $navDepth1 = $header.find(".gnb-wrap"),
        $navTotal = $(".navi_total"),
        $navButton = $navTotal.find(".btn_menu");

    $navTotal.removeClass("expanded");
    $navButton.on("click", function () {
        if ($navTotal.hasClass("expanded") === true) {
            $navTotal.removeClass("expanded");
        } else {
            $navTotal.addClass("expanded");
        }
    });

    // header sticky
    $window
        .scroll(function () {
            if ($(this).scrollTop() > 50) {
                $header.addClass("sticky");
            } else {
                $header.removeClass("sticky");
            }
        })
        .trigger("scroll");

    // mobile nav
    let $depth1 = $(".depth_1 > li"),
        $depth1Link = $depth1.find("> a");

    $depth1.click(function (event) {
        event.preventDefault();
        $depth1.removeClass("active");
        if ($depth1.hasClass("active") === true) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    // scrollUp
    $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "300", // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "페이지 위로 이동", // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // slick
    // 오늘의 표현
    $(".slick-expression").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        vertical: true,
        arrows: false,
    });

    // tab
    $(".tab-wrap").each(function () {
        let $this = $(this);

        $this.find(".menu_list .btn").click(function () {
            var $this = $(this);
            var index = $this.index();

            $this.addClass("active");
            $this.siblings("button.active").removeClass("active");

            var $outer = $this.closest(".tab-wrap");
            var $current = $outer.find(" > .tabs > .tab.active");
            var $post = $outer.find(" > .tabs > .tab").eq(index);

            $current.removeClass("active");
            $post.addClass("active");
            // 위의 코드는 탭메뉴 코드입니다.

            // $(".slider").slick("setPosition");
            // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
        });
    });
});
