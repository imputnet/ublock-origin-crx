#!/bin/sh

echo "<?xml version='1.0' encoding='UTF-8'?>"
echo "<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>"
echo "  <app appid='$APP_ID'>"
echo "    <updatecheck codebase='$DOWNLOAD_URL' version='$VERSION' />"
echo "  </app>"
echo "</gupdate>"
