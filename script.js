$(document).ready(function () {
  // Highlight gallery on hover
  $('.gallery').mouseover(function () {
    $(this).css('background-color', '#e0f7fa');
  }).mouseout(function () {
    $(this).css('background-color', '#f4f4f4');
  });

  // Toggle contact section on About click with easing
  $('.about').click(function () {
    $('.contact').slideToggle(1000, 'easeOutBounce');
  });

  // Initial animations
  $('.about').fadeOut(500).fadeIn(1000);
  $('.gallery').hide().show("slide", { direction: "left" }, 1000);

  // Smooth scroll for nav links
  $('nav a').click(function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if (target !== "#") {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 20
      }, 800, 'easeInOutExpo');
    }
  });

  // Zoom effect on images
  $('.gallery img').hover(
    function () {
      $(this).css({
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out'
      });
    },
    function () {
      $(this).css({
        transform: 'scale(1)',
        transition: 'transform 0.3s ease-in-out'
      });
    }
  );
});
