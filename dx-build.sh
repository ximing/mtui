#!/usr/bin/env bash
rm -rf lib
rsync -va -progress  ./src-lib/* ./dxui/lib
babel src-lib --out-dir dxui/lib
babel src-lib/index.js --out-file  dxui/lib/index.js
./node_modules/.bin/webpack --config webpack.build.dx.lib.config.js --progress
