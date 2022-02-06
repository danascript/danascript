const keywords = [
    'REST APIs',
    'GraphQL',
    'jQuery',
    'ES6',
    'HTML',
    'CSS',
    'CSS Modules',
    'SCSS',
    'Bootstrap',
    'TailwindCSS',
    'Vue.js',
    'React.js',
    'VanillaJS',
    'JavaScript',
    'Node.js',
    'Express',
    'MongoDB',
    'Next.js',
    'Nuxt.js',
    'Apollo',
    'Figma',
    'Photoshop',
    'Cypress',
    'Jenkins',
    'Travis CI',
];

const shuffledKeywords =() => {
  return keywords
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
}

$(document).ready(function() {
    const shuffled = shuffledKeywords();
    shuffled.forEach(word => $('#keywords').append(`
      <span class="m-1 m-md-2">${word}</span>
    `))
  
})


//Animate the progress bars on scroll
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function() {
  if (window.innerWidth < 700) {
    $('.animate--first').addClass('animate--first__transform');

    $('.animate--second').addClass('animate--second__transform');
  }
})

$(window).on('resize scroll', function () {
  if (window.innerWidth < 700) {  
    $('.animate--first').addClass('animate--first__transform');

    $('.animate--second').addClass('animate--second__transform');
  }
  
  $('.animate--first').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('animate--first__transform');
    }
  });

  $('.animate--second').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('animate--second__transform');
    }
  });
});

//Smooth scroll from nav
const $root = $('html, body');

$('a[href^="#"]').click(function() {
    const href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top - 60
    }, 800);

    return false;
});

$('.navbar-toggler').click(function() {
  $('#navbar-toggler').toggleClass('fa-angle-up')
  $('#navbar-toggler').toggleClass('fa-angle-down')
})

// Navbar transparency:
window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > window.innerHeight / 2 ? 'add': 'remove'
  ]('scrolled');
});

$('#scroll').click(function() {
    $root.animate({
        scrollTop: $('#tech').offset().top - 60
    }, 800);

    return false;
});