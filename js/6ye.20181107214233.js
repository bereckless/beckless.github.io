(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-175').attr('src', (dpi>1) ? 'images/fen-zu-11-348.png' : 'images/fen-zu-11-174.png');
$('.js-176').attr('src', (dpi>1) ? 'images/wang-yu-mo1-530.jpg' : 'images/wang-yu-mo1-265.jpg');
$('.js-177').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-178').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-179').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){$('.js-175').attr('src', (dpi>1) ? 'images/fen-zu-11-278.png' : 'images/fen-zu-11-139.png');
$('.js-176').attr('src', (dpi>1) ? 'images/wang-yu-mo1-424.jpg' : 'images/wang-yu-mo1-212-1.jpg');
$('.js-177').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-178').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-179').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){$('.js-175').attr('src', (dpi>1) ? 'images/fen-zu-11-222.png' : 'images/fen-zu-11-111.png');
$('.js-176').attr('src', (dpi>1) ? 'images/wang-yu-mo1-340.jpg' : 'images/wang-yu-mo1-170.jpg');
$('.js-177').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-178').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-179').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){$('.js-175').attr('src', (dpi>1) ? 'images/fen-zu-11-140.png' : 'images/fen-zu-11-70.png');
$('.js-176').attr('src', (dpi>1) ? 'images/wang-yu-mo1-212.jpg' : 'images/wang-yu-mo1-106.jpg');
$('.js-177').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-178').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-179').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{$('.js-175').attr('src', (dpi>1) ? 'images/fen-zu-11-94.png' : 'images/fen-zu-11-47.png');
$('.js-176').attr('src', (dpi>1) ? 'images/wang-yu-mo1-142.jpg' : 'images/wang-yu-mo1-71.jpg');
$('.js-177').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-178').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-179').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-200').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-200').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-200-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-201').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-201').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-201-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});