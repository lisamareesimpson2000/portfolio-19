$(document).ready(function(e){
	setTriangle();
})
$(window).resize(function(){
	setTriangle();
})
function setTriangle(){
  scrW = $(window).width();
  var triangle = $('.triangle');
  triangle.css('border-right', scrW + 'px solid transparent');
}
console.log("hi")

// $(document).ready(function(e){
// 	setTriangle_2();
// })
// $(window).resize(function(){
// 	setTriangle_2();
// })
// function setTriangle_2(){
//   scrW_2 = $(window).width();
//   var triangle_2 = $('.triangle_2');
//   triangle_2.css('border-left', scrW_2 + 'px solid transparent');
// }

//NAVIGATION
$(document).ready(function(){
    $("#homepage").show();
    $("#projects").hide();
    $("#about").hide();
    $("#contact").hide();
    $("#footer--lisa").show();

    $("#show__section--projects").click(function(){
        $("#projects").show();
        $("#homepage").hide();
        $("#about").hide();
        $("#footer--lisa").show();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });

    // $("#show__section--joon").click(function(){
    //     $("#joon").show();
    //     $("#lisa").hide();
    //     $("#lexi").hide();
    //     $("#footer--lisa").show();
    //     $('html, body').animate({
    //         scrollTop: $("#joon").offset().top
    //     }, 1000);
    });