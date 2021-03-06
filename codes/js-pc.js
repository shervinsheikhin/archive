function modalClose() {
    $(document).click(function (o) {
        $(o.target).closest(".drawing>img,.drawing>video").length || $("body").find("#modal").empty().hide();
    });
}
function openAll(o) {
    $(".column").scrollTop(0),
        $("#een, #drie").hide(),
        $("#twee")
            .load(o + ".html")
            .css("width", "calc(100% - 6em)")
            .show();
}
function openThree(o) {
    $(".column").scrollTop(0),
        $("#drie")
            .load(o + ".html")
            .css("width", "50%")
            .show(),
        $("#een").load("index.html #drawing1").css("width", "20%").show(),
        $("#twee").load("index.html #letter").css("width", "20%").show();
}
function openTwo(o) {
    $(".column").scrollTop(0),
        $("#een")
            .load("loadinfo.html #" + o)
            .css("width", "20%")
            .show(),
        $("#twee")
            .load("loads.html #" + o)
            .css("width", "20%")
            .show();
}
function openFull(o) {
    $(".column").scrollTop(0),
        $("#twee")
            .load("loads.html #" + o)
            .css("width", "50%")
            .show(),
        $("#drie").hide(),
        $("#een")
            .load("loadinfo.html #" + o)
            .css("width", "20%")
            .show();
}
function openTiny(o) {
    $(".column").scrollTop(0),
        $("#twee")
            .load("loads.html #" + o)
            .css("width", "20%")
            .show(),
        $("#drie").hide(),
        $("#een")
            .load("loadinfo.html #" + o)
            .css("width", "20%")
            .show();
}
function openMid(o) {
    $(".column").scrollTop(0),
        $("#twee")
            .load("loads.html #" + o)
            .css("width", "50%")
            .show(),
        $("#drie").hide(),
        $("#een").css("width", "20%").show();
}
$(document).ajaxStart(function () {
    $("#wait").css("display", "block");
}),
    $(document).ajaxComplete(function () {
        $("#wait").css("display", "none");
    }),
    $(document).ready(function () {
        $("h3 > a").click(function () {
            $(this).parent("h3").siblings("p").toggle();
        }),
            $(".dropbtn").click(function () {
                $("#arc").hide(),
                    $(this).siblings(".dropdown-content").toggle(),
                    $(this).parent().siblings().children(".dropdown-content").hide(),
                    $(this).parent().siblings().children(".dropbtn").removeClass("dropped"),
                    $(this).parent().siblings().children(".dropdown-content").children("dropdown").hide(),
                    $(this).children("a").addClass("dropped"),
                    $(this).parent(".dropdown").siblings("a").removeClass("dropped"),
                    $(this).siblings("a").removeClass("dropped"),
                    $(this).siblings(".side").children("a:first-child").click(),
                    $(this).siblings(".side").children("a").eq(0).addClass("dropped");
            }),
            $("#archive").mouseenter(function () {
                $("#arc").click();
            }),
            $(".topnav .dropbtn").click(function () {
                $(".sidenav").hide();
            }),
            $(".topnav > a").click(function () {
                $(".side:visible").toggle();
            }),
            $(".side > a").click(function () {
                $(this).siblings().children(".dropdown-content").hide();
            }),
            $("#naam").hover(
                function () {
                    $("#bio").show(), $("#naam").html("شروین شیخ رضائی");
                },
                function () {
                    $("#bio").hide(), $("#naam").html("SHERVIN SHEIKH REZAEI");
                }
            ),
            $("a").click(function () {
                $(this).addClass("dropped"), $(this).siblings("a").not(this).removeClass("dropped"), 
                $(this).siblings(".dropdown").children(".dropbtn").removeClass("dropped"), 
                $(".right > a, .topnav > a").not(this).removeClass("dropped");

            }),
            $(".drawing > img").click(function () {
                $("#modal").show(), $("#modal").html('<img src="' + $(this).attr("src") + '" width="100%">'), modalClose();
            }),
            $(".drawing >video").click(function () {
                $("#modal").show(), $("#modal").html('<video autoplay loop type="mp4" src="' + $(this).attr("src") + '" height="90%"></video>'), modalClose();
            });
    });
