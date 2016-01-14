#!/bin/bash

app=$1

if [ -z "$app" ]; then
  echo "No app specified"
  exit
fi

for device in "3.5" "4" "4.7" "5.5" "android"; do
  for (( i = 1; i <= 5; i++ )); do
    echo Capturing /build/$app/$device-$i.png
    ./phantomjs-1.9.2/bin/phantomjs ./phantomjs-1.9.2/examples/rasterize.js "http://localhost:3000/?app="$app"&device="$device"&index="$i ./build/$app/$device-$i.png
  done
done
