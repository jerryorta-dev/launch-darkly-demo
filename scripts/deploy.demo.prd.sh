#!/usr/bin/env bash

npx nx build demo --configuration=production;

cd apps/firebase;
firebase use demo-prd;

firebase deploy --only hosting;
