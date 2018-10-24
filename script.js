/* This template tag is replaced by JS when this file is rendered */
{{{appJS}}}

/*!
 *
 * J O T
 *
 * Custom scripts below:
 *
 */

(function() {

  // Thanks CodePen:
  // https://blog.codepen.io/2016/11/17/anchor-links-post-headers/
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

  // Add class for active menu links
  $('.header a.menu')
    .filter((i, el) => $(el).attr('href') === location.pathname)
    .addClass('is-active')

  var $theme = $('.js-theme')
  var $shortcuts = $('.js-shortcuts')
  var $html = $('html')

  // Initial CTA values
  if (localStorage.getItem('theme')) {
    $theme.text('Theme: Dark')
  } else {
    $theme.text('Theme: Light')
  }

  if (localStorage.getItem('shortcuts')) {
    $shortcuts.text('Shortcuts: Enabled')
  } else {
    $shortcuts.text('Shortcuts: Disabled')
  }

  // Handle theme change
  $theme.on('click', function (event) {
    event.preventDefault()

    if (localStorage.getItem('theme')) {
      localStorage.removeItem('theme')
      $html.removeAttr('data-theme')
      $theme.text('Theme: Light')
    } else {
      localStorage.setItem('theme', 'dark')
      $html.attr('data-theme', 'dark')
      $theme.text('Theme: Dark')
    }
  })

  // Handle shortcut change
  $shortcuts.on('click', function (event) {
    event.preventDefault()

    if (localStorage.getItem('shortcuts')) {
      localStorage.removeItem('shortcuts')
      $shortcuts.text('Shortcuts: Disabled')
    } else {
      if (confirm(
        'Enable shortcuts?\n\n' +
        'h - newer post(s)\n' +
        'j - scroll down\n' +
        'k - scroll up\n' +
        'l - older post(s)'
      )) {
        localStorage.setItem('shortcuts', true)
        $shortcuts.text('Shortcuts: Enabled')
      }
    }
  })

  // Handle shortcut key presses
  $(window).on('keydown', function (event) {
    // Bail if not a shortcut
    if (!isShortcut(event.which))
      return

    // Enable shortcuts?
    if (!localStorage.getItem('shortcuts'))
      if (confirm(
        'Enable shortcuts?\n\n' +
        'h - newer post(s)\n' +
        'j - scroll down\n' +
        'k - scroll up\n' +
        'l - older post(s)'
      )) {
        localStorage.setItem('shortcuts', true)
        $shortcuts.text('Shortcuts: Enabled')
        return
      }

    // Verify they're actually enabled
    if (localStorage.getItem('shortcuts'))
      handleShortcut(event.which)
  })

  // h, j, k, or l
  function isShortcut (key) {
    var shortcuts = [72, 74, 75, 76]
    return shortcuts.indexOf(key) > -1
  }

  function handleShortcut (key) {
    switch (key) {
      // h: newer post(s)
      case 72:
        if ($('.js-newer').length)
          location.href = $('.js-newer').attr('href')
      break
      // j: scroll down
      case 74:
        window.scrollBy({
          top: 100,
          left: 0,
          behavior: 'smooth'
        })
      break
      // k: scroll up
      case 75:
        window.scrollBy({
          top: -100,
          left: 0,
          behavior: 'smooth'
        })
      break
      // l: older post(s)
      case 76:
        if ($('.js-older').length)
          location.href = $('.js-older').attr('href')
      break
    }
  }

  // For the luls
  console.log(
    '%cpaul.af',
    'display: inline-block; padding: .5rem; background-color: #000; color: #fff; border-radius: .25rem; font-family: monospace;'
  )

}());
