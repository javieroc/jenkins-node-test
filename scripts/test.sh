#!/bin/sh

cd ~/jenkins-node-test
pm2 stop all
npm test
exit
