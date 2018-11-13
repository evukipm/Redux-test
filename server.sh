#!/bin/bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

nvm use 8

echo "Cleaning dist directory"
rm -rf dist
echo "Building new app"
npm run dev