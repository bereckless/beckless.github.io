(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-396').attr('src', (dpi>1) ? 'images/1-400.jpg' : 'images/1-200.jpg');
$('.js-397').attr('src', (dpi>1) ? 'images/2-1106.jpg' : 'images/2-553.jpg');
$('.js-398').attr('src', (dpi>1) ? 'images/3-436.jpg' : 'images/3-218.jpg');
$('.js-399').attr('src', (dpi>1) ? 'images/11-690.jpg' : 'images/11-345.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/12-690.jpg' : 'images/12-345.jpg');
$('.js-401').attr('src', (dpi>1) ? 'images/9-690.jpg' : 'images/9-345.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/10-690.jpg' : 'images/10-345.jpg');
$('.js-403').attr('src', (dpi>1) ? 'images/8-690.jpg' : 'images/8-345.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/10-690.jpg' : 'images/10-345.jpg');
$('.js-405').attr('src', (dpi>1) ? 'images/life-shopping-center-578.png' : 'images/life-shopping-center-289.png');
$('.js-406').attr('src', (dpi>1) ? 'images/fen-zu-2240.png' : 'images/fen-zu-1120.png');
$('.js-407').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-408').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-409').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');
$('.js-410').attr('src', (dpi>1) ? 'images/20-400.jpg' : 'images/20-200.jpg');
$('.js-411').attr('src', (dpi>1) ? 'images/21-400.jpg' : 'images/21-200.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/23-400.jpg' : 'images/23-200.jpg');
$('.js-413').attr('src', (dpi>1) ? 'images/24-400.jpg' : 'images/24-200.jpg');}else if($(window).width()>=960){$('.js-396').attr('src', (dpi>1) ? 'images/1-320.jpg' : 'images/1-160-1.jpg');
$('.js-397').attr('src', (dpi>1) ? 'images/2-886.jpg' : 'images/2-443.jpg');
$('.js-398').attr('src', (dpi>1) ? 'images/3-350.jpg' : 'images/3-175.jpg');
$('.js-399').attr('src', (dpi>1) ? 'images/11-552.jpg' : 'images/11-276-1.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/12-552.jpg' : 'images/12-276-1.jpg');
$('.js-401').attr('src', (dpi>1) ? 'images/9-552.jpg' : 'images/9-276-1.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/10-552.jpg' : 'images/10-276-1.jpg');
$('.js-403').attr('src', (dpi>1) ? 'images/8-552.jpg' : 'images/8-276-1.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/10-552.jpg' : 'images/10-276-1.jpg');
$('.js-405').attr('src', (dpi>1) ? 'images/life-shopping-center-462.png' : 'images/life-shopping-center-231.png');
$('.js-406').attr('src', (dpi>1) ? 'images/fen-zu-1792.png' : 'images/fen-zu-896-1.png');
$('.js-407').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-408').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-409').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');
$('.js-410').attr('src', (dpi>1) ? 'images/20-320.jpg' : 'images/20-160-1.jpg');
$('.js-411').attr('src', (dpi>1) ? 'images/21-320.jpg' : 'images/21-160-1.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/23-320.jpg' : 'images/23-160-1.jpg');
$('.js-413').attr('src', (dpi>1) ? 'images/24-320.jpg' : 'images/24-160-1.jpg');}else if($(window).width()>=768){$('.js-396').attr('src', (dpi>1) ? 'images/1-256.jpg' : 'images/1-128.jpg');
$('.js-397').attr('src', (dpi>1) ? 'images/2-710.jpg' : 'images/2-355.jpg');
$('.js-398').attr('src', (dpi>1) ? 'images/3-280.jpg' : 'images/3-140.jpg');
$('.js-399').attr('src', (dpi>1) ? 'images/11-442.jpg' : 'images/11-221.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/12-442.jpg' : 'images/12-221.jpg');
$('.js-401').attr('src', (dpi>1) ? 'images/9-442.jpg' : 'images/9-221.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/10-442.jpg' : 'images/10-221.jpg');
$('.js-403').attr('src', (dpi>1) ? 'images/8-442.jpg' : 'images/8-221.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/10-442.jpg' : 'images/10-221.jpg');
$('.js-405').attr('src', (dpi>1) ? 'images/life-shopping-center-370.png' : 'images/life-shopping-center-185.png');
$('.js-406').attr('src', (dpi>1) ? 'images/fen-zu-1434.png' : 'images/fen-zu-717.png');
$('.js-407').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-408').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-409').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');
$('.js-410').attr('src', (dpi>1) ? 'images/20-256.jpg' : 'images/20-128.jpg');
$('.js-411').attr('src', (dpi>1) ? 'images/21-256.jpg' : 'images/21-128.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/23-256.jpg' : 'images/23-128.jpg');
$('.js-413').attr('src', (dpi>1) ? 'images/24-256.jpg' : 'images/24-128.jpg');}else if($(window).width()>=480){$('.js-396').attr('src', (dpi>1) ? 'images/1-160.jpg' : 'images/1-80.jpg');
$('.js-397').attr('src', (dpi>1) ? 'images/2-442.jpg' : 'images/2-221.jpg');
$('.js-398').attr('src', (dpi>1) ? 'images/3-176.jpg' : 'images/3-88.jpg');
$('.js-399').attr('src', (dpi>1) ? 'images/11-276.jpg' : 'images/11-138.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/12-276.jpg' : 'images/12-138.jpg');
$('.js-401').attr('src', (dpi>1) ? 'images/9-276.jpg' : 'images/9-138.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/10-276.jpg' : 'images/10-138.jpg');
$('.js-403').attr('src', (dpi>1) ? 'images/8-276.jpg' : 'images/8-138.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/10-276.jpg' : 'images/10-138.jpg');
$('.js-405').attr('src', (dpi>1) ? 'images/life-shopping-center-232.png' : 'images/life-shopping-center-116.png');
$('.js-406').attr('src', (dpi>1) ? 'images/fen-zu-896.png' : 'images/fen-zu-448.png');
$('.js-407').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-408').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-409').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');
$('.js-410').attr('src', (dpi>1) ? 'images/20-160.jpg' : 'images/20-80.jpg');
$('.js-411').attr('src', (dpi>1) ? 'images/21-160.jpg' : 'images/21-80.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/23-160.jpg' : 'images/23-80.jpg');
$('.js-413').attr('src', (dpi>1) ? 'images/24-160.jpg' : 'images/24-80.jpg');}else{$('.js-396').attr('src', (dpi>1) ? 'images/1-106-1.jpg' : 'images/1-53.jpg');
$('.js-397').attr('src', (dpi>1) ? 'images/2-296.jpg' : 'images/2-148.jpg');
$('.js-398').attr('src', (dpi>1) ? 'images/3-116.jpg' : 'images/3-58.jpg');
$('.js-399').attr('src', (dpi>1) ? 'images/11-184.jpg' : 'images/11-92.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/12-184.jpg' : 'images/12-92.jpg');
$('.js-401').attr('src', (dpi>1) ? 'images/9-184.jpg' : 'images/9-92.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/10-184.jpg' : 'images/10-92.jpg');
$('.js-403').attr('src', (dpi>1) ? 'images/8-184.jpg' : 'images/8-92.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/10-184.jpg' : 'images/10-92.jpg');
$('.js-405').attr('src', (dpi>1) ? 'images/life-shopping-center-154.png' : 'images/life-shopping-center-77.png');
$('.js-406').attr('src', (dpi>1) ? 'images/fen-zu-598.png' : 'images/fen-zu-299.png');
$('.js-407').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-408').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-409').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');
$('.js-410').attr('src', (dpi>1) ? 'images/20-106.jpg' : 'images/20-53.jpg');
$('.js-411').attr('src', (dpi>1) ? 'images/21-106.jpg' : 'images/21-53.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/23-106.jpg' : 'images/23-53.jpg');
$('.js-413').attr('src', (dpi>1) ? 'images/24-106.jpg' : 'images/24-53.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-486').mouseenter(function() { $.loadImages('images/2-5388.jpg', function() { }) });
$('.js-486').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-486-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2-5388.jpg'; } } });
$('.js-487').mouseenter(function() { $.loadImages('images/11-5629.jpg', function() { }) });
$('.js-487').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-487-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/11-5629.jpg'; } } });
$('.js-488').mouseenter(function() { $.loadImages('images/12-5712.jpg', function() { }) });
$('.js-488').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-488-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/12-5712.jpg'; } } });
$('.js-489').mouseenter(function() { $.loadImages('images/9-5744.jpg', function() { }) });
$('.js-489').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-489-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/9-5744.jpg'; } } });
$('.js-490').mouseenter(function() { $.loadImages('images/10-5602.jpg', function() { }) });
$('.js-490').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-490-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/10-5602.jpg'; } } });
$('.js-491').mouseenter(function() { $.loadImages('images/8-5796.jpg', function() { }) });
$('.js-491').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-491-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/8-5796.jpg'; } } });
$('.js-492').mouseenter(function() { $.loadImages('images/10-5602.jpg', function() { }) });
$('.js-492').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-492-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/10-5602.jpg'; } } });
$('.js-493').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-493').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-493-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-494').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-494').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-494-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });
$('.js-495').mouseenter(function() { $.loadImages('images/20-3568.jpg', function() { }) });
$('.js-495').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-495-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/20-3568.jpg'; } } });
$('.js-496').mouseenter(function() { $.loadImages('images/21-3712.jpg', function() { }) });
$('.js-496').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-496-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/21-3712.jpg'; } } });
$('.js-497').mouseenter(function() { $.loadImages('images/23-3647.jpg', function() { }) });
$('.js-497').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-497-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/23-3647.jpg'; } } });
$('.js-498').mouseenter(function() { $.loadImages('images/24-3760.jpg', function() { }) });
$('.js-498').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-498-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/24-3760.jpg'; } } });

});