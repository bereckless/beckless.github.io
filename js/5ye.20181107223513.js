(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-138').attr('src', (dpi>1) ? 'images/fen-zu-11-348.png' : 'images/fen-zu-11-174.png');
$('.js-139').attr('src', (dpi>1) ? 'images/2-530.jpg' : 'images/2-265.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/8-530.jpg' : 'images/8-265.jpg');
$('.js-141').attr('src', (dpi>1) ? 'images/8-530-1.jpg' : 'images/8-265-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){$('.js-138').attr('src', (dpi>1) ? 'images/fen-zu-11-278.png' : 'images/fen-zu-11-139.png');
$('.js-139').attr('src', (dpi>1) ? 'images/2-424.jpg' : 'images/2-212-1.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/8-424.jpg' : 'images/8-212-1.jpg');
$('.js-141').attr('src', (dpi>1) ? 'images/8-424-1.jpg' : 'images/8-212-3.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){$('.js-138').attr('src', (dpi>1) ? 'images/fen-zu-11-222.png' : 'images/fen-zu-11-111.png');
$('.js-139').attr('src', (dpi>1) ? 'images/2-340.jpg' : 'images/2-170.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/8-340.jpg' : 'images/8-170.jpg');
$('.js-141').attr('src', (dpi>1) ? 'images/8-340-1.jpg' : 'images/8-170-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){$('.js-138').attr('src', (dpi>1) ? 'images/fen-zu-11-140.png' : 'images/fen-zu-11-70.png');
$('.js-139').attr('src', (dpi>1) ? 'images/2-212.jpg' : 'images/2-106.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/8-212.jpg' : 'images/8-106.jpg');
$('.js-141').attr('src', (dpi>1) ? 'images/8-212-2.jpg' : 'images/8-106-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{$('.js-138').attr('src', (dpi>1) ? 'images/fen-zu-11-94.png' : 'images/fen-zu-11-47.png');
$('.js-139').attr('src', (dpi>1) ? 'images/2-142.jpg' : 'images/2-71.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/8-142.jpg' : 'images/8-71.jpg');
$('.js-141').attr('src', (dpi>1) ? 'images/8-142-1.jpg' : 'images/8-71-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-173').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-173').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-173-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-174').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-174').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-174-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});