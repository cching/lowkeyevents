// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require materialize.min
//= require_tree .

$(document).ready(function () {

    $('.parallax').parallax();
    // initiate parallax

    $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        $(".navbar-fixed-top").addClass("scrolled");
        $(".navbar-right").addClass("scrolled");
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-75
        }, 750, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
    // initiate loading links to activate/deactivate navbar links on click, take user to section on click
});

function onScroll(event){
    if($(document).scrollTop() > 50) {
      $(".navbar-fixed-top").addClass("scrolled");
      $(".navbar-right").addClass("scrolled");
      $(".brand-logo").addClass("scrolled");
    } else {
      $(".navbar-fixed-top").removeClass("scrolled");
      $(".navbar-right").removeClass("scrolled");
      $(".brand-logo").removeClass("scrolled");
    }
    // Transparency toggle on navbar on scroll

    var scrollPos = $(document).scrollTop();
    $('#nav-right a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 95 <= scrollPos && refElement.position().top - 95 + refElement.height() > scrollPos) {
            $('#nav-right ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}