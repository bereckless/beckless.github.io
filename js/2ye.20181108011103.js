(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-138').attr('src', (dpi>1) ? 'images/wo-1450.png' : 'images/wo-725.png');
$('.js-139').attr('src', (dpi>1) ? 'images/fen-zu-6-1574.png' : 'images/fen-zu-6-787.png');
$('.js-140').attr('src', (dpi>1) ? 'images/fen-zu-4-1200.png' : 'images/fen-zu-4-600.png');
$('.js-141').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-466-1.jpg' : 'images/webwxgetmsgimg-233-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-172.png' : 'images/fen-zu-2-copy-5-86.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-302-1.png' : 'images/fen-zu-6-151-1.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-302.png' : 'images/fen-zu-7-151.png');
$('.js-145').attr('src', 'images/fen-zu-4-1121.png');}else if($(window).width()>=960){$('.js-138').attr('src', (dpi>1) ? 'images/wo-1160.png' : 'images/wo-580.png');
$('.js-139').attr('src', (dpi>1) ? 'images/fen-zu-6-1260.png' : 'images/fen-zu-6-630.png');
$('.js-140').attr('src', (dpi>1) ? 'images/fen-zu-4-960.png' : 'images/fen-zu-4-480.png');
$('.js-141').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-372-1.jpg' : 'images/webwxgetmsgimg-186-2.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-136.png' : 'images/fen-zu-2-copy-5-68-1.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-242-1.png' : 'images/fen-zu-6-121-1.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-242.png' : 'images/fen-zu-7-121.png');
$('.js-145').attr('src', 'images/fen-zu-4-897.png');}else if($(window).width()>=768){$('.js-138').attr('src', (dpi>1) ? 'images/wo-928.png' : 'images/wo-464.png');
$('.js-139').attr('src', (dpi>1) ? 'images/fen-zu-6-1008.png' : 'images/fen-zu-6-504.png');
$('.js-140').attr('src', (dpi>1) ? 'images/fen-zu-4-768.png' : 'images/fen-zu-4-384.png');
$('.js-141').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-298-1.jpg' : 'images/webwxgetmsgimg-149-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-110.png' : 'images/fen-zu-2-copy-5-55.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-194-1.png' : 'images/fen-zu-6-97-1.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-194.png' : 'images/fen-zu-7-97.png');
$('.js-145').attr('src', (dpi>1) ? 'images/fen-zu-4-1434.png' : 'images/fen-zu-4-717.png');}else if($(window).width()>=480){$('.js-138').attr('src', (dpi>1) ? 'images/wo-578.png' : 'images/wo-289.png');
$('.js-139').attr('src', (dpi>1) ? 'images/fen-zu-6-630.png' : 'images/fen-zu-6-315.png');
$('.js-140').attr('src', (dpi>1) ? 'images/fen-zu-4-480.png' : 'images/fen-zu-4-240.png');
$('.js-141').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-186-1.jpg' : 'images/webwxgetmsgimg-93-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-68.png' : 'images/fen-zu-2-copy-5-34.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-122-1.png' : 'images/fen-zu-6-61-1.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-122.png' : 'images/fen-zu-7-61.png');
$('.js-145').attr('src', (dpi>1) ? 'images/fen-zu-4-894.png' : 'images/fen-zu-4-447.png');}else{$('.js-138').attr('src', (dpi>1) ? 'images/wo-386.png' : 'images/wo-193.png');
$('.js-139').attr('src', (dpi>1) ? 'images/fen-zu-6-420.png' : 'images/fen-zu-6-210.png');
$('.js-140').attr('src', (dpi>1) ? 'images/fen-zu-4-320.png' : 'images/fen-zu-4-160.png');
$('.js-141').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-124-1.jpg' : 'images/webwxgetmsgimg-62-1.jpg');
$('.js-142').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-46.png' : 'images/fen-zu-2-copy-5-23.png');
$('.js-143').attr('src', (dpi>1) ? 'images/fen-zu-6-68.png' : 'images/fen-zu-6-34.png');
$('.js-144').attr('src', (dpi>1) ? 'images/fen-zu-7-68.png' : 'images/fen-zu-7-34.png');
$('.js-145').attr('src', (dpi>1) ? 'images/fen-zu-4-596.png' : 'images/fen-zu-4-298.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-178').mouseenter(function() { $.loadImages('images/webwxgetmsgimg-1932.jpg', function() { }) });
$('.js-178').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-178-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/webwxgetmsgimg-1932.jpg'; } } });
$('.js-179').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-179').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-179-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-180').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-180').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-180-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});