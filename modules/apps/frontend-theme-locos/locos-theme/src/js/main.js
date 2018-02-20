AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function() {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
		let $mainContent = $('#wrapper #main-content');

		// add animated class to first row of layout
		// let $firstRowPortlets = $mainContent.find('> div:first-child');

		// $firstRowPortlets.addClass('animated');
		// $firstRowPortlets.css('background-color', 'linear-gradient(to bottom, $turquoise 0%, $turquoise 50%, $ivory 50%, $ivory 100%)');

		// a modal for banner navigation
		function openNav() {
			let controlMenuHeight = $('.control-menu').css('height') ? $('.control-menu').css('height') : 0;

			$('.modaly').css('top', controlMenuHeight);
			slideNavCheck();
			$('.bars-nav-icon').hide();
			$('#navigation ul').show();
			$('.background-modaly').show();
			$('.background-modaly').click(() => {
				closeNav();
			});
		}

		function closeNav() {
			$('#navigation').css('width', '0');
			$('.bars-nav-icon').show();
			$('#navigation ul').hide();
			$('.background-modaly').hide();
		}

		let $nav = $('#navigation');
		$('#banner').append('<div class="bars-nav-icon"><i class="icon-align-justify"></i></div>');
		$nav.addClass('modaly');
		$nav.append('<a href="javascript:void(0)" class="closebtn">&times;</a>');
		$('#navigation > ul').addClass('modaly-content');
		$('.bars-nav-icon').click(openNav);
		$('.closebtn').click(closeNav);
		$('html').append('<div class="background-modaly" ></div>');
		$('.background-modaly').hide();
		if (Liferay.ThemeDisplay.isSignedIn()) {
			$('.bars-nav-icon').show();
		}
		else {
			$('.bars-nav-icon').hide();
		}

		// when resize window
		function slideNavCheck() {
			if (window.innerWidth < 600) {
				$('#navigation').css('width', '100%');
			}
			else if (window.innerWidth >= 600) {
				$('#navigation').css('width', '30%');
			}
		}

		$(window).resize(() => {
			let modalyPresent = Number($('#navigation').css('width').slice(0, -2)) > 0;
			// responsive modaly
			if (modalyPresent) {
				slideNavCheck();
			}

			controlMenuCheck();
		});

		// mouseover scroll bar appears on gallery only
		let $galleryContainer = $('.portlet-image-gallery-display .portlet-content-container');

		$galleryContainer.mouseover(() => {
			$(this).css('overflow-y', 'scroll');
		});
		$galleryContainer.mouseout(() => {
			$(this).css('overflow', 'hidden');
		});

		// has control menu
		function controlMenuCheck() {
			let $controlMenuHeight = $('.control-menu').css('height') ? $('.control-menu').css('height') : 0;

			$('.has-control-menu #banner').css('top', $controlMenuHeight);
		}

		controlMenuCheck();
	}

);