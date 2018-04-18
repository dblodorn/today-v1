const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const schedule = require('node-schedule');
const sassMiddleware = require('express-sass-middleware');
const browserify = require('browserify-middleware');
const path = require('path');
const pickImages = require('./js/server/pick-images');
const listImages = require('./js/server/list-images');
const config = require('./config.json');
const moment = require('moment');
const gulp = require('gulp');
require('./gulpfile');

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'http://localhost:3001';
const APP_ID = process.env.APP_ID || 'today_sebastian-pardo';
const IMG_COUNT = process.env.IMG_COUNT || 5;
const INTERVAL = process.env.INTERVAL || 240000;

// APP SETUP
app.set('view engine', 'pug');
app.use("/public", express.static(__dirname + '/public'));
app.get('/dist/app.js', browserify(__dirname + '/js/client/index.js'));
app.get('/dist/app.css', sassMiddleware({ 
  file: './sass/app.sass',
  watch: true,
  precompile: true, 
  outputStyle: 'compressed',
  indentedSyntax: true, 
}));

// STATIC DIRECTORY
app.imgDir = '/images';
app.use(app.imgDir, express.static(__dirname + app.imgDir));

// INIT VALUES
app.todayImages = pickImages(config.imgs.display, IMG_COUNT);
app.time = moment().format('kkmmss');
app.switchTime = INTERVAL;

// SOCKET FUNCTIONS
app.imageArray = (broadcast) => {
  app.todayImages = pickImages(config.imgs.display, IMG_COUNT);
  io.emit(broadcast, app.todayImages);
}

const sced1 = schedule.scheduleJob('* * * * * *', () => {
  app.time = moment().format('kkmmss');
  io.emit('TIME_STAMP', app.time);
  if (app.time == app.switchTime) {
    gulp.start('image-pick');
  }
  if (app.time == (app.switchTime + 2)) {
    app.imageArray('IMAGE_SWAP');
  }
})

// APP ROUTES
app.get('/', (req, res, socket) => {
  app.todayImages = listImages(config.imgs.display, IMG_COUNT);
  console.log(app.todayImages)
  res.render('index', {
    images: app.todayImages,
    time: app.time,
    url: URL,
    appId: APP_ID,
    imgCount: IMG_COUNT
  })
})

// SERVER
server.listen(PORT, () => {
  console.log(`Running Today on port ${PORT}`);
})
