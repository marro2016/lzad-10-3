$(function(){
    var carouselList = $("#mycarousel ul");
    var interval = setInterval(changeSlide, 3000);
    function changeSlide() {
    carouselList.animate({'marginLeft': -400}, 100, moveFirst);
    }
    function moveFirst() {
    var first = carouselList.find("li:first");
    var last = carouselList.find("li:last");

    last.after(first);
    carouselList.css({marginLeft:0});
    }
 });
