(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/5333c670272745.5b9e61e67e2d9-1300.jpg' : 'images/5333c670272745.5b9e61e67e2d9-650.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/4e8b6270272745.5b9e61e681c4f-1300.jpg' : 'images/4e8b6270272745.5b9e61e681c4f-650.jpg');};
if(!window.HTMLPictureElement){r();}
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 600,dots: true,arrows: true,infinite: true});
});