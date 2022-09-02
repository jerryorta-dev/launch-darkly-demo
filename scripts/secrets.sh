#!/bin/bash

rm -rf libs/any-shared/secrets/src/lib
rsync -av --exclude '.git' --exclude '.gitignore' --exclude '.idea' --exclude 'scripts' --exclude 'package.json' ../$1/* libs/any-shared/secrets/src/lib
