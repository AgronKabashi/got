"use strict";

import config from "../config.json";
import connect from "gulp-connect";
import gulp from "gulp";
import runSequence from "run-sequence";

export default () => {
  gulp.watch([config.src.markup, ...config.src.static], () => runSequence("copy", "connect"));
  gulp.watch(config.src.scripts, () => runSequence("scripts", "connect"));
  gulp.watch(config.src.css, () => runSequence("sass", "connect"));
};