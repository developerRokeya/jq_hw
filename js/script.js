$(document).ready(function () {
  // counter
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

$(document).ready(function () {
  // wow
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)

    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
});
//aos
$(document).ready(function () {
  // aos
  AOS.init();
});
// widgets start
// accordian
$(function () {
  $("#accordion").accordion();
});
// datepicker
$(function () {
  $("#datepicker").datepicker();
});
// autocomplete
$(function () {
  var availableTags = [
    "Apple",
    "Ant",
    "Asparagas",
    "Book",
    "ball",
    "C++",
    "Cat",
    "COt",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Ssb",
    "Ssc",
  ];
  $("#tags").autocomplete({
    source: availableTags,
  });
});
// dialog
$(function () {
  $("#dialogbox").dialog();
});
// menu
$(function () {
  $("#menu").menu();
});
// Progressbar
$(function () {
  var progressTimer,
    progressbar = $("#progressbar"),
    progressLabel = $(".progress-label"),
    dialogButtons = [
      {
        text: "Cancel Download",
        click: closeDownload,
      },
    ],
    dialog = $("#dialog").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 2000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "Start Download",
        });
      },
    }),
    downloadButton = $("#downloadButton")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "Downloading...",
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text(
        "Current Progress: " + progressbar.progressbar("value") + "%"
      );
    },
    complete: function () {
      progressLabel.text("Complete!");
      dialog.dialog("option", "buttons", [
        {
          text: "Close",
          click: closeDownload,
        },
      ]);
      $(".ui-dialog button").last().trigger("focus");
    },
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog.dialog("option", "buttons", dialogButtons).dialog("close");
    progressbar.progressbar("value", false);
    progressLabel.text("Starting download...");
    downloadButton.trigger("focus");
  }
});
// selectmenu
$(function () {
  $("#speed").selectmenu();

  $("#files").selectmenu();

  $("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

  $("#salutation").selectmenu();
});
// tabs
$(function () {
  $("#tabs").tabs();
});
// toollips
$(function () {
  $(document).tooltip();
});
//  widgets end
