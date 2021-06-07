$( document ).ready(function() {


  new WOW().init();



  $('.hamburger').on('click', function(e) {
    e.preventDefault()
    $('body').toggleClass('menu-open-body')
    $('.main-nav-menu').toggleClass('show-menu')
    $('.main-header__logo').toggleClass('hide-menu-elem')
    $('.main-header__phone-menu-link').toggleClass('hide-menu-elem')

    const hamburgerText = document.querySelector('.hamburger-title')
    if(hamburgerText.textContent.trim() == 'Меню') {
      $('.hamburger-title').text('Закрыть')
      $('.line').toggleClass('close-line')
    } else if (hamburgerText.textContent.trim() == 'Закрыть') {
      $('.hamburger-title').text('Меню')
      $('.line').toggleClass('close-line')
    } else {
      console.log('error')
    }
  })







  $(document).on('click', '.down-js', function (event) {
    event.preventDefault();
    console.log('animate')
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
  });


  $('.video-play').on('click', function(e) {
    e.preventDefault()
    let video = $( ".video-modal" ).find('video')
    video.get(0).play();
    $(video).toggleClass('pause')
    $(this).addClass('hide-video-btn')

    $('.pause').on('click', function() {
      console.log('Пауза')
      video.get(0).pause()
      $('.video-play').removeClass('hide-video-btn')
    })

  
  })


  $('#exampleModalCenterVideo').on('hide.bs.modal', function (e) {
    console.log('закрыл окно с видео')
    let video = $( ".video-modal" ).find('video')
    video.get(0).pause()
  })

  $('.about-company-page__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  if (window.matchMedia("(min-width: 1900px)").matches) {
    $(document).scroll(function() {
      $('.main-header__separator').fadeOut(600)
      $('.main-header__request-link').fadeOut(600)

      if($('.main-nav').offset().top == 0) {
        $('.main-header__separator').fadeIn(600)
        $('.main-header__request-link').fadeIn(600)
      }
    })
  }



  if (window.matchMedia("(max-width: 1899px)").matches) {
    $(document).scroll(function() {
      $('.main-header__logo-col').fadeOut(600)
      $('.main-header__phone-menu-link').fadeOut(600)

      if($('.main-nav').offset().top == 0) {
        $('.main-header__logo-col').fadeIn(600)
        $('.main-header__phone-menu-link').fadeIn(600)
      }
    })
  }



$('.showform-btn').on('click', function(e) {
  e.preventDefault()
  console.log("click show")
  $('.calc-form').addClass('calc-form-show')
})



let sticky = document.querySelector('.sticky-block')
  
if (sticky) {

if (window.matchMedia("(min-width: 767px)").matches) {
  $.each($('.sticky-block'), function() {
    var top_spacing = Number($(this).data('top_spacing')) > 0 ? Number($(this).data('top_spacing')) : 20;

    if ($('.navbar-custom-wrap.fixed-top').length) {
      top_spacing = top_spacing + $('.navbar-custom-wrap.fixed-top').height();
    }

    $(this).stickySidebar({
      topSpacing: 150,
      bottomSpacing: 150,
      containerSelector: '.sticky-block-container',
      innerWrapperSelector: '.sticky-block-inner',
      // resizeSensor: true,
    });
  });
}

}



  const  tl = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();
  const trigger = document.querySelector('#triggerStage')
  

  tl.to('.slide-card-container', 10, {x:-2000} );


	function updatePercentage() {
		tl.progress();
	}


if(trigger)	 {

if (window.matchMedia("(min-width: 767px)").matches) {
	const scene = new ScrollMagic.Scene({
		triggerElement: "#triggerStage",
		triggerHook: 'onEnter',
				  duration: 1500,
				  offset: 600
    })
		  .setTween(tl)
		  .addTo(controller);
  }


  if (window.matchMedia("(max-width: 767px)").matches) {
    const scene = new ScrollMagic.Scene({
      triggerElement: "#triggerStage",
      triggerHook: 'onEnter',
            duration: 2000,
            offset: 300
      })
        .setTween(tl)
        .addTo(controller);
    }

  }
  


  const form = document.querySelector('.main-form__form');
  // const error = document.querySelector('.requirements');
  // const input = document.querySelector('.name-input');


  const error = $('.requirements')
  const input = $('.name-input')
  
  input.oninvalid = invalid;
  // form.onsubmit = submit;
  
  // function invalid(event) {
  //   error.style.maxHeight = '200px';
  //   input.style.borderBottom = '1px solid #FF8B8B'
  //   input.style.color = '#FF8B8B'
  //   // Текст в зависимости от ошибки
  //   error.textContent = "Неправильное имя пользователя"
  // }


  function invalid(event) {
    error.css('max-height', '200px')
    input.css('border-bottom', '1px solid #FF8B8B')
    input.css('color', '#FF8B8B')

  }


  input.on('invalid', function(event) {
    event.preventDefault()
    invalid()
  })

  // input.addEventListener('invalid', function(event){
  //   event.preventDefault();
  // });
  


  // Первый калькулятор


// let g1 = 0
// let g2 = null
// let f38 = 0
// let d = 0
// let f44 = 0
// let f45 = 0
// let f47 = 0
// let f48 = 0




//   $("#g1").keyup(function () {
//     g1 = Number($(this).val())
//     console.log(g1)
//     return g1
//   })


//   $("#g2").keyup(function () {
//     g2 = Number($(this).val())
//     console.log(g2)
//     return g2
//   })



//   $('#d').keyup(function () {
//     d = Number($(this).val())
//     console.log(d)

//     return d
//   })



//   let timerId2 = setInterval(() => console.log("g2 = " + g2), 2000);
//   let timerId3 = setInterval(() => console.log("d = " + d), 2000);



//   function total () {
//     let totalGRS = document.querySelector('#totalGRSValue')
//     let crainSize = document.querySelector('#crainSize')


//     f44 = g1 + d - 60
//     f45 = g2 + d - 60

//     // f45 = f38 + f39 - 60

//     console.log(`На время провкерки ф45 =` + f45)


//     if (f44 > 400) {
//       f47 = 1
//     } else {
//       f47 = 2
//     }

    
//     if (f45 < 400) {
//       f48 = 2
//     } else {
//       f48 = 1
//     }

//     let totalCraneType = 0
//     let totalCraneSize = 0

//     if (f47 == 2) {
//       totalCraneType = 2
//     } else {
//       totalCraneType = 1
//     }

//     if (totalCraneType == 2) {
//       totalCraneSize = '135х19'
//     } else {
//       totalCraneSize = '"180х19'
//     }


//     totalGRS.innerHTML = `${totalCraneType}`
//     crainSize.innerHTML = `${totalCraneSize}`
    
//   }


//   let timerId = setInterval(() => total(), 2000);

  


});

