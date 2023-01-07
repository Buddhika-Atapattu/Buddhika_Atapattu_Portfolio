$(document).ready(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    var scroll_icon = $("#arrow_to_up");

    scroll_icon.click(function () {
        $(window).scrollTop(0);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#arrow_to_up").css({ "display": "flex", "bottom": "0", "opacity": "1", "position": "fixed" });
            // $("#arrow_to_up").addClass("animation-icon");
        }
        else {
            $("#arrow_to_up").css({ "opacity": "0" });
        }
    });
});

