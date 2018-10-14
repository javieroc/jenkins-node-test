#!/bin/sh

cd /home/connan/jenkins-node-test
pm2 stop all
npm test
exit
