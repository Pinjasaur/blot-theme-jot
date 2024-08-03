#!/usr/bin/env bash

# Strict settings
set -o errexit
set -o pipefail
set -o nounset

# "Magic" variables
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
__base="$(basename "${__file}" .sh)"

if ! command -v wget >/dev/null 2>&1; then
  echo "wget is not installed"
  exit 1
fi

domain=${1:-}

if [ -z "$domain" ]; then
  echo "Usage: $__base.sh <domain>"
  exit 1
fi

output="$__dir/$domain.$__base.txt"

wget --spider --recursive --no-parent --no-verbose --output-file="$output" "$domain" >/dev/null 2>&1

errors=$(grep -c "404 Not Found" "$output" || true)
echo "Number of 404 errors found: $errors"
[[ $errors == 0 ]] && rm "$output"
