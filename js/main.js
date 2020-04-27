(function ($) {
	"use strict";
	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});



	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();



	// owlCarousel Hoempage-3
	$('.testimonial-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplaySpeed: 800,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
			},
			767: {
				items: 2,
				dots: true,
				nav: false,
			},
			992: {
				items: 2,
				nav: false
			},
			1200: {
				items: 3,
				nav: false
			},
			1500: {
				items: 3
			}
		}
	});

	// owlCarousel Homepage-3
	$('.sponsor-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		nav: false,
		dots: false,
		autoplayHoverPause: false,
		autoplaySpeed: 800,
		responsive: {
			0: {
				items: 2,
				dots: true,
				nav: false,
			},
			767: {
				items: 3,
				dots: true,
				nav: false,
			},
			992: {
				items: 5,
				nav: false
			},
			1200: {
				items: 5,
				nav: false
			},
			1500: {
				items: 5
			}
		}
	});


	// owlCarousel Homepage-2
	$('.testimonial-2-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		nav: false,
		dots: true,
		autoplayHoverPause: false,
		autoplaySpeed: 800,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
			},
			767: {
				items: 1,
				dots: true,
				nav: false,
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			},
			1500: {
				items: 1
			}
		}
	});


	// owlCarousel Blog
	$('.blog-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		nav: true,
		dots: false,
		autoplayHoverPause: false,
		autoplaySpeed: 800,
		responsive: {
			0: {
				items: 1,
				dots: false,
				nav: false,
			},
			767: {
				items: 1,
				dots: false,
				nav: false,
			},
			992: {
				items: 1,
				nav: true
			},
			1200: {
				items: 1,
				nav: true
			},
			1500: {
				items: 1
			}
		}
	});




	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop masonry
	$('.masonry').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.masonry').isotope({
			itemSelector: '.masonry-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 8
			}
		});

		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});

	});


	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 0,
			}
		});

		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});

	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});



	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	//preloader

	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});


	// WOW active
	new WOW().init();

	// search active
	$(function () {
		$('a[href="#search"]').on('click', function (event) {
			event.preventDefault();
			$('#search').addClass('open');
			$('#search > form > input[type="search"]').focus();
		});

		$('#search, #search button.close').on('click keyup', function (event) {
			if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
				$(this).removeClass('open');
			}
		});
	});


	//mixititup
	var config = document.querySelector('#portfolio');
	var mixer = mixitup(config);
	//progress
	$('.first.circle').circleProgress({
		value: 0.80,
		startAngle: -1.05,
		lineCap: "round",
		emptyFill: "#fff",
		fill: {
			gradient: ['rgb(38,239,213)', 'rgba(54,131,246,0.36)', 'rgba(54,131,246,0.36)'],
			gradientAngle: Math.PI / 1
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(332 * progress));
	});;

	$('.second.circle').circleProgress({
		value: 0.80,
		startAngle: 0.50,
		lineCap: "round",
		emptyFill: "#fff",
		fill: {
			gradient: ['rgb(38,239,213)', 'rgb(38,239,213)', 'rgba(54,131,246,0.36)', 'rgba(54,131,246,0.36)'],
			gradientAngle: Math.PI / 1
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(42 * progress));
	});;

	$('.third.circle').circleProgress({
		value: 0.80,
		startAngle: -1.05,
		lineCap: "round",
		emptyFill: "#fff",
		fill: {
			gradient: ['rgb(38,239,213)', 'rgba(54,131,246,0.36)', 'rgba(54,131,246,0.36)'],
			gradientAngle: Math.PI / 1
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(129 * progress));
	});;

	$('.fourth.circle').circleProgress({
		value: 0.80,
		startAngle: 0.50,
		lineCap: "round",
		emptyFill: "#fff",
		fill: {
			gradient: ['rgb(38,239,213)', 'rgb(38,239,213)', 'rgba(54,131,246,0.36)', 'rgba(54,131,246,0.36)'],
			gradientAngle: Math.PI / 1
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(8744 * progress));
	});;

})(jQuery);