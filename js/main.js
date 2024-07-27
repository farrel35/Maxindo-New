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
