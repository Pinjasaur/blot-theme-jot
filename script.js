/* This template tag is replaced by JS when this file is rendered */
{{{appJS}}}

// Thanks CodePen:
// https://blog.codepen.io/2016/11/17/anchor-links-post-headers/
(function() {

  function slugify (text) {
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  }

  var $headers = $(".entry :header:not(h1:first-child)");

  $headers.each(function(index) {

    var $el = $(this);

    $el.addClass("header-has-hash");

    var idToLink = slugify($el.text()) + '-' + index;

    var $headerLink = $("<a />", {
      html: "#",
      class: "header-hash",
      href: "#" + idToLink,
      id: idToLink
    });

    $el.prepend($headerLink);

  });

}());
