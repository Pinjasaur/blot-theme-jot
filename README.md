# [Blot][blot] Theme: Jot

This is my [personal theme][blog] for [Blot][blot]. It's a fork of the Index
theme.

## Features

- Light and dark theme(!!)
- Navigational keyboard shortcuts (h, j, k, and l)
- Hash `id`s for each header
- `is-active` class for active menu links
- Normalized styling across browsers (removes horizontal scrollbar)

## Screenshots

![Index Light](.github/index-light.png)

![Index Dark](.github/index-dark.png)

![Post Light](.github/post-light.png)

![Post Dark](.github/post-dark.png)

## Usage: Development & Deployment

Changes I make directly to this codebase modify a "staging" template I have
enabled in Blot. To "deploy", I use the [`deploy.sh`](/deploy.sh) script to move
files into an adjacent directory that is the "live" template within Blot. This
allows me to use template preview URLs to view any changes before they impact
live visitors, in an ideal world.

## License

[Blot][blot], including the base Index theme, is licensed by
[David Merfield][david] under [CC0][cc0].

Modifications by myself, [Paul Esch-Laurent][me], are licensed under [MIT][mit].

[blog]: https://paul.af
[blot]: https://blot.im
[cc0]: https://github.com/davidmerfield/Blot/blob/master/LICENSE
[david]: https://github.com/davidmerfield
[me]: https://github.com/Pinjasaur
[mit]: https://pinjasaur.mit-license.org
