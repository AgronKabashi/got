"use strict";

import config from "../config.json";
import gulp from "gulp";

// Copies static files directly to the build folder
export default () => {
  return gulp.src(config.src.static)
    .pipe(gulp.dest(config.build.folder));
};