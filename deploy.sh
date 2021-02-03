#!/usr/bin/env bash

set -e

#DEPLOY_DIR="${DEPLOY_DIR:-../live}"
DEPLOY_DIR="${DEPLOY_DIR:-../jot-2}"

echo "👋 Prepping to deploy to '${DEPLOY_DIR}'."

die() {
  echo "🚨 [FATAL] $*" 1>&2
  exit 1
}

[[ -d "${DEPLOY_DIR}" ]] || die "'${DEPLOY_DIR}' doesn't exist!"

# use ./ to avoid names with dashes causing issues
# https://github.com/koalaman/shellcheck/wiki/SC2035
rm "${DEPLOY_DIR}"/*.{html,rss,txt,js,xml,css} &&
cp ./*.{html,rss,txt,js,xml,css} "${DEPLOY_DIR}" &&
jq '.name += " (Live)"' < package.json > "${DEPLOY_DIR}"/package.json

echo "🎉 Deployment successful."
