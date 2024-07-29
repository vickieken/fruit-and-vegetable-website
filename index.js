$(document).ready(function() {
    $(".fa-bars").click(()=> {
        $(".fa-bars").toggleClass("fa-times");
        $("ul").toggleClass("show-nav");
    });

    $(".nav-link").click(()=> {
        $(".fa-times").addClass("fa-bars");
        $(".fa-times").removeClass("fa-times");
        $("ul").removeClass("show-nav");
    })


});