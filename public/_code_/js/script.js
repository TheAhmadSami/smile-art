$(document).ready(function (e) {

  $("#lightgallery").lightGallery();

  $('#close-hot-news').click( function (e){
    $('.hot-news-container').css('transform', 'scale(0)')
    $('.news-video').get(0).pause();
    $('.news-video').get(0).currentTime = 0;
  })

  var newsItems =   $('.news-item');
  var php_file_path = '../_code_/php/getNewsContent.php';
  var form_data = new FormData();
  
  for (let i = 0; i < newsItems.length; i++) {
    let newsTitle = newsItems.eq(i).attr('news-title');
    let newsPath = newsItems.eq(i).attr('path');
    let newsLocation = newsItems.eq(i).attr('location');
    let mapLink = newsItems.eq(i).attr('map-link');
    let fbLink = newsItems.eq(i).attr('fb-link');
    let instalink = newsItems.eq(i).attr('insta-link');

    let content = newsItems.eq(i).find('.ni-content');

    content.prepend('<a class="ni-location" href="'+ mapLink +'" target="_blank"><i class="fas fa-map-marker-alt"></i>'+ newsLocation +'</a>');
    content.prepend('<P class="ni-title">'+ newsTitle +'</P>');
    content.append('<div class="ni-share"> <a class="fb-link" href="'+ fbLink +'" target="_blank"><i class="fab fa-facebook-f"></i></a> <a class="insta-link" href="'+ instalink +'" target="_blank"><i class="fab fa-instagram"></i></a> </div>');
    

    form_data.append('news-path', newsPath);

    $.ajax({
      type: 'POST',
      url: php_file_path,
      data: form_data,
      contentType: false,
      processData: false,
      success: function (responce) {
        content.append(responce);
      }
    });

  }
  


  const menuWidth = 1100;

  $(document).on('click', '.menu ._menu_ a', function (e) {
    if (!($(this).parents('.menu-item').hasClass('logo') || $(this).parent().hasClass('sub-menu'))) {
      e.preventDefault();
      e.stopPropagation();

      $('.menu').removeClass('active');
      $('.menu-toggle').removeClass('active');

      setTimeout(() => {
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  })

  $(document).on('click', '.menu ._menu_ p span a', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(this).hasClass('_km_')) {
      if ($(this).attr('id') == 'about') {
        $('#know-more').addClass('active');
        $('#know-more').removeClass('mission vision values');
      }else if($(this).attr('id') == 'mission'){
        $('#know-more').addClass('active');
        $('#know-more').removeClass('mission vision values');
        $('#know-more').addClass('mission');
      }else if($(this).attr('id') == 'vision'){
        $('#know-more').addClass('active');
        $('#know-more').removeClass('mission vision values');
        $('#know-more').addClass('vision');
      }else{
        $('#know-more').addClass('active');
        $('#know-more').removeClass('mission vision values');
        $('#know-more').addClass('values');
      }
      if ($(window).width() < menuWidth)
        $('.menu ._menu_ .sub-menu ._sub-menu_').css('height', '0px');
    } else {
      var partner = $(this).attr('company');
      mixer().filter(('.' + partner));
      if ($(window).width() < menuWidth)
        $('.menu ._menu_ .sub-menu ._sub-menu_').css('height', '0px');

      setTimeout(() => {
        document.querySelector('#products').scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  })

  $(document).on('click', '.submenu-toggle', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(window).width() < menuWidth) {
      var element = $(this).parent().find('._sub-menu_');
      var elementLength = element.find('p span').length;
      var elementHeight = element.find('p span').height();
      var elementTotalHeight = (elementLength * elementHeight) + (elementLength * 2);
      $('._sub-menu_').height(0);
      element.height(elementTotalHeight);
    }

  })

  $(document).on('click', '.menu-toggle', function (e) {
    if (!$('.menu-toggle').hasClass('active')) {
      $(this).addClass('active');
      $('.menu').addClass('active');
    } else {
      $(this).removeClass('active');
      $('.menu').removeClass('active');
    }
  })


  $(document).on('click', '#know_more_btn', function (e) {
    e.stopPropagation();
    $('#know-more').addClass('active');
  });

  $(document).on('click', '#know-more', function (e) {
    e.stopPropagation();
    $('#know-more').removeClass('active');
  });

  $(document).on('click', '._know-more_, ._ceo-voice_', function (e) {
    e.stopPropagation();
  });

  $(document).on('click', '#ceo_voice_btn', function (e) {
    e.stopPropagation();
    $('#ceo-voice').addClass('active');
  });

  $(document).on('click', '#ceo-voice', function (e) {
    $('#ceo-voice').removeClass('active');
  });


  $('body').click(function (e) {

    if (!($(e.target).hasClass('menu') || $(e.target).parents('.menu').hasClass('menu'))) {
      $('.menu').removeClass('active');
    }
  });


  $(document).on('click', '.partner-item', function (e) {
    $('.partners-container').slick('unslick');
    var comapny_name = $('h2', this).text();
    var comapny_clicks = $('.clicks span', this).text().replace(',', '');
    comapny_clicks = parseInt(comapny_clicks, '10');
    comapny_clicks += 1;
    comapny_clicks = numeral(comapny_clicks).format('0,0');
    $('.clicks span', this).text(comapny_clicks);


    var clicksData = "";
    for (let pIndex = 0; pIndex < $('.partner-item').length; pIndex++) {
      clicksData += $('.partner-item').eq(pIndex).find('h2').text() + "@";
      clicksData += $('.partner-item').eq(pIndex).find('.clicks span').text() + "\n";
    }
    partnersContainer();

    var php_file_path = '../_code_/php/writeClicks.php';
    var form_data = new FormData();

    form_data.append('clicks-data', clicksData);

    $.ajax({
      type: 'POST',
      url: php_file_path,
      data: form_data,
      contentType: false,
      processData: false,
      success: function (responce) {
        $('#THE_RESPONCE_DIV_ID').html(responce);
      }
    });
  })


  $(document).on('click', '.partners-controls button', function (e) {
    $('.partners-controls button').removeClass('selected');
    $('.categories-controls button').removeClass('selected');
    $(this).addClass('selected');

    var partner = $(this).attr('data-filter');
    partner = partner.substring(1, partner.length);

    $('.categories-controls').removeClass('selected');
    for (let i = 0; i < $('.categories-controls').length; i++) {
      if ($('.categories-controls').eq(i).hasClass(partner))
        $('.categories-controls').eq(i).addClass('selected');
    }
  })


  $(document).on('click', '.categories-controls button', function (e) {
    $('.categories-controls button').removeClass('selected');
    $(this).addClass('selected');
  })


  $('._ac-item_').click(function (e) {
    $('#awards_preview').addClass('active');
    var image_source = $(this).children('.ac-image').attr('src');
    $('.__awardsimg__').css('background-image', 'url(' + image_source + ')');
  })


  $('.__awards_close__').click(function (e) {
    $('#awards_preview').removeClass('active');
  })


  $(document).on('click', '.ni-tile', function (e) {
    var niImage = $(this).attr('style');
    niImage = niImage.replace('background-image: ', '');

    $('.ni-tile').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.news-item').css('background-image', niImage);
   $('.news-background').css('background-image', niImage);

  })


  $(document).on('click', '.submit-message', function (e) {
    var php_file_path = '../_code_/php/contact/index.php';
    var form_data = new FormData();


    if ($('#contact_name').val() != "") {
      $($('#contact_name')[0]).removeClass('not-valid');
      if ($('#contact_phone')[0].validity.valid == true && $('#contact_phone').val() != "") {
        $($('#contact_phone')[0]).removeClass('not-valid');
        if ($('#contact_email')[0].validity.valid == true) {
          $($('#contact_email')[0]).removeClass('not-valid');
          if ($('#contact_message').val() != "") {
            $($('#contact_message')[0]).removeClass('not-valid');

            $('.submit-message i').attr('class', 'far fa-spinner');
            $('.submit-message i').addClass('fa-spin');
            $('.submit-message').addClass('sending');

            var client_name = $('#contact_name').val();
            var client_phone = $('#contact_phone').val();
            var client_email = $('#contact_email').val();
            var client_message = $('#contact_message').val();
            var recipient = $('#contact_receive').val();

            form_data.append('name', client_name);
            form_data.append('phone', client_phone);
            form_data.append('email', client_email);
            form_data.append('message', client_message);
            form_data.append('r-email', recipient);

            $.ajax({
              type: 'POST',
              url: php_file_path,
              data: form_data,
              contentType: false,
              processData: false,
              success: function (responce) {
                $('#THE_RESPONCE_DIV_ID').html(responce);
              }
            });

          } else {
            $($('#contact_message')[0]).addClass('not-valid');
          }
        } else {
          $($('#contact_email')[0]).addClass('not-valid');
        }

      } else {
        $($('#contact_phone')[0]).addClass('not-valid');
      }
    } else {
      $($('#contact_name')[0]).addClass('not-valid');
    }
  })

  $('.input-container input, input-container textarea').keyup(function (e) {
    if ($(this).val() != "")
      $(this).removeClass('not-valid');
    else
      $(this).addClass('not-valid');
  })


  /* ****************************************************************************************************** */
  function mixer() {
    var containerEl = document.querySelector('.products-container');
    var mixer = mixitup(containerEl, {
      selectors: {
        target: '.product-item'
      }
    });
    return mixer;
  }
  mixer();

  $('._tooltip_').tooltip();


  function partnersContainer() {
    $('.partners-container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000
    });
  }
  partnersContainer();

  $('.partners-controls').slick({
    slidesToShow: 6,
    slidesToScroll: 4,
    swipeToSlide: true,
    arrows: true,
    infinite: false,
    responsive: [{
        breakpoint: menuWidth,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });


  $('.top-clients').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    variableWidth: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.normal-clients').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000
  });

  $('._ac_').slick({
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1
        }
      }
    ]
  });


  $('#newsTicker1').breakingNews();

  new Swiper('.ni-images', {
    slidesPerView: 4,
    spaceBetween: 0
  });

  new Swiper('.news-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerColumn: 1,
    touchRatio: 0,
    navigation: {
      nextEl: '.slick-next',
      prevEl: '.slick-prev',
    },
  });



  $(window).scroll(function (e) {

    if ($(this).scrollTop() > 135) {
      $('.menu').addClass('scroll');
    } else {
      $('.menu').removeClass('scroll')
    }

    for (let i = 0; i < $('section').length; i++) {
      if (($('section').eq(i).offset().top - 100) < $(window).scrollTop()) {
        let sectionID = $('section').eq(i).attr('id');
        $('.menu a[href^="#"]').removeClass('active');
        $('.menu a[href="#' + sectionID + '"]').addClass('active');
      }
    }
  })

  $(window).resize(function (e) {

    if ($(window).width() > menuWidth) {
      $('.menu ._menu_ .menu-item.sub-menu ._sub-menu_').css('height', '250px');
    }else{
      $('.menu ._menu_ .menu-item.sub-menu ._sub-menu_').css('height', '0px');
    }

  })

})