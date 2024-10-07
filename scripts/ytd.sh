#!/usr/bin/env bash
#
# Gets YTD post count.

# Strict settings
set -o errexit
set -o pipefail
set -o nounset

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is not installed"
  exit 1
fi

curl -s "https://paul.af/archives?debug=1" | jq '.archives[0].total'
