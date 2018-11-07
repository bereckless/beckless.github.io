(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-158').attr('src', (dpi>1) ? 'images/fen-zu-11-348.png' : 'images/fen-zu-11-174.png');
$('.js-159').attr('src', (dpi>1) ? 'images/2-526-1.jpg' : 'images/2-263-1.jpg');
$('.js-160').attr('src', (dpi>1) ? 'images/16-526.jpg' : 'images/16-263.jpg');
$('.js-161').attr('src', (dpi>1) ? 'images/16-526.jpg' : 'images/16-263.jpg');
$('.js-162').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-163').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-164').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){$('.js-158').attr('src', (dpi>1) ? 'images/fen-zu-11-278.png' : 'images/fen-zu-11-139.png');
$('.js-159').attr('src', (dpi>1) ? 'images/2-422-1.jpg' : 'images/2-211-1.jpg');
$('.js-160').attr('src', (dpi>1) ? 'images/16-422.jpg' : 'images/16-211.jpg');
$('.js-161').attr('src', (dpi>1) ? 'images/16-422-1.jpg' : 'images/16-211-1.jpg');
$('.js-162').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-163').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-164').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){$('.js-158').attr('src', (dpi>1) ? 'images/fen-zu-11-222.png' : 'images/fen-zu-11-111.png');
$('.js-159').attr('src', (dpi>1) ? 'images/2-338-1.jpg' : 'images/2-169-1.jpg');
$('.js-160').attr('src', (dpi>1) ? 'images/16-338.jpg' : 'images/16-169.jpg');
$('.js-161').attr('src', (dpi>1) ? 'images/16-338-1.jpg' : 'images/16-169-1.jpg');
$('.js-162').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-163').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-164').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){$('.js-158').attr('src', (dpi>1) ? 'images/fen-zu-11-140.png' : 'images/fen-zu-11-70.png');
$('.js-159').attr('src', (dpi>1) ? 'images/2-210-1.jpg' : 'images/2-105-1.jpg');
$('.js-160').attr('src', (dpi>1) ? 'images/16-210.jpg' : 'images/16-105.jpg');
$('.js-161').attr('src', (dpi>1) ? 'images/16-210-1.jpg' : 'images/16-105-1.jpg');
$('.js-162').attr('src', (dpi>1) ? 'images/fen-zu-6-564.png' : 'images/fen-zu-6-282.png');
$('.js-163').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-164').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{$('.js-158').attr('src', (dpi>1) ? 'images/fen-zu-11-94.png' : 'images/fen-zu-11-47.png');
$('.js-159').attr('src', (dpi>1) ? 'images/2-140-1.jpg' : 'images/2-70-1.jpg');
$('.js-160').attr('src', (dpi>1) ? 'images/16-140.jpg' : 'images/16-70.jpg');
$('.js-161').attr('src', (dpi>1) ? 'images/16-140.jpg' : 'images/16-70.jpg');
$('.js-162').attr('src', (dpi>1) ? 'images/fen-zu-6-376.png' : 'images/fen-zu-6-188.png');
$('.js-163').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-164').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-193').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-193').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-193-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-194').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-194').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-194-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});