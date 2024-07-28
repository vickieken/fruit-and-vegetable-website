$(document).ready(function() {
    $(".fa-bars").click(()=> {
        $(".fa-bars").addClass("hide");
        $(".fa-times").addClass("show");
        $("ul").addClass("show-nav");
    });

    $(".fa-times").click(()=> {
        $(".fa-times").removeClass("show");
        $(".fa-bars").removeClass("hide");
        $("ul").removeClass("show-nav");
    })

    $(".nav-link").click(()=> {
        $(".fa-times").removeClass("show");
        $(".fa-bars").removeClass("hide");
        $("ul").removeClass("show-nav");
    })


});