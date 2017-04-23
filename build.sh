#!/usr/bin/env bash
rsync -va -progress  ./src-lib/* ./lib
babel src-lib --out-dir lib
babel src-lib/index.js --out-file  lib/index.js
