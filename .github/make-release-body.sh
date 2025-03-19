#!/bin/sh

echo "Upstream release: https://github.com/gorhill/uBlock/releases/tag/$TAG"
echo
echo "Hashes:"
echo '```'
sha256sum *.crx
echo '```'
