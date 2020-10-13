//  JQuery - Photo Gallery
//
$(document).ready(function () {

    var window_width = $(window).width();
    var main_width = $(".Main").width();
    var long_main = $(".long_main");
    var item = $(".mitem");
    var slide_number = 0;

    console.log("started");

    long_main.css("width", main_width * 9.05);
    item.css("width", long_main.width() / 9);

    $(".main_next").click(function () {
        if (slide_number < 8) {
            slide_number++

            if (slide_number == 8) {
                $(".main_next").animate({ opacity: 0 });
            } else {
                $(".main_next").animate({ opacity: 1 });
            }

            if (slide_number == 0) {
                $(".main_previous").animate({ opacity: 0 });
            } else {
                $(".main_previous").animate({ opacity: 1 });
            }

            var item_width = $(".mitem").width();
            var pixels_moved = item_width * slide_number;

            long_main.animate({
                marginLeft: -pixels_moved
            });
        }
    });

    $(".main_previous").click(function () {
        if (slide_number > 0) {
            slide_number--

            if (slide_number == 0) {
                $(".main_next").animate({ opacity: 0 });
            } else {
                $(".main_next").animate({ opacity: 1 });
            }

            if (slide_number == 8) {
                $(".main_previous").animate({ opacity: 1 });
            } else {
                $(".main_previous").animate({ opacity: 0 });
            }

            var item_width = $(".mitem").width();
            var pixels_moved = item_width * slide_number;

            long_main.animate({
                marginLeft: -pixels_moved
            });
        }
    });

    // list picture

    var window_widthl = $(window).width();
    var list_widthl = $(".List").width();
    var long_listl = $(".long_list");
    var iteml = $(".litem");
    var slide_numberl = 0;


    long_listl.css("width", list_widthl * 3.05);
    iteml.css("width", long_listl.width() / 9);

    $(".list_next").click(function () {
        if (slide_numberl < 6) {
            slide_numberl++

            if (slide_numberl == 6) {
                $(".list_next").animate({ opacity: 0 });
            } else {
                $(".list_next").animate({ opacity: 1 });
            }

            if (slide_numberl == 0) {
                $(".list_previous").animate({ opacity: 0 });
            } else {
                $(".list_previous").animate({ opacity: 1 });
            }

            var item_widthl = $(".litem").width();
            var pixels_movedl = item_widthl * slide_numberl;

            long_listl.animate({
                marginLeft: -pixels_movedl
            });
        }
    });

    $(".list_previous").click(function () {
        if (slide_numberl > 0) {
            slide_numberl--

            if (slide_numberl == 0) {
                $(".list_next").animate({ opacity: 0 });
            } else {
                $(".list_next").animate({ opacity: 1 });
            }

            if (slide_numberl == 6) {
                $(".list_previous").animate({ opacity: 1 });
            } else {
                $(".list_previous").animate({ opacity: 0 });
            }

            var item_widthl = $(".litem").width();
            var pixels_movedl = item_widthl * slide_numberl;

            long_listl.animate({
                marginLeft: -pixels_movedl
            });
        }
    });

});