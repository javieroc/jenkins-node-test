#!/bin/sh

cd ~/jenkins-node-test
git pull
npm install
pm2 restart all
exit
