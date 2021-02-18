#!/usr/bin/env bash
#
# Uses `capture-website` to get screenshots.
# https://github.com/sindresorhus/capture-website-cli

mkdir -p .tmp

# https://paul.af/

capture-website https://paul.af/ \
  --width=1600 --height=900 --delay=1 \
  > .tmp/index-light.png

capture-website https://paul.af/ \
  --script='localStorage.theme = "dark"; location.reload()' \
  --width=1600 --height=900 --delay=1 \
  > .tmp/index-dark.png

# https://paul.af/maple-cream

capture-website https://paul.af/maple-cream \
  --width=1600 --height=900 --delay=1 \
  --scroll-to-element=footer \
  > .tmp/post-light.png

capture-website https://paul.af/maple-cream \
  --script='localStorage.theme = "dark"; location.reload()' \
  --width=1600 --height=900 --delay=1 \
  --scroll-to-element=footer \
  > .tmp/post-dark.png
