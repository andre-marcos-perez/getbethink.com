function nav_relocate() {

  var window_top = $(window).scrollTop();
  var div_top = $('#nav-anchor').offset().top;
  if (window_top > div_top) {
    $('#nav').removeClass('nav-offset-on');
    $('#nav').addClass('nav-offset-off');
    $('#nav-anchor').height($('#nav').outerHeight());
  } else {
    $('#nav').addClass('nav-offset-on');
    $('#nav').removeClass('nav-offset-off');
    $('#nav-anchor').height(0);
  }
}

$(function() {

  $(window).scroll(nav_relocate);
  nav_relocate();
});
