"use strict";

import config from "../config.json";
import gulp from "gulp";
import neat from "node-neat";
import sass from "gulp-sass";

export default () => {
  return gulp.src(config.src.css)
    .pipe(sass({
      includePaths: neat.includePaths
    }))
    .on('error', function (err) {
      console.log(err);
      this.emit("end");
    })
    .pipe(gulp.dest(config.build.folder));
};