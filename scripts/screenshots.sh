#!/usr/bin/env bash
#
# Uses `capture-website` to get screenshots.
# https://github.com/sindresorhus/capture-website-cli

FAILED=0
mkdir -p .tmp

# https://paul.af/

capture-website https://"${FQDN:-paul.af}"/ \
  --width=1600 --height=900 --delay=1 \
  > .tmp/index-light.png &

# --script='localStorage.theme = "dark"; location.reload()' \
capture-website https://"${FQDN:-paul.af}"/ \
  --dark-mode \
  --width=1600 --height=900 --delay=1 \
  > .tmp/index-dark.png &

# https://paul.af/maple-cream

capture-website https://"${FQDN:-paul.af}"/maple-cream \
  --width=1600 --height=900 --delay=1 \
  --scroll-to-element=footer \
  > .tmp/post-light.png &

# --script='localStorage.theme = "dark"; location.reload()' \
capture-website https://"${FQDN:-paul.af}"/maple-cream \
  --dark-mode \
  --width=1600 --height=900 --delay=1 \
  --scroll-to-element=footer \
  > .tmp/post-dark.png &

for job in $(jobs -p); do
  wait "$job" || ((FAIL+=1))
done

[[ "$FAILED" != 0 ]] && { echo "Failed: $FAILED" >&2; exit 1; }
