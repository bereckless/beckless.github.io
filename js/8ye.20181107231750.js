(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-234 .slide0').hasAttr('src')) { a='src'; } $('.js-234 .slide0').attr(a, (dpi>1) ? 'images/5-1918.jpg' : 'images/5-959.jpg');
var a='data-src'; if($('.js-234 .slide1').hasAttr('src')) { a='src'; } $('.js-234 .slide1').attr(a, (dpi>1) ? 'images/4-1918.jpg' : 'images/4-959.jpg');
var a='data-src'; if($('.js-234 .slide2').hasAttr('src')) { a='src'; } $('.js-234 .slide2').attr(a, (dpi>1) ? 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-1918.jpg' : 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-959.jpg');
var a='data-src'; if($('.js-234 .slide3').hasAttr('src')) { a='src'; } $('.js-234 .slide3').attr(a, (dpi>1) ? 'images/6-1918.jpg' : 'images/6-959.jpg');
$('.js-235').attr('src', (dpi>1) ? 'images/life-shopping-center-578.png' : 'images/life-shopping-center-289.png');
$('.js-236').attr('src', (dpi>1) ? 'images/fen-zu-2240.png' : 'images/fen-zu-1120.png');
$('.js-237').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-238').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-239').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){var a='data-src'; if($('.js-234 .slide0').hasAttr('src')) { a='src'; } $('.js-234 .slide0').attr(a, (dpi>1) ? 'images/5-1534.jpg' : 'images/5-767.jpg');
var a='data-src'; if($('.js-234 .slide1').hasAttr('src')) { a='src'; } $('.js-234 .slide1').attr(a, (dpi>1) ? 'images/4-1534.jpg' : 'images/4-767.jpg');
var a='data-src'; if($('.js-234 .slide2').hasAttr('src')) { a='src'; } $('.js-234 .slide2').attr(a, (dpi>1) ? 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-1534.jpg' : 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-767.jpg');
var a='data-src'; if($('.js-234 .slide3').hasAttr('src')) { a='src'; } $('.js-234 .slide3').attr(a, (dpi>1) ? 'images/6-1534.jpg' : 'images/6-767.jpg');
$('.js-235').attr('src', (dpi>1) ? 'images/life-shopping-center-462.png' : 'images/life-shopping-center-231.png');
$('.js-236').attr('src', (dpi>1) ? 'images/fen-zu-1792.png' : 'images/fen-zu-896-1.png');
$('.js-237').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-238').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-239').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){var a='data-src'; if($('.js-234 .slide0').hasAttr('src')) { a='src'; } $('.js-234 .slide0').attr(a, (dpi>1) ? 'images/5-1228.jpg' : 'images/5-614.jpg');
var a='data-src'; if($('.js-234 .slide1').hasAttr('src')) { a='src'; } $('.js-234 .slide1').attr(a, (dpi>1) ? 'images/4-1228.jpg' : 'images/4-614.jpg');
var a='data-src'; if($('.js-234 .slide2').hasAttr('src')) { a='src'; } $('.js-234 .slide2').attr(a, (dpi>1) ? 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-1228.jpg' : 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-614.jpg');
var a='data-src'; if($('.js-234 .slide3').hasAttr('src')) { a='src'; } $('.js-234 .slide3').attr(a, (dpi>1) ? 'images/6-1228.jpg' : 'images/6-614.jpg');
$('.js-235').attr('src', (dpi>1) ? 'images/life-shopping-center-370.png' : 'images/life-shopping-center-185.png');
$('.js-236').attr('src', (dpi>1) ? 'images/fen-zu-1434.png' : 'images/fen-zu-717.png');
$('.js-237').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-238').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-239').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){var a='data-src'; if($('.js-234 .slide0').hasAttr('src')) { a='src'; } $('.js-234 .slide0').attr(a, (dpi>1) ? 'images/5-768.jpg' : 'images/5-384.jpg');
var a='data-src'; if($('.js-234 .slide1').hasAttr('src')) { a='src'; } $('.js-234 .slide1').attr(a, (dpi>1) ? 'images/4-768.jpg' : 'images/4-384.jpg');
var a='data-src'; if($('.js-234 .slide2').hasAttr('src')) { a='src'; } $('.js-234 .slide2').attr(a, (dpi>1) ? 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-768.jpg' : 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-384.jpg');
var a='data-src'; if($('.js-234 .slide3').hasAttr('src')) { a='src'; } $('.js-234 .slide3').attr(a, (dpi>1) ? 'images/6-768.jpg' : 'images/6-384.jpg');
$('.js-235').attr('src', (dpi>1) ? 'images/life-shopping-center-232.png' : 'images/life-shopping-center-116.png');
$('.js-236').attr('src', (dpi>1) ? 'images/fen-zu-896.png' : 'images/fen-zu-448.png');
$('.js-237').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-238').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-239').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{var a='data-src'; if($('.js-234 .slide0').hasAttr('src')) { a='src'; } $('.js-234 .slide0').attr(a, (dpi>1) ? 'images/5-512.jpg' : 'images/5-256.jpg');
var a='data-src'; if($('.js-234 .slide1').hasAttr('src')) { a='src'; } $('.js-234 .slide1').attr(a, (dpi>1) ? 'images/4-512.jpg' : 'images/4-256.jpg');
var a='data-src'; if($('.js-234 .slide2').hasAttr('src')) { a='src'; } $('.js-234 .slide2').attr(a, (dpi>1) ? 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-512.jpg' : 'images/3fe09bb0f8cbfa4828e066d6bbd8ace8_webwxgetmsgimg_-msgid-2805438097627650527-skey-40crypt_701dee5d_003b22ea5be20c524a16358d5504716e-256.jpg');
var a='data-src'; if($('.js-234 .slide3').hasAttr('src')) { a='src'; } $('.js-234 .slide3').attr(a, (dpi>1) ? 'images/6-512.jpg' : 'images/6-256.jpg');
$('.js-235').attr('src', (dpi>1) ? 'images/life-shopping-center-154.png' : 'images/life-shopping-center-77.png');
$('.js-236').attr('src', (dpi>1) ? 'images/fen-zu-598.png' : 'images/fen-zu-299.png');
$('.js-237').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-238').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-239').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-234 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});$('.js-264').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-264').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-264-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-265').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-265').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-265-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});