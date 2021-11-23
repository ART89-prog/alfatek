document.addEventListener("DOMContentLoaded",function(){
	'use strict';
	document.querySelectorAll('img.svg').forEach((el) => {
		const imgID = el.getAttribute('id');
		const imgClass = el.getAttribute('class');
		const imgURL = el.getAttribute('src');

		fetch(imgURL)
		.then(data => data.text())
		.then(response => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(response, 'text/html');
			let svg = xmlDoc.querySelector('svg');

			if (typeof imgID !== 'undefined') {
				svg.setAttribute('id', imgID);
			}

			if(typeof imgClass !== 'undefined') {
				svg.setAttribute('class', imgClass + ' replaced-svg');
			}

			svg.removeAttribute('xmlns:a');

			el.parentNode.replaceChild(svg, el);
		})
	});
	const $status = $('.s-home-slider-count');
	const $slickElement = $('.s-home-slider');
	 $slickElement.owlCarousel({
    loop:false,
  singleItem: true,
    animateOut: 'fadeOut',
    smartSpeed:800,
items: 1,
onInitialized: counter,
  onChanged: counter,
  
  mouseDrag: false,
touchDrag: false,


    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});
	 function counter(event) {
  if (!event.namespace) {
    return;
  }
  let slides = event.relatedTarget;
  let i = slides.relative(slides.current()) + 1;

let num, total;
    if(i<10){
    	num = "0"+i;
    } else{
    	num=i;
    }
    if(slides.items().length<10){
    	total = "0"+slides.items().length;
    } else{
    	total=i;
    }
    $status.find('.s-home-slider-current').text(num);
     $status.find('.s-home-slider-total').find('span').text(total);
}
$slickElement.on('changed.owl.carousel', function(e) {

    $('.s-home-slider-arrow.js-next').removeClass('disabled');
    $('.s-home-slider-arrow.js-prev').removeClass('disabled');

    if ( ( e.page.index + 1 ) >= e.page.count ){
        $('.s-home-slider-arrow.js-next').addClass('disabled');
    } else {
        $('.s-home-slider-arrow.js-next').removeClass('disabled');
    }
    
    if ( e.page.index == 0 ){
        $('.s-home-slider-arrow.js-prev').addClass('disabled');
    } else {
        $('.s-home-slider-arrow.js-prev').removeClass('disabled');
    }

});
	 $('.s-home-slider-arrow.js-next').click(function() {
    $slickElement.trigger('next.owl.carousel');
});
// Go to the previous item
$('.s-home-slider-arrow.js-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $slickElement.trigger('prev.owl.carousel', [300]);
});

	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    let num, total;
    if(i<10){
    	num = "0"+i;
    } else{
    	num=i;
    }
    if(slick.slideCount<10){
    	total = "0"+slick.slideCount;
    } else{
    	total=i;
    }
    $status.find('.s-home-slider-current').text(num);
     $status.find('.s-home-slider-total').find('span').text(total);
});
	$('input[name="phone"]').inputmask('+7 (999) 999-99-99'); 
	$('.s-form-docs .input-file').change(function(event) {
let current = $(this).closest('.s-form-docs');

  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.fileName = this.files[0].name;
    reader.onload = function (e) {
current.find('.s-form-docs-files').append(`<div class="s-form-docs-doc" title="`+e.target.fileName+`">
                                          <img src="img/icon-file.svg" alt="img">
                                          <div class="s-form-docs-img-close"><img src="img/pdf-remove.svg" alt="img" class="svg" ></div>
                                        </div>`);
     current.addClass('active');
    }
    reader.readAsDataURL(this.files[0]);

       
  }
});
$('.s-form-docs').on('click', '.s-form-docs-img-close', function() {
$(this).closest('.s-form-docs-doc').remove();
return false;

});


// Аккордион
$('body').on('click', '.accordion .accordion_item .head', function (e) {
	e.preventDefault()

	const $item = $(this).closest('.accordion_item'),
		$accordion = $(this).closest('.accordion')

	if ($item.hasClass('active')) {
		$item.removeClass('active').find('.data').slideUp(300)
	} else {
		$accordion.find('.accordion_item').removeClass('active')
		$accordion.find('.data').slideUp(300)

		$item.addClass('active').find('.data').slideDown(300)
	}
})





 $('.s-home-down a').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
    }
      return false; // выключаем стандартное действие
    });
 $('.s-header-toggle').click(function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('.s-menu').removeClass("active");
			$('.s-bg').removeClass("active");
		}else{
			$(this).addClass("active");
			$('.s-menu').addClass("active");
			$('.s-bg').addClass("active");
		}
		return false;
	});
	$('.s-menu-close').click(function() {
		$('.s-header-toggle').removeClass("active");
			$('.s-menu').removeClass("active");
			$('.s-bg').removeClass("active");
		
		return false;
	});
		$('.s-bg').click(function() {
		$('.s-header-toggle').removeClass("active");
			$('.s-menu').removeClass("active");
			$('.s-bg').removeClass("active");
		
		return false;
	});
		if ($(window).width() < 1201) {
		$('.s-offers-line').addClass('owl-carousel');
		$('.s-offers-line').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			items: 3,
			dots:false,
			autoWidth:true,
			responsive:{
				0:{
					
				},
				600:{
					
				},
				992:{
					
				}
			}
		});
	} else {
		$('.s-offers-line').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
	}

	$(window).resize(function () {
		if ($(window).width() < 1201) {
		$('.s-offers-line').addClass('owl-carousel');
		$('.s-offers-line').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			items: 3,
			dots:false,
			autoWidth:true,
			responsive:{
				0:{
					
				},
				600:{
					
				},
				992:{
					
				}
			}
		});
	} else {
		$('.s-offers-line').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
	}
	});
		 $('.s-offers-arrow.js-next').click(function() {
    $('.s-offers-line').trigger('next.owl.carousel');
});
// Go to the previous item
$('.s-offers-arrow.js-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
   $('.s-offers-line').trigger('prev.owl.carousel', [300]);
});

// 	$(".s-header-btn").mPageScroll2id({ });
// 	$('input[name="phone"]').mask('+7 (999) 999-99-99'); 
// 	$(".open-popup").magnificPopup(
// 	{
// 		type:'inline',
// 		midClick: true,
//  removalDelay: 500, //delay removal by X to allow out-animation
//  callbacks: {
//  	beforeOpen: function() {
//  		this.st.mainClass = this.st.el.attr('data-effect');
//  	}
//  },
// });
});
 // $(document).on('click', '.mfp-close', function (e) {
 //            e.preventDefault();
 //            $.magnificPopup.close();
 //        });