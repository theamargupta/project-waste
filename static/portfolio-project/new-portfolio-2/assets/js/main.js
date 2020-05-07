$(document).ready(function () {

  $('html, body').animate({
    scrollTop: 0
  },500);

  $('.view').magnificPopup({

    type: 'image',
    showCloseBtn: true,
    closeOnContentClick: true,
    gallery: { enabled: true },
    mainClass: 'mfp-fade',
    removalDelay: 300,

  });

  // fadein or fadeout iConTop and add sticky class

  let goTop = $(".go-top");

  $(window).scroll(function () {
    
    if ($(window).scrollTop() > 100) {

         goTop.fadeIn(400);
        $(".main-header").addClass("sticky")

    }
    else {

      goTop.fadeOut(400);
      $(".main-header").removeClass("sticky")

    }


      // on scroll toggle active class
    $(".block").each(function()
    {

        if($(window).scrollTop() > $(this).offset().top)
        {

          let idBlock = $(this).attr('id');

            $(".nav-link").removeClass("active");

            $('.navbar-nav li a[data-scroll="'+ idBlock +'"]').addClass("active")
        }
         
    })

  });


  // scroll to block

  $("a[data-scroll]").on("click", function (e) {


    let dataScroll = $(this).data("scroll");

  
    if($(this).hasClass("nav-link"))
    {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");

      if (window.matchMedia("(max-width: 767px)").matches) {
    
            $(".navbar-collapse").removeClass("show");
            $(".navbar-toggler").removeClass("styleMenu")

      }

    }

    $('html, body').animate({
      scrollTop: $("#" + dataScroll).offset().top + 1
    }, 1200);
  })


  // go to top
    goTop.on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  $(".navbar-toggler").on("click",function()
  {
    $(this).toggleClass("styleMenu");
   
  })

})
