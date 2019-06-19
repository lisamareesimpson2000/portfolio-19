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
           });