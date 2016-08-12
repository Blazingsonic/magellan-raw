
// ==========================================================================
// Variables
// ==========================================================================

// General

// URL

// var currentUrl = document.location.pathname.match(/[^\/]+$/)[0];


// ==========================================================================
// Tests
// ==========================================================================

console.log('This is a test');


// ==========================================================================
// Document Classes
// ==========================================================================

// Min Height of Screensize
$(document).ready(function() {
	var minheight;

	if (window.innerWidth >= 900) {
		minheight = (window.innerHeight * 2/3);
	} else {
		minheight = (window.innerHeight * 1/2);
	}
	$('.js-min-height').css('min-height',minheight);
});

$(window).resize(function() {
	var minheight;

	if (window.innerWidth >= 900) {
		minheight = (window.innerHeight * 2/3);
	} else {
		minheight = (window.innerHeight * 1/2);
	}
	$('.js-min-height').css('min-height',minheight);
});


// ==========================================================================
// SVG
// ==========================================================================

// Load SVG sprite
$.get("img/sprite/svg.svg", function(data) {
  	var div = document.createElement('div');
  	div.className += 'hide-svg-defs';
  	div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
	document.body.insertBefore(div, document.body.childNodes[0]);
});


// ==========================================================================
// Grid
// ==========================================================================

// Add click to grid button
$(document).ready(function() {
	$('.show-grid-button').on('click', function() {
		$('.gridlover-grid').toggle();
	});
});


// ==========================================================================
// Smoothscroll
// ==========================================================================

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// ==========================================================================
// Navigation
// ==========================================================================



// ==========================================================================
// Slick Slider
// ==========================================================================

$(document).ready(function() {
	$('.js-slick').slick({
    autoplay: false,
    speed: 1000,
    dots: true,
    arrows: false
  });
});


// ==========================================================================
// Skills Module
// ==========================================================================

/* Animate Skills on Scroll -------------------- */

// Vars
var moduleSkillsHeight = $('#skills').height();
var moduleSkillsOffset = $('#skills').offset().top;
var skillsScroll = false;
var $skillsOverview = $('.c-show-skills__figure');

// Set default for position of skills overview
TweenMax.set($skillsOverview, {x: '-=50', autoAlpha: 0});

// Animate when user scrolls to a certain point
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > moduleSkillsOffset && !skillsScroll) {
		TweenMax.staggerTo($skillsOverview, 1,  {x: '0', autoAlpha: 1}, 0.25);
		skillsScroll = true;
	}
});

/* Skills Interaction -------------------- */

// Vars
var $sep = $('.c-show-skills__sep');
var $desc = $('.c-show-skills__desc');

var frontendText = 'Als Frontendbereich einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS'
var backendText = 'Als Backendbereich einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS'
var performanceText = 'Als Performance einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS'
var seoText = 'Als Seo einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS'

var skillsState = 'init';

// Open skills and show details
$(document).ready(function() {

	// If overview element is clicked, show detailed information
	$('.c-show-skills__figure').on('click', function() {
		var $elem = $(this);
		var $allElems = $('.c-show-skills__figure');
		var openSkillsTl = new TimelineMax();

		openSkillsTl
			.to($allElems, 0.5, {x: '+=50', autoAlpha: 0, display: 'none'})
			.to($elem, 0.2, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.4')
			// remove init classes
			//.set($('.c-skills'), {className: '-=c-skills--init'}) // no class given
			.set($('.c-sub-skills'), {className: '-=is-initial', height: 'initial', autoAlpha: 1})
			.set($('.c-show-skills'), {className: '-=is-initial'})
			.set($elem, {x: 0, display: ''})
			.to($elem, 1, {autoAlpha: 1, ease: Power4.easeInOut})
			.to($desc, 1, {autoAlpha: 1, ease: Power4.easeInOut}, '-=0.4');

		skillsState = "opened";
	});

	// If sub link of skills is clicked, switch out the information shown
	$('.c-sub-skills__item').on('click', function() {
		var descTextTl = new TimelineMax();
		var descNewText = 'description text';

		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');

		if ($(this).text().toLowerCase() == 'frontend') {
			descNewText = frontendText;
		}
		if ($(this).text().toLowerCase() == 'backend') {
			descNewText = backendText;
		}
		if ($(this).text().toLowerCase() == 'performance') {
			descNewText = performanceText;
		}
		if ($(this).text().toLowerCase() == 'seo') {
			descNewText = seoText;
		}

		descTextTl
			.to($desc, 0.5, {x: '+=50', autoAlpha: 0, ease:Power4.easeInOut})
			.set($desc, {x: 0, text: descNewText})
			.to($desc, 0.75, {autoAlpha: 1});
	});

	// If main link of skills is clicked, switch out sub menu links and the information shown
	$('#skills-bullet .o-bullet__item').on('click', function() {
		var switchSkillsTl = new TimelineMax();

		$('#skills-bullet .o-bullet__item').removeClass('is-active');
		$(this).addClass('is-active');

		// If skills is in opened--state switch out sub links and information shown
		if (skillsState == 'opened') {
			console.log('was opened');
			switchSkillsTl
				.to($('.c-show-skills'), 0.25, {autoAlpha: 0})
				// .set($('.c-show-skills__desc u-m-0'), {text: "vev evewv ewvev"})
				.to($('.c-show-skills'), 0.25, {autoAlpha: 1}, '+=0.35')
		}

		// If skills is in init--state just switch out the overviews
		if (skillsState == "init") {
			console.log('was init');
			switchSkillsTl
				.to($('.c-show-skills__figure'), 0.5, {x: '+=50', autoAlpha: 0, display: 'none', ease: Power4.easeInOut})
				.to($('.c-show-skills__figure'), 0.5, {x: 0, autoAlpha: 1, display: '', ease: Power4.easeInOut}, '-=0.05');
		}

	});
});


// ==========================================================================
// Impressionen Module
// ==========================================================================

// Animate Project Cards

// $('.projectCards--load').click(function() {
// 	updateProjectCards();
// });

// $('select').change(function() {
// 	updateProjectCards();
// });

/* Animate Cards on Scroll -------------------- */

// Vars
var moduleImpressionenHeight = $('#impressionen').height();
var moduleImpressionenOffset = $('#impressionen').offset().top;
var impressionenScroll = false;
var $cards = $('#impressionen .o-card');
var $bulletItemImpr = $('#impressionen .o-bullet__item');

// Set default for position of cards
TweenMax.set($cards, {x: '-=50', autoAlpha: 0});

// Animate when user scrolls to a certain point
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > moduleImpressionenOffset && !impressionenScroll) {
		TweenMax.staggerTo($cards, 1,  {x: '0', autoAlpha: 1}, 0.25);
		impressionenScroll = true;
	}
});

function updateProjectCards() {
	$projectCards = $('.js-card');
	var projectCardTl = new TimelineMax();

	projectCardTl
		.staggerTo($projectCards, 0.7, {x: '+= 30', autoAlpha: 0}, 0.1)
		.set($projectCards, {x: '-=60'})
		.staggerTo($projectCards, 0.7, {x: '+= 30', autoAlpha: 1}, 0.1);
}

// Update Project Cards on click
$(document).ready(function() {
	$bulletItemImpr.click(function() {
		$bulletItemImpr.removeClass('is-active');
		$(this).addClass('is-active');
		updateProjectCards();
	});
});


// ==========================================================================
// Team Module
// ==========================================================================

var moduleTeamOffset = $('#team').offset().top + 50;
var teamScroll = false;
CSSPlugin.defaultTransformPerspective = 1000;

// Set the backface 
TweenMax.set($(".c-card-prof"), {rotationY:-180, autoAlpha: 0});

// Animate when user scrolls to a certain point
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > moduleTeamOffset && !teamScroll) {
		var frontCards = $('.c-card-prof');
    // backCard = $(this).children(".cardBack"),
    var profileCardTl = new TimelineMax();

		profileCardTl
			.staggerTo(frontCards, 2, {rotationY:0, autoAlpha: 1, ease: Power3.easeInOut}, 0.5);

		teamScroll = true;
	}
});


// ==========================================================================
// Special Animations
// ==========================================================================

/* Leaf Animation -------------------- */

var density = 20,
	speed = 0.5,
	winHeight = $('.header').height(),
	end = {yMin:-25, yMax:-25, xMin:750, xMax:1050, scaleMin:0.5, scaleMax:0.6, opacityMin:0.05, opacityMax:0.1},
	mid = {yMin:-500, yMax:-400, xMin:200, xMax:500, scaleMin:0.6, scaleMax:0.6, opacityMin:0.1, opacityMax:0.25},
	start = {yMin:-750, yMax:-680, xMin:-150, xMax:100, scaleMin:0.4, scaleMax:0.6, opacityMin:0.05, opacityMax:0.15};

function range(map, prop) {
	var min = map[prop + "Min"],
		max = map[prop + "Max"];
	return min + (max - min) * Math.random();
}

function spawn(particle) {
	var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
		delay = wholeDuration * Math.random(),
		partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);

	//set the starting values
	TweenLite.set(particle, {y:range(start, "y"), x:range(start, "x"), scale:range(start, "scale"), opacity:range(start, "opacity"), visibility:"hidden"});

	//the y tween should be continuous and smooth the whole duration
	TweenLite.to(particle, wholeDuration, {delay:delay, rotation: 720, y:range(end, "y"), ease:Linear.easeNone});

	//now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)
	TweenLite.to(particle, partialDuration, {delay:delay, x:range(mid, "x"), ease:Power1.easeOut});
	TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, x:range(end, "x"), ease:Power1.easeIn});

	//now create some random scale and opacity changes
	partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
	TweenLite.to(particle, partialDuration, {delay:delay, scale:range(mid, "scale"), autoAlpha:range(mid, "opacity"), ease:Linear.easeNone});
	TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, scale:range(end, "scale"), autoAlpha:range(end, "opacity"), ease:Linear.easeNone, onComplete:spawn, onCompleteParams:[particle]});
}

$(window).ready(function() {
	console.log($(window).height());
	var body = $(".header"),
		i, particle;
	for (i = 0; i < density; i++) {
		// spawn( $("<div />", {id:"particle"+i}).addClass("i-particle").appendTo('header') );
	}
});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


























