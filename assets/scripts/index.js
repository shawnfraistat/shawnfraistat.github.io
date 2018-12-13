'use strict'

const scrollEffects = function () {
  const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  if (scrollPercent > 0.05) {
    console.log('moved past 0.1')
    $('.about-div').css('opacity', 1)
    $('.about-div').css('transform', 'translateX(300px)')
  }
  if (scrollPercent <= 0.05) {
    console.log('moved past 0.1')
    $('.about-div').css('opacity', 0)
    $('.about-div').css('transform', 'translateX(-300px)')
  }
}

$(() => {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, 'easeInOutExpo')
        return false
      }
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  })

  $(function () {
    $('.resume-link').EZView()
  })

  window.addEventListener('scroll', scrollEffects)
})

// create scroll effects
