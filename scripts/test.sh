#!/bin/sh

cd /home/connan/jenkins-node-test
pm2 stop all
./node_modules/.bin/mocha ./test/test.js
pm2 start index.js
exit
