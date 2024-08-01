(function ($) {
  "use strict";

  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        $("#header .header-inner").addClass("sticky");
      } else {
        $("#header .header-inner").removeClass("sticky");
      }
    });

    /*====================================
          Sticky Header JS
      ======================================*/
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    });
    $(".video-popup").magnificPopup({
      type: "video",
    });
    $(document).ready(function () {
      $(".image-link").magnificPopup({ type: "image" });
    });
  });
})(jQuery);

/*====================================
          Sticky counter JS
      ======================================*/
$(document).ready(function () {
  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum)).append("<span>+</span>");
        },
        complete: function () {
          $this.text(this.countNum).append("<span>+</span>");
        },
      }
    );
  });
});
AOS.init();
/*====================================
          quote
      ======================================*/
$(document).ready(function () {
  $("#quote-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 450,
  });

  new WOW().init();
});

const logo = document.querySelector(".marquee").cloneNode(true);

document.querySelector(".marquee-container").appendChild(logo);
