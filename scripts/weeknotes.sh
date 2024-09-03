#!/usr/bin/env bash

yyyyww="$(date +%Y-W%W)"

# TODO: consider just putting in drafts so it matches the normal flow?
mkdir -p "$(dirname "$0")"/../../../posts/weeknotes
if ! [[ -w "$(dirname "$0")"/../../../posts/weeknotes/"${yyyyww,,}".md ]]; then
  {
    echo '---'
    echo 'date: TODO FIXME'
    echo "tags: weeknotes"
    echo "tldr: Weeknotes for $yyyyww."
    echo "link: /${yyyyww,,}"
    echo 'draft: true'
    echo -e '---\n'
    echo -e "# Weeknotes for $yyyyww\n"
    echo 'TODO: fix the date, remove draft'
  } > "$(dirname "$0")"/../../../posts/weeknotes/"${yyyyww,,}".md
fi

echo "$yyyyww"
