#!/bin/sh

pm2 stop all
npm test
pm2 start index.js
exit
