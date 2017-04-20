var $tabs = $('.nav-tabs li');
var $stars = $('.rating i');


$tabs.click(function() {
    $tabs.removeClass("active");
    $(this).addClass("active");
});


$stars.mouseover(function() {
    if ($(this).hasClass("fa fa-star-o")) {
        $(this).removeClass("fa fa-star-o");
        $(this).addClass("fa fa-star");;
    } else {
        $(this).removeClass("fa fa-star");
        $(this).addClass("fa fa-star-o");;
    }
})
