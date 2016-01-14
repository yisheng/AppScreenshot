#!/bin/bash

for device in "3.5" "4" "4.7" "5.5" "android"; do
  for (( i = 1; i <= 5; i++ )); do
    ./phantomjs-1.9.2/bin/phantomjs ./phantomjs-1.9.2/examples/rasterize.js "http://localhost:3000/?app="$1"&device="$device"&index="$i ./build/$1/$device-$i.png
  done
done
