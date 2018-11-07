(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-57').attr('src', (dpi>1) ? 'images/wo-1450.png' : 'images/wo-725.png');
$('.js-58').attr('src', (dpi>1) ? 'images/fen-zu-6-1558.png' : 'images/fen-zu-6-779.png');
$('.js-59').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-466.jpg' : 'images/webwxgetmsgimg-233.jpg');
$('.js-60').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-172.png' : 'images/fen-zu-2-copy-5-86.png');
$('.js-61').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-62').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');
$('.js-63').attr('src', 'images/fen-zu-4-1121.png');}else if($(window).width()>=960){$('.js-57').attr('src', (dpi>1) ? 'images/wo-1160.png' : 'images/wo-580.png');
$('.js-58').attr('src', (dpi>1) ? 'images/fen-zu-6-1246.png' : 'images/fen-zu-6-623.png');
$('.js-59').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-372.jpg' : 'images/webwxgetmsgimg-186.jpg');
$('.js-60').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-136.png' : 'images/fen-zu-2-copy-5-68-1.png');
$('.js-61').attr('src', (dpi>1) ? 'images/fen-zu-6-160.png' : 'images/fen-zu-6-80-1.png');
$('.js-62').attr('src', (dpi>1) ? 'images/fen-zu-7-160.png' : 'images/fen-zu-7-80-1.png');
$('.js-63').attr('src', 'images/fen-zu-4-897.png');}else if($(window).width()>=768){$('.js-57').attr('src', (dpi>1) ? 'images/wo-928.png' : 'images/wo-464.png');
$('.js-58').attr('src', (dpi>1) ? 'images/fen-zu-6-998.png' : 'images/fen-zu-6-499.png');
$('.js-59').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-298.jpg' : 'images/webwxgetmsgimg-149.jpg');
$('.js-60').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-110.png' : 'images/fen-zu-2-copy-5-55.png');
$('.js-61').attr('src', (dpi>1) ? 'images/fen-zu-6-128.png' : 'images/fen-zu-6-64.png');
$('.js-62').attr('src', (dpi>1) ? 'images/fen-zu-7-128.png' : 'images/fen-zu-7-64.png');
$('.js-63').attr('src', (dpi>1) ? 'images/fen-zu-4-1434.png' : 'images/fen-zu-4-717.png');}else if($(window).width()>=480){$('.js-57').attr('src', (dpi>1) ? 'images/wo-578.png' : 'images/wo-289.png');
$('.js-58').attr('src', (dpi>1) ? 'images/fen-zu-6-624.png' : 'images/fen-zu-6-312.png');
$('.js-59').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-186.jpg' : 'images/webwxgetmsgimg-93.jpg');
$('.js-60').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-68.png' : 'images/fen-zu-2-copy-5-34.png');
$('.js-61').attr('src', (dpi>1) ? 'images/fen-zu-6-80.png' : 'images/fen-zu-6-40.png');
$('.js-62').attr('src', (dpi>1) ? 'images/fen-zu-7-80.png' : 'images/fen-zu-7-40.png');
$('.js-63').attr('src', (dpi>1) ? 'images/fen-zu-4-894.png' : 'images/fen-zu-4-447.png');}else{$('.js-57').attr('src', (dpi>1) ? 'images/wo-386.png' : 'images/wo-193.png');
$('.js-58').attr('src', (dpi>1) ? 'images/fen-zu-6-416.png' : 'images/fen-zu-6-208.png');
$('.js-59').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-124.jpg' : 'images/webwxgetmsgimg-62.jpg');
$('.js-60').attr('src', (dpi>1) ? 'images/fen-zu-2-copy-5-46.png' : 'images/fen-zu-2-copy-5-23.png');
$('.js-61').attr('src', (dpi>1) ? 'images/fen-zu-6-54.png' : 'images/fen-zu-6-27.png');
$('.js-62').attr('src', (dpi>1) ? 'images/fen-zu-7-54.png' : 'images/fen-zu-7-27.png');
$('.js-63').attr('src', (dpi>1) ? 'images/fen-zu-4-596.png' : 'images/fen-zu-4-298.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-92').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-92').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-92-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-93').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-93').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-93-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});