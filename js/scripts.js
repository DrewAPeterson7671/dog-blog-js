$(function() {
  $("button#darkscreenmode").click(function() {
    $("body").removeClass();
    $("body").addClass("darkscreen");
  });
  $("button#lightscreenmode").click(function() {
    $("body").removeClass();
  });
});
