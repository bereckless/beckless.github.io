(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/nao-zibook-pro-400.png' : 'images/nao-zibook-pro-200.png');
$('.js-2').attr('src', (dpi>1) ? 'images/fen-zu-12-142.png' : 'images/fen-zu-12-71.png');
$('.js-3').attr('src', (dpi>1) ? 'images/fen-zu-12-142.png' : 'images/fen-zu-12-71.png');
$('.js-4').attr('src', (dpi>1) ? 'images/fen-zu-12-142.png' : 'images/fen-zu-12-71.png');
$('.js-5').attr('src', (dpi>1) ? 'images/fen-zu-12-142.png' : 'images/fen-zu-12-71.png');
$('.js-6').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-172.png' : 'images/fen-zu-2-copy-5-86.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fen-zu-12-142.png' : 'images/fen-zu-12-71.png');
$('.js-8').attr('src', (dpi>1) ? 'images/fen-zu-12-142.png' : 'images/fen-zu-12-71.png');
$('.js-9').attr('src', (dpi>1) ? 'images/fen-zu-3-58.png' : 'images/fen-zu-3-29.png');
$('.js-10').attr('src', (dpi>1) ? 'images/fen-zu-6-302.png' : 'images/fen-zu-6-151.png');
$('.js-11').attr('src', (dpi>1) ? 'images/fen-zu-7-302.png' : 'images/fen-zu-7-151.png');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/nao-zibook-pro-320.png' : 'images/nao-zibook-pro-160.png');
$('.js-2').attr('src', (dpi>1) ? 'images/fen-zu-12-114.png' : 'images/fen-zu-12-57.png');
$('.js-3').attr('src', (dpi>1) ? 'images/fen-zu-12-114.png' : 'images/fen-zu-12-57.png');
$('.js-4').attr('src', (dpi>1) ? 'images/fen-zu-12-114.png' : 'images/fen-zu-12-57.png');
$('.js-5').attr('src', (dpi>1) ? 'images/fen-zu-12-114.png' : 'images/fen-zu-12-57.png');
$('.js-6').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-136.png' : 'images/fen-zu-2-copy-5-68-1.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fen-zu-12-114.png' : 'images/fen-zu-12-57.png');
$('.js-8').attr('src', (dpi>1) ? 'images/fen-zu-12-114.png' : 'images/fen-zu-12-57.png');
$('.js-9').attr('src', (dpi>1) ? 'images/fen-zu-3-46.png' : 'images/fen-zu-3-23.png');
$('.js-10').attr('src', (dpi>1) ? 'images/fen-zu-6-242.png' : 'images/fen-zu-6-121.png');
$('.js-11').attr('src', (dpi>1) ? 'images/fen-zu-7-242.png' : 'images/fen-zu-7-121.png');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? 'images/nao-zibook-pro-256.png' : 'images/nao-zibook-pro-128.png');
$('.js-2').attr('src', (dpi>1) ? 'images/fen-zu-12-92.png' : 'images/fen-zu-12-46.png');
$('.js-3').attr('src', (dpi>1) ? 'images/fen-zu-12-92.png' : 'images/fen-zu-12-46.png');
$('.js-4').attr('src', (dpi>1) ? 'images/fen-zu-12-92.png' : 'images/fen-zu-12-46.png');
$('.js-5').attr('src', (dpi>1) ? 'images/fen-zu-12-92.png' : 'images/fen-zu-12-46.png');
$('.js-6').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-110.png' : 'images/fen-zu-2-copy-5-55.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fen-zu-12-92.png' : 'images/fen-zu-12-46.png');
$('.js-8').attr('src', (dpi>1) ? 'images/fen-zu-12-92.png' : 'images/fen-zu-12-46.png');
$('.js-9').attr('src', (dpi>1) ? 'images/fen-zu-3-36.png' : 'images/fen-zu-3-18.png');
$('.js-10').attr('src', (dpi>1) ? 'images/fen-zu-6-194.png' : 'images/fen-zu-6-97.png');
$('.js-11').attr('src', (dpi>1) ? 'images/fen-zu-7-194.png' : 'images/fen-zu-7-97.png');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/nao-zibook-pro-160.png' : 'images/nao-zibook-pro-80.png');
$('.js-2').attr('src', (dpi>1) ? 'images/fen-zu-12-58.png' : 'images/fen-zu-12-29.png');
$('.js-3').attr('src', (dpi>1) ? 'images/fen-zu-12-58.png' : 'images/fen-zu-12-29.png');
$('.js-4').attr('src', (dpi>1) ? 'images/fen-zu-12-58.png' : 'images/fen-zu-12-29.png');
$('.js-5').attr('src', (dpi>1) ? 'images/fen-zu-12-58.png' : 'images/fen-zu-12-29.png');
$('.js-6').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-68.png' : 'images/fen-zu-2-copy-5-34.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fen-zu-12-56.png' : 'images/fen-zu-12-28.png');
$('.js-8').attr('src', (dpi>1) ? 'images/fen-zu-12-58.png' : 'images/fen-zu-12-29.png');
$('.js-9').attr('src', (dpi>1) ? 'images/fen-zu-3-22.png' : 'images/fen-zu-3-11.png');
$('.js-10').attr('src', (dpi>1) ? 'images/fen-zu-6-122.png' : 'images/fen-zu-6-61.png');
$('.js-11').attr('src', (dpi>1) ? 'images/fen-zu-7-122.png' : 'images/fen-zu-7-61.png');}else{$('.js').attr('src', (dpi>1) ? 'images/nao-zibook-pro-106.png' : 'images/nao-zibook-pro-53.png');
$('.js-2').attr('src', (dpi>1) ? 'images/fen-zu-12-38.png' : 'images/fen-zu-12-19.png');
$('.js-3').attr('src', (dpi>1) ? 'images/fen-zu-12-38.png' : 'images/fen-zu-12-19.png');
$('.js-4').attr('src', (dpi>1) ? 'images/fen-zu-12-38.png' : 'images/fen-zu-12-19.png');
$('.js-5').attr('src', (dpi>1) ? 'images/fen-zu-12-38.png' : 'images/fen-zu-12-19.png');
$('.js-6').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-46.png' : 'images/fen-zu-2-copy-5-23.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fen-zu-12-38.png' : 'images/fen-zu-12-19.png');
$('.js-8').attr('src', (dpi>1) ? 'images/fen-zu-12-38.png' : 'images/fen-zu-12-19.png');
$('.js-9').attr('src', (dpi>1) ? 'images/fen-zu-3-16.png' : 'images/fen-zu-3-8.png');
$('.js-10').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-11').attr('src', (dpi>1) ? 'images/fen-zu-7-82.png' : 'images/fen-zu-7-41.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-56').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-56').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-56-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });

});