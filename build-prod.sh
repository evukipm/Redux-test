#!/bin/sh
echo "Cleaning build directory"
rm -rf build
echo "Building new app"
webpack --env.ENV=production --config webpack.config.prod.js -p