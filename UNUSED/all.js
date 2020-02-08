$(window).on("load", function() {
    $("#wait").delay(500).fadeOut("slow");
    $("svg").delay(500).fadeOut("slow")
});

(function() {
    if( window.innerWidth > 700 ) {
        
function modalClose() {
  $(document).click(function(event) {
    if (!$(event.target).closest(".drawing>img").length) {
      $("body")
        .find("#modal")
        .empty()
        .hide();
    }
  });
}
function openAll(a) {
  $(".column").scrollTop(0);
  $("#een, #drie").hide();
  $("#twee")
    .load(a + ".html")
    .css("width", "calc(100% - 6em)")
    .show();
}
function openThree(a) {
  $(".column").scrollTop(0);
  $("#drie")
    .load(a + ".html")
    .css("width", "50%")
    .show();
  $("#een")
    .load("xp4realdesktop.html #drawing1")
    .css("width", "20%")
    .show();
  $("#twee")
    .load("xp4realdesktop.html #letter")
    .css("width", "20%")
    .show();
}
function openTwo(a) {
  $(".column").scrollTop(0);
  $("#een")
    .load("loadinfo.html #" + a)
    .css("width", "20%")
    .show();
  $("#twee")
    .load("loads.html #" + a)
    .css("width", "20%")
    .show();
}
function openFull(b) {
  $(".column").scrollTop(0);
  $("#twee")
    .load("loads.html #" + b)
    .css("width", "50%")
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .css("width", "20%")
    .show();
}
function openTiny(b) {
  $(".column").scrollTop(0);
  $("#twee")
    .load("loads.html #" + b)
    .css("width", "20%")
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .css("width", "20%")
    .show();
}

function openMid(z) {
  $(".column").scrollTop(0);
  $("#twee")
    .load("loads.html #" + z)
    .css("width", "40%")
    .show();
  $("#drie").hide();
  $("#een")
    .css("width", "20%")
    .show();
}

$(document).ready(function() {
  $("h3 > a").click(function() {
    $(this)
      .parent("h3")
      .siblings("p")
      .toggle();
  });

  $(".dropbtn").click(function() {
    $("#arc").hide();
    $(this)
      .siblings(".dropdown-content")
      .toggle();
    $(this)
      .parent()
      .siblings()
      .children(".dropdown-content")
      .hide();
    $(this)
      .parent()
      .siblings()
      .children(".dropdown-content")
      .children("dropdown")
      .hide();
    $(this)
      .children("a")
      .addClass("dropped");
  });
  $(".topnav .dropbtn").click(function() {
    $(".sidenav").hide();
  });

  $(".topnav > a").click(function() {
    $(".side:visible").toggle();
  });
  $(".side > a").click(function() {
    $(this)
      .siblings()
      .children(".dropdown-content")
      .hide();
  });

  $("#naam").hover(
    function() {
      $("#bio").show();
      $("#naam").html("شروین شیخ رضائی");
    },
    function() {
      $("#bio").hide();
      $("#naam").html("SHERVIN SHEIKH REZAEI");
    }
  );

  $("a").click(function() {
    $(this).addClass("dropped");
    $("a")
      .not(this)
      .removeClass("dropped");
  });

  $("#arc").click(function() {
    $("#letter,.drawing").css("opacity", 0.5);
  });

  $(".drawing > img").click(function() {
    $("#modal").show();
    $("#modal").html('<img src="' + $(this).attr("src") + '" width="100%">');
    modalClose();
  });
});

    } else {
       $(document).ajaxStart(function() {
  $("#wait").css("display", "block");
});
$(document).ajaxComplete(function() {
  $("#wait").css("display", "none");
});

function openAll(a) {
  window.scrollTo(0, 0);
  $("#een, #drie").hide();
  $("#twee")
    .load(a + ".html")
    .show();
}
function openThree(a) {
  window.scrollTo(0, 0);
  $("#een")
    .load(a + ".html")
    .show();
  $("#drie")
    .load("xp4realdesktop.html #drawing1")
    .show();
  $("#twee")
    .load("xp4realdesktop.html #letter")
    .show();
}
function openTwo(a) {
  window.scrollTo(0, 0);
  $("#een")
    .load("loadinfo.html #" + a)
    .show();
  $("#twee")
    .load("loads.html #" + a)
    .show();
}
function openFull(b) {
  window.scrollTo(0, 0);
  $("#twee")
    .load("m-loads.html #" + b)
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .show();
}
function openTiny(b) {
  window.scrollTo(0, 0);
  $("#twee")
    .load("loads.html #" + b)
    .show();
  $("#drie").hide();
  $("#een")
    .load("loadinfo.html #" + b)
    .show();
}

function openMid(z) {
  $("#twee")
    .load("m-loads.html #" + z, function() {
      window.scrollTo(0, 400);
    })
    .show();
  $("#drie").hide();
  $("#een").show();
}

$(document).ready(function() {
  $(".dropbtn").click(function() {
    $("#arc").hide();
    $(this)
      .siblings(".dropdown-content")
      .toggle();
    $(this)
      .parent()
      .siblings()
      .children(".dropdown-content")
      .hide();
    $(this)
      .parent()
      .siblings()
      .children(".dropdown-content")
      .children("dropdown")
      .hide();
    $(this)
      .children("a")
      .addClass("dropped");
  });
  $(".topnav .dropbtn").click(function() {
    $(".sidenav").hide();
  });

  $(".topnav > a").click(function() {
    $(".side:visible").toggle();
  });
  $(".side > a").click(function() {
    $(this)
      .siblings()
      .children(".dropdown-content")
      .hide();
  });

  $("#naam").hover(
    function() {
      $("#bio").show();
      $("#naam").html("شروین شیخ رضائی");
    },
    function() {
      $("#bio").hide();
      $("#naam").html("SHERVIN SHEIKH REZAEI");
    }
  );

  $("a").click(function() {
    $(this).addClass("dropped");
    $("a")
      .not(this)
      .removeClass("dropped");
  });

  $("#arc").click(function() {
    $("#letter,.drawing").css("opacity", 0.5);
  });

  window.onscroll = function() {
    myScroll();
  };
  function myScroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      $(".nest").hide();
    }
  }
});
  
    }
})();