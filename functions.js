  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.bird-pic').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });

    $('.header h1').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });


    if(wScroll > $('.pics-first').offset().top - ($(window).height() / 1.3)) {

      $('.pics-first').each(function(){

        $('.pics-first').addClass('is-showing');

      });

    }

    if(wScroll > $('.pics-second').offset().top - ($(window).height() / 1.3)) {

      $('.pics-second').each(function(){

        $('.pics-second').addClass('is-showing');

      });

    }

    if(wScroll > $('.pics-third').offset().top - ($(window).height() / 1.3)) {

      $('.pics-third').each(function(){

        $('.pics-third').addClass('is-showing');

      });

    }

  });
