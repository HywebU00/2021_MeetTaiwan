/*------------------------------------*/
///// sticky progressBar /////
/*------------------------------------*/
// get offset top 監控對象
// var topper = ($(".mt-content").prop("scrollHeight") / 3) * 2;(監控超過頁面一半)

if ($(".member-heading") != null) {
  var topper = $(".member-heading").offset().top;
  var contentHeight = $(".mt-content").height();
  // scroll event
  window.onscroll = function () {
    scroller();
  };

  $(window).resize(function () {
    scroller();
  });
}

// sticky function
function scroller() {
  var contentWidth = $(".mt-content").width();
  $(".member-heading").css("width", contentWidth);
  $(".member-heading").toggleClass(
    "sticky-fixed",
    $(window).scrollTop() >= topper
  );
  if ($(window).scrollTop() > contentHeight - $(".member-heading").height()) {
    $(".member-heading").removeClass("sticky-fixed");
  }
}
