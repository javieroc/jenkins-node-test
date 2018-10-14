#!/bin/sh

cd /home/connan/jenkins-node-test
pm2 stop all
npm test
pm2 start index.js
exit
