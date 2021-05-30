function render_event(e) {
  // let date = new Date(e.date);
  let categories = "";
  let tags = "";
  let translations = "";
  let permalink = e.permalink || '#';
  let title = e.title;
  let image = "";
  let desc = e.timeline.desc ? atob(e.timeline.desc) : '';

  if (e.timeline.image) {
    image += `<a href="${permalink}"><img src="${e.timeline.image}" alt=""></img></a>`
  };

  e.categories.forEach(category => {
    categories += `<a class="badge badge-accent" href="${location.origin}/categories/${category}/">${category}</a>\n`;
  });

  e.tags.forEach(tag => {
    tags += `<a class="badge badge-dark" href="${location.origin}/tags/${tag}/">${tag}</a>\n`;
  });

  e.translations.forEach((translation) => {
    translations += `<a class="badge badge-info" href="${translation.permalink}">${translation.lang}</a>\n`;
  });

  let template = `
    <div class="event">
        <div class="icon">
            <strong><i class="fa fa-lg ${e.timeline.icon || 'fa-home'}"></i></strong>
        </div>
        <div class="event-details">
            <div class="event-date">
                <span class="">${e.date || new Date()}</span>
            </div>
            <div class="event-metadata">
                <div class="event-last-modified">
                    <span class="text-muted"><b>${e.lastmod || ''}</b></span>
                </div>
                ${ categories ? '<div class="event-categories">' + categories + '</div>' : ''}
                ${ tags ? '<div class="event-tags">' + tags + '</div>' : '' }
                ${ translations ? '<div class="event-translations">' + translations + '</div>' : '' }
            </div>
        </div>
        <div class="event-container">
            <div class="event-content ${e.timeline.class || 'event-content-accent'}">
                <div class="event-title">
                    <a href="${permalink}">
                        <h5 class="title">${e.title || 'Ops... There is no title for some reason. :('}</h5>
                    </a>
                </div>
                ${image ? '<div class="event-image">' + image + '</div>' : ''}
                ${ !image && desc ? '<div class="event-separator"><hr/></div>' : '' }
                ${desc ? '<div class="event-description">' + desc + '</div>' : '' }
            </div>
        </div>
    </div>
  `

  return template
}


$(document).ready(function() {
  let tags = new Set();
  let categories = new Set();
  let pages = [];

  /*
   * $('#filterModal').on('shown.bs.modal', function () {
   *   $('#filterInput').trigger('focus');
   * })
   */

  // $('#filterModal').modal('show');

  $.ajax({
    url: '/index.json',
    dataType: 'json',
    success: function( response ) {
      let data = response.data;

      $.each(data, function(idx, item) {
          pages.push(item);
      });
      Object.freeze(pages);
    },
    error: function( data ) {
      console.log( "Oh no! Error:  " + data );
    }
  });

  $('#filterModal [data-term]').click(function(event) {
    let target = event.target.innerText;
    let term = event.target.dataset.term;
    let events = "";

    let results = pages.filter(page => {
      if (term === "*") {
        return true
      }
      return page[term].includes(target)
    });

    results.forEach(result => {
      events += render_event(result);
    });

    $('#filterModal').modal('hide');

    $('.main-timeline').animate({ opacity: 0 }, "slow", function() {
      $(this).html(events);
    }).animate({ opacity: 1 }, "slow");

  });

});
