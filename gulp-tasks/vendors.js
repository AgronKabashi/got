"use strict";

import addsrc from "gulp-add-src";
import browserify from "browserify";
import buffer from "vinyl-buffer";
import concat from "gulp-concat";
import config from "../config.json";
import gulp from "gulp";
import source from "vinyl-source-stream";
import uglify from "gulp-uglify";

export default () => {
  const stream = browserify({debug: false});

  config.vendor.requirables.forEach(name => stream.require(name));

  return stream
    .bundle()
    .pipe(source(config.build.vendorFile))
    .pipe(buffer())
    // Append the polyfills etc
    .pipe(addsrc(config.vendor.staticFiles))
    .pipe(uglify())
    .pipe(concat(config.build.vendorFile))
    .pipe(gulp.dest(config.build.folder));
};