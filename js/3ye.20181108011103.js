(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-181').attr('src', (dpi>1) ? 'images/fen-zu-11-348.png' : 'images/fen-zu-11-174.png');
$('.js-182').attr('src', (dpi>1) ? 'images/iterm-382.png' : 'images/iterm-191.png');
$('.js-183').attr('src', (dpi>1) ? 'images/nutrition-informatio-1118.png' : 'images/nutrition-informatio-559.png');
$('.js-184').attr('src', (dpi>1) ? 'images/per100g-478.png' : 'images/per100g-239.png');
$('.js-185').attr('src', (dpi>1) ? 'images/nrv--524.png' : 'images/nrv--262.png');
$('.js-186').attr('src', (dpi>1) ? 'images/5-530.jpg' : 'images/5-265.jpg');
$('.js-187').attr('src', (dpi>1) ? 'images/1-530.jpg' : 'images/1-265.jpg');
$('.js-188').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-189').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-190').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){$('.js-181').attr('src', (dpi>1) ? 'images/fen-zu-11-278.png' : 'images/fen-zu-11-139.png');
$('.js-182').attr('src', (dpi>1) ? 'images/iterm-306.png' : 'images/iterm-153.png');
$('.js-183').attr('src', (dpi>1) ? 'images/nutrition-informatio-884.png' : 'images/nutrition-informatio-442.png');
$('.js-184').attr('src', (dpi>1) ? 'images/per100g-384.png' : 'images/per100g-192-1.png');
$('.js-185').attr('src', (dpi>1) ? 'images/nrv--414.png' : 'images/nrv--207.png');
$('.js-186').attr('src', (dpi>1) ? 'images/5-424.jpg' : 'images/5-212-1.jpg');
$('.js-187').attr('src', (dpi>1) ? 'images/1-424.jpg' : 'images/1-212-1.jpg');
$('.js-188').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-189').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-190').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){$('.js-181').attr('src', (dpi>1) ? 'images/fen-zu-11-222.png' : 'images/fen-zu-11-111.png');
$('.js-182').attr('src', (dpi>1) ? 'images/iterm-244.png' : 'images/iterm-122.png');
$('.js-183').attr('src', (dpi>1) ? 'images/nutrition-informatio-706.png' : 'images/nutrition-informatio-353.png');
$('.js-184').attr('src', (dpi>1) ? 'images/per100g-308.png' : 'images/per100g-154.png');
$('.js-185').attr('src', (dpi>1) ? 'images/nrv--332.png' : 'images/nrv--166.png');
$('.js-186').attr('src', (dpi>1) ? 'images/5-340.jpg' : 'images/5-170.jpg');
$('.js-187').attr('src', (dpi>1) ? 'images/1-340.jpg' : 'images/1-170.jpg');
$('.js-188').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-189').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-190').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){$('.js-181').attr('src', (dpi>1) ? 'images/fen-zu-11-140.png' : 'images/fen-zu-11-70.png');
$('.js-182').attr('src', (dpi>1) ? 'images/iterm-154.png' : 'images/iterm-77.png');
$('.js-183').attr('src', (dpi>1) ? 'images/nutrition-informatio-412.png' : 'images/nutrition-informatio-206.png');
$('.js-184').attr('src', (dpi>1) ? 'images/per100g-192.png' : 'images/per100g-96.png');
$('.js-185').attr('src', (dpi>1) ? 'images/nrv--208.png' : 'images/nrv--104.png');
$('.js-186').attr('src', (dpi>1) ? 'images/5-212.jpg' : 'images/5-106.jpg');
$('.js-187').attr('src', (dpi>1) ? 'images/1-212.jpg' : 'images/1-106.jpg');
$('.js-188').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-189').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-190').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{$('.js-181').attr('src', (dpi>1) ? 'images/fen-zu-11-94.png' : 'images/fen-zu-11-47.png');
$('.js-182').attr('src', (dpi>1) ? 'images/iterm-102.png' : 'images/iterm-51.png');
$('.js-183').attr('src', (dpi>1) ? 'images/nutrition-informatio-296.png' : 'images/nutrition-informatio-148.png');
$('.js-184').attr('src', (dpi>1) ? 'images/per100g-128.png' : 'images/per100g-64.png');
$('.js-185').attr('src', (dpi>1) ? 'images/nrv--138.png' : 'images/nrv--69.png');
$('.js-186').attr('src', (dpi>1) ? 'images/5-142.jpg' : 'images/5-71.jpg');
$('.js-187').attr('src', (dpi>1) ? 'images/1-142.jpg' : 'images/1-71.jpg');
$('.js-188').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-189').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-190').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-231').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-231').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-231-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-232').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-232').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-232-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});