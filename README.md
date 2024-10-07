# [Blot][blot] Theme: Jot

This is my [personal theme][blog] for [Blot]. It's a fork of the Index theme.

## Features

- Light and dark themes(!!)
- Navigational keyboard shortcuts (<kbd>h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, and <kbd>l</kbd>)
- Hash `id`s for each header
- `is-active` class for active menu links
- Outlined footnotes & refs when `:target`ed
- Canonicalized URLs
- OpenGraph image `<meta>` from thumbnails
- Display last-modified date in entries
- [instant.page] for just-in-time preloading
- `/tags` page to list all tags
- Non-permalink RSS `<guid>`s
- [CSS hyphenation](http://clagnut.com/blog/2395)
- [Deploy script](/scripts/deploy.sh) (plus more, see [#scripts](#scripts))

## Screenshots

![Blog Light](/screenshots/blog-light.png)

![Blog Dark](/screenshots/blog-dark.png)

![Post Light](/screenshots/post-light.png)

![Post Dark](/screenshots/post-dark.png)

## [Scripts](/scripts)

- [`404.sh`](/scripts/404.sh)

    Check for internal 404 hyperlinks.

- [`deploy.sh`](/scripts/deploy.sh)

    Changes I make directly to this codebase modify a "staging" template I have
    enabled in Blot. To "deploy", I use the [`deploy.sh`](/scripts/deploy.sh)
    script to move files into an adjacent directory that is the "live" template
    within Blot. This allows me to use template preview URLs to view any changes
    before they impact live visitors, in an ideal world.

- [`screenshots.sh`](/scripts/screenshots.sh)

    Generate the screenshots featured in this README.

- [`weeknotes.sh`](/scripts/weeknotes.sh)

    Generate (and print to stdout) the ISO 8601 compliant weeknotes file.

- [`ytd.sh`](/scripts/ytd.sh)

    Get the current YTD post count.

## License

[Blot], including the base Index theme, is licensed by
[David Merfield][david] under [CC0].

Modifications by myself, [Paul Esch-Laurent][me], are licensed under [MIT].

[blog]: https://paul.af
[Blot]: https://blot.im
[CC0]: https://github.com/davidmerfield/Blot/blob/master/LICENSE
[david]: https://github.com/davidmerfield
[me]: https://github.com/Pinjasaur
[MIT]: https://pinjasaur.mit-license.org
[instant.page]: https://instant.page
