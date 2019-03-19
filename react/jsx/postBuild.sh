#!/bin/bash
#sed -i 's/static/react-build\/static/gI' build/index.html
#sed -i 's/static/react-build\/static/gI' build/static/js/main.*.chunk.js
rm -rf /home/devendra/deven/dpgit/somePhp/react-build/*
mv build/* /home/devendra/deven/dpgit/somePhp/react-build
rm -rf build
