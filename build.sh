#!/usr/bin/env bash
rm -rf lib
export NODE_ENV=production
#rsync -va -progress  ./src-lib/* ./lib
./node_modules/.bin/minifier  ./src-lib/* ./lib
babel src-lib --out-dir lib
babel src-lib/index.js --out-file  lib/index.js
./node_modules/.bin/webpack --config webpack.build.lib.config.js --progress
