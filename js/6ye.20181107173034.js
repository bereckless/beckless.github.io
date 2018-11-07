(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-195').attr('src', (dpi>1) ? 'images/fen-zu-11-348.png' : 'images/fen-zu-11-174.png');
$('.js-196').attr('src', 'images/fen-zu-2-708.png');}else if($(window).width()>=960){$('.js-195').attr('src', (dpi>1) ? 'images/fen-zu-11-278.png' : 'images/fen-zu-11-139.png');
$('.js-196').attr('src', 'images/fen-zu-2-567.png');}else if($(window).width()>=768){$('.js-195').attr('src', (dpi>1) ? 'images/fen-zu-11-222.png' : 'images/fen-zu-11-111.png');
$('.js-196').attr('src', (dpi>1) ? 'images/fen-zu-2-908.png' : 'images/fen-zu-2-454.png');}else if($(window).width()>=480){$('.js-195').attr('src', (dpi>1) ? 'images/fen-zu-11-140.png' : 'images/fen-zu-11-70.png');
$('.js-196').attr('src', (dpi>1) ? 'images/fen-zu-2-568.png' : 'images/fen-zu-2-284.png');}else{$('.js-195').attr('src', (dpi>1) ? 'images/fen-zu-11-94.png' : 'images/fen-zu-11-47.png');
$('.js-196').attr('src', (dpi>1) ? 'images/fen-zu-2-378.png' : 'images/fen-zu-2-189.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});