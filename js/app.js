$(document).ready(function () {
  $(".nav-tabs a").click(function () {
    $(this).tab("show");
  });

  new WOW().init();

  $(".owl-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav:false,
        autoplay:true
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
