"use strict";

import babelify from "babelify";
import browserify from "browserify";
import buffer from "vinyl-buffer";
import config from "../config.json";
import gulp from "gulp";
import packageJSON from "../package.json";
import plumber from "gulp-plumber";
import source from "vinyl-source-stream";
import uglify from "gulp-uglify";

import through from "through2";

const bundleScripts = stream => {
  return stream
    .transform(babelify, {
      presets: config.browserify.presets,
      plugins: config.browserify.plugins
    })
    .bundle()
    .on('error', function (err) {
      console.log(err);
      this.emit("end");
    })
    .pipe(source(config.build.appFile))   // Note: Streaming vinyl file object is created
    .pipe(buffer())                       // so we need convert it back to a buffer here
    //.pipe(uglify())
    .pipe(gulp.dest(config.build.folder));
};

let devDependencies;

export default () => {
  const stream = browserify(config.src.entrypoint, {
    debug: true,
    paths: [`./${config.src.folder}`]
  });

  // WTF FFS
  // Exclude external dependencies
  Object.getOwnPropertyNames(packageJSON.dependencies)
    .concat(config.vendor.requirables)
    .forEach(dep => stream.external(dep));

  return bundleScripts(stream);
};