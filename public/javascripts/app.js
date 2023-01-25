setTimeout(function () {
  fadeOutPreloader(document.getElementById('preloader'), 69);
}, 1500);


$(document).ready(function () {
  $(window).on('beforeunload', function () {
    window.scrollTo(0, 0);
  });

  particlesJS.load('landing', 'assets/particles.json', function () { });

  // Typing Text
  var element = document.getElementById('txt-rotate');
  var toRotate = element.getAttribute('data-rotate');
  var period = element.getAttribute('data-period');
  setTimeout(function () {
    new TxtRotate(element, JSON.parse(toRotate), period);
  }, 1500);

  // Inject CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '#txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);

  // Initialize AOS
  AOS.init({
    disable: 'mobile',
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
  });

  randomizeOrder();
});