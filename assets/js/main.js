/**
* Template Name: iPortfolio - v1.5.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });





  // $('#btnsubmit').click(function(){
  //   console.log('nona');
  //   let id = $(this).attr('data-id');

  //               Swal.fire({
  //         title: "Are you sure?",
  //         text: "Send this email!",
  //         type: "confirm",
  //         showCancelButton: true,
  //         confirmButtonColor: "#DD6B55",
  //         confirmButtonText: "Yes",
  //         cancelButtonText: "No, cancel!",
  //         closeOnConfirm: true,
  //         closeOnCancel: false 
  //     },
  //     function(isConfirm) {
  //         if (isConfirm) {
  //             swal("Deleted!", "Your imaginary file has been deleted.", "success");
  //             Swal.fire({
  //               title: 'Success!',
  //               text: 'Do you want to continue',
  //               icon: 'success',
  //               confirmButtonText: 'Cool'
  //             });
  //         } else {
  //             swal("Cancelled", "Your imaginary file is safe :)", "error");
  //         }
  //     }
  // );
  //   });
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function validateForm() {
      var email = document.forms["emailPost"]["fromEmail"].value;
      if (email == "") {
        alert("Email must be filled out");
        return false;
      }
      if (document.forms["emailPost"]["name"].value == "") {
        alert("Name must be filled out");
        return false;
      }
      if (document.forms["emailPost"]["subject"].value == "") {
        alert("subject must be filled out");
        return false;
      }
      if (document.forms["emailPost"]["message"].value == "") {
        alert("message must be filled out");
        return false;
      }
      if(!validateEmail(email)){
        alert("email structure is not correct.");
        return false;
      };
      return true
    }

    $("#btnsubmit").click(function(e) {
      e.preventDefault();
      if(validateForm()){
        var fromEmail = $('#fromEmail').val();
        var name = $('#name').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
  
        var data = {
          fromEmail: fromEmail,
          name: name,
          subject: subject,
          message: message,
        }
        Swal.fire({
            title: "Send the email?",
            text: "",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes!"
        }).then(function(result) {
            if (result.value) {
                // var data = new FormData($("#emailPost")[0]);
                // var data = $('emailPost').serialize();
                var myform = document.getElementById("emailPost");
                var fd = new FormData(myform );
                $.ajax({ //line 28
                    type: 'POST',
                    url: 'https://afaf-tech-staycation.herokuapp.com/api/v1/email-sender',
                    // dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(data),
                    // data: data,
                    processData: false,
                    success: function(data, textStatus, xhr) {
                        document.getElementById("emailPost").reset();
                        console.log(xhr.status);
                        if (xhr.status == 201) {
                            Swal.fire(
                                "Success!",
                                `${data.message}`,
                                "success"
                            ).then(function(){
                                window.location.reload();
  
                            });
                        } 
                    },
                    fail: function(xhr, textStatus, errorThrown){
                      Swal.fire(
                        "Gagal!",
                        `${textStatus}`,
                        "error"
                    )
                   }
                });
  
            }
        });

      }

    });

})(jQuery);