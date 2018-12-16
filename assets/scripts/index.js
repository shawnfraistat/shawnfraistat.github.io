'use strict'

const scrollEffects = function () {
  const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  // "about" section
  if (scrollPercent > 0.02) {
    console.log('moved past 0.1')
    $('.about-container').css('opacity', 1)
    $('.about-container').css('transform', 'translateX(300px)')
  }
  if (scrollPercent <= 0.02) {
    $('.about-container').css('opacity', 0)
    $('.about-container').css('transform', 'translateX(-300px)')
  }
  // "projects" section
  if (scrollPercent > 0.15) {
    $('.projects1').css('opacity', 1)
  }
  if (scrollPercent <= 0.15) {
    $('.projects1').css('opacity', 0)
  }
  if (scrollPercent > 0.25) {
    $('.projects2').css('opacity', 1)
    $('.projects2').css('transform', 'translateY(-10px)')
  }
  if (scrollPercent <= 0.25) {
    $('.projects2').css('opacity', 0)
    $('.projects2').css('transform', 'translateY(10px)')
  }
  if (scrollPercent > 0.40) {
    $('.projects3').css('opacity', 1)
    $('.projects3').css('transform', 'translateX(300px)')
  }
  if (scrollPercent <= 0.40) {
    $('.projects3').css('opacity', 0)
    $('.projects3').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent > 0.40) {
    $('.projects4').css('opacity', 1)
    $('.projects4').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent <= 0.40) {
    $('.projects4').css('opacity', 0)
    $('.projects4').css('transform', 'translateX(300px)')
  }
  if (scrollPercent > 0.50) {
    $('.projects5').css('opacity', 1)
    $('.projects5').css('transform', 'translateX(300px)')
  }
  if (scrollPercent <= 0.50) {
    $('.projects5').css('opacity', 0)
    $('.projects5').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent > 0.50) {
    $('.projects6').css('opacity', 1)
    $('.projects6').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent <= 0.50) {
    $('.projects6').css('opacity', 0)
    $('.projects6').css('transform', 'translateX(300px)')
  }
  // "skills" section
  if (scrollPercent > 0.75) {
    $('.skills-header').css('opacity', 1)
    $('.skills-header').css('transform', 'translateX(300px)')
  }
  if (scrollPercent <= 0.75) {
    $('.skills-header').css('opacity', 0)
    $('.skills-header').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent > 0.75) {
    $('.skills-list').css('opacity', 1)
    $('.skills-list').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent <= 0.75) {
    $('.skills-list').css('opacity', 0)
    $('.skills-list').css('transform', 'translateX(300px)')
  }
  // "contact" section
  if (scrollPercent > 0.90) {
    $('.contact-header').css('opacity', 1)
    $('.contact-header').css('transform', 'translateX(300px)')
  }
  if (scrollPercent <= 0.90) {
    $('.contact-header').css('opacity', 0)
    $('.contact-header').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent > 0.90) {
    $('.contact-list').css('opacity', 1)
    $('.contact-list').css('transform', 'translateX(-300px)')
  }
  if (scrollPercent <= 0.90) {
    $('.contact-list').css('opacity', 0)
    $('.contact-list').css('transform', 'translateX(300px)')
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
  // add event listener to implement effects on scroll
  window.addEventListener('scroll', scrollEffects)

  // call scrollEffects() once on page load, so things load in properly if they refresh when not at top of page
  scrollEffects()
})
