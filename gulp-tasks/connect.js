"use strict";

import config from "../config.json";
import connect from "gulp-connect";
import gulp from "gulp";

let isHosting = false;

export default () => {
  if (isHosting) {
    // Reload the page
    gulp.src(`${config.build.folder}/${config.build.appFile}`).pipe(connect.reload());
  }
  else {
    connect.server({
      root: config.build.folder,
      livereload: true
    });

    isHosting = true;
  }
};