module.exports = {
  apps : [{
    name: "today-dmbk",
    script: "./today-dmbk/server.js",
    watch: true,
    env: {
      "PORT": 3000,
      "URL": "http://today.dmbk.io/",
      "APP_ID": "today_sebastian-pardo",
      "IMG_COUNT": 5
    }
  }]
}