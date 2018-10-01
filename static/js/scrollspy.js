$(document).ready(function() {
  console.log("document is ready")
  var element = '.inner-shadow'

  /*
   * $(element).attr("data-spy", "scroll")
   * $(element).attr("data-target", "#TableOfContents")
   */
  // $(element).attr("style", "position: relative; overflow-y: scroll; height: 100%;")

  // $('#TableOfContents').attr("style", "position: fixed; left: 0; max-width: 200px;")
  /*
   * $('#TableOfContents').addClass("navbar")
   * $('#TableOfContents > ul').addClass("nav navbar-pills")
   * $('#TableOfContents > ul > li').addClass("nav-item")
   * $('#TableOfContents > ul > li > ul').addClass("nav navbar-pills")
   * $('#TableOfContents > ul > li > ul > li').addClass("nav-item")
   */
  $('#TableOfContents a').addClass("nav-link")


/*
 *   $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
 *     console.log("scrollspy has been triggered")
 *   })
 *
 */

  $(element).scrollspy({
    target: '#TableOfContents'
  })

  $('[data-spy="scroll"]').each(function () {
    var spy = $(this).scrollspy('refresh')
    console.log("$spy: " + spy)
  })


})
