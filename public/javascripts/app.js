setTimeout(function () {
  fadeOutPreloader(document.getElementById('preloader'), 69);
}, 1500);

$(document).ready(function () {
  $(window).on('beforeunload', function () {
    window.scrollTo(0, 0);
  });

  particlesJS.load('landing', 'assets/particles.json', function () { });

})