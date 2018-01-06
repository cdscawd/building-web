

$(function() {
  $(window).on('scroll', function(){
    var top_height = $(window).scrollTop();
    if (top_height > 60) {
      $('.navbar').addClass('navbar-fixed-top')
      $('.scrollup').removeClass('hide').addClass('show')
    } else {
      $('.navbar').removeClass('navbar-fixed-top')
      $('.scrollup').removeClass('show').addClass('hide')
    }
  })
  $('.scrollup').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 'slow')
  })
})





