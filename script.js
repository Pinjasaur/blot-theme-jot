{{{appJS}}}

// Thanks to CodePen:
// https://blog.codepen.io/2016/11/17/anchor-links-post-headers/
(function() {

  function slugify (text) {
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  }

  var $headers = $(".entry :header");

  $headers.each(function(index) {

    var $el = $(this);

    var idToLink = slugify($el.text()) + '-' + index;

    var $headerLink = $("<a />", {
      html: "#",
      class: "article-header-hash",
      href: "#" + idToLink,
      id: idToLink
    });

    $el.prepend($headerLink);

  });

}());
