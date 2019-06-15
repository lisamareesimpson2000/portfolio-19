// $ = jQuery;
// $(document).ready(function(e){
// 	setTriangle();
// })
// $(window).resize(function(){
// 	setTriangle();
// })
// function setTriangle(){
//   scrW = $(window).width();
//   var triangle = $('.triangle');
//   triangle.css('border-right', scrW + 'px solid transparent');
// };
console.log("yo");

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
    $("#footer").hide();

    $("#show__section--projects").click(function(){
        $("#projects").show();
        $("#homepage").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#footer").show();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
        console.log("hi");
    });

    $("#show__section--about").click(function(){
        $("#about").show();
        $("#home").hide();
        $("#projects").hide();
        $("#contact").hide();
        $("#footer--lisa").show();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#show__section--contact").click(function(){
        $("#contact").show();
        $("#home").hide();
        $("#projects").hide();
        $("#about").hide();
        $("#footer--lisa").show();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    // $(document).ready(function(){
    //     $("#homepage").hide();
    //   $("#projects").hide();
    //   $("#about").hide();
    //       $("#show__section--projects").click(function(){
    //         $("#projects").show();
    //           $("#about").hide();
    //           $('html, body').animate({
    //               scrollTop: $("#projects").offset().top
    //            }, 1000);
    //       });
      
        //   $("#btn__back--myTrip").click(function(){
        //       $("#firstPage").show();
        //       $('html, body').animate({
        //           scrollTop: $("#firstPage").offset().top
        //        }, 1000);
        //   });
      
        //   $(".btn__back--acc").click(function(){
        //     $("#firstPage").hide();
        //     $("#secondPage").show();
        //     $("#thirdPage").hide();
        //       $('html, body').animate({
        //           scrollTop: $("#secondPage").offset().top
        //        }, 1000);
           });