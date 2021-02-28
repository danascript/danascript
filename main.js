// This is the data for the tech stack section
const techProgress = [
  {
    name: 'JavaScript',
    progress: '85',
    number: '85'
  },
  {
    name: 'ES6',
    progress: '95',
    number: '95'
  },
  {
    name: 'VueJS',
    progress: '95',
    number: '95'
  },
  {
    name: 'ReactJS',
    progress: '85',
    number: '85'
  },
  {
    name: 'NodeJS',
    progress: '70',
    number: '60'
  },
  {
    name: 'Express',
    progress: '65',
    number: '55'
  },
  {
    name: 'MongoDB',
    progress: '80',
    number: '75'
  },
  {
    name: 'Mongoose',
    progress: '75',
    number: '70'
  },
]

const menuIds = $('a.nav-link')
// This is to form the circle progress in the same section
const createCircles = () => {
  const circleDimensions = 100; // for height and width!
  const strokeWidth = 4;

  const radius = (circleDimensions / 2) - (strokeWidth /2 )
  const circumference = 2 * Math.PI * radius

  techProgress.forEach(circle => {
    let parent = document.querySelector(`.${circle.name.toLowerCase()}`);    
    let div = document.createElement("div");
    let frag = document.createDocumentFragment();
    let markup = 
      `<svg 
        width="${circleDimensions}" 
        height="${circleDimensions}" 
        viewBox="0 0 ${circleDimensions} ${circleDimensions}" 
        xmlns="http://www.w3.org/2000/svg"
      >  
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#769fe8"></stop>
          <stop offset="100%" stop-color="#244b56"></stop>
        </linearGradient>

        <circle 
          class="outer-circle" 
          cx="${circleDimensions / 2}" cy="${circleDimensions / 2}" r="${radius}" 
          fill="none" 
          stroke="#EEE"
          stroke-width="${strokeWidth}"
        ></circle>

        <circle 
          id="circle" 
          class="inner-circle circle-${circle.name.toLowerCase()}" 
          cx="${circleDimensions / 2}" cy="${circleDimensions / 2}" r="${radius}" 
          fill="none" 
          stroke="url(#gradient)" 
          stroke-linecap="round" 
          stroke-width="${strokeWidth}" 
          stroke-dasharray="${circumference} ${circumference}" 
          stroke-dashoffset="${circumference}"
        ></circle>

      </svg>
      <p class="number" data-progress="${circle.number}">${circle.number}</p>
      <h6 class="mb-1 mt-5">${circle.name}</h6>`;
    
    // assign all the attributes/children for the DOM
    div.innerHTML = markup;
    div.className = "circle--wrapper";
    parent.innerHTML = markup;
    parent.appendChild(frag);
  })
}

const animateCircles = () => {
  techProgress.forEach(circle => {
    $(`.circle-${circle.name.toLowerCase()}`).attr('stroke-dashoffset', ((2 * Math.PI * 59) * (1 - circle.progress / 100)))
  })

  $('.number').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).data('progress')
    }, {
        duration: 1400,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now) + '%');
        }
      });
  })
}

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
    // createCircles();
    animateCircles();
    $('.animate--first').addClass('animate--first__transform');

    $('.animate--second').addClass('animate--second__transform');
  }
})

$(window).on('resize scroll', function () {
  if (window.innerWidth < 700) {  
    $('.animate--first').addClass('animate--first__transform');

    $('.animate--second').addClass('animate--second__transform');
  }

  $('#circle').each(function() {
    if ($(this).isInViewport()) {        
      animateCircles();
    }
  });
  
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

createCircles();