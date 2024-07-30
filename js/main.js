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
        duration: 4000,
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
