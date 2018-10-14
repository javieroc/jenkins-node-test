#!/bin/sh

cd /home/connan/jenkins-node-test
git pull
npm install
pm2 restart all
exit
