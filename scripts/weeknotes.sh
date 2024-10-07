#!/usr/bin/env bash
#
# Creates weeknotes file.

yyyyww="$(date +%Y-W%W)"

mkdir -p "$(dirname "$0")"/../../../drafts/-
if ! [[ -w "$(dirname "$0")"/../../../drafts/-/"${yyyyww,,}".md ]]; then
  {
    echo '---'
    echo 'date: TODO FIXME'
    echo "tags: weeknotes"
    echo "tldr: Weeknotes for $yyyyww."
    echo "link: /${yyyyww,,}"
    echo -e '---\n'
    echo -e "# Weeknotes for $yyyyww\n"
    echo 'TODO: fix the date'
  } > "$(dirname "$0")"/../../../drafts/-/"${yyyyww,,}".md
fi

echo "$yyyyww"
