$(document).ready(function() {
  var element = '.inner-shadow'

  $('#TableOfContents a').addClass("nav-link")

  $(element).scrollspy({
    target: '#TableOfContents'
  })

  $('[data-spy="scroll"]').each(function () {
    var spy = $(this).scrollspy('refresh')
    console.log("$spy: " + spy)
  })
})
