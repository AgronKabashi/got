"use strict";

import gulp from "gulp";
import runSequence from "run-sequence";

// Tasks
import * as tasks from "./gulp-tasks";

// Helper methods for registering tasks
const registerTask = taskName => gulp.task(taskName, tasks[taskName]);
const excludeTranspiledProperties = taskName => taskName !== "__esModule";

// Register all available tasks
Object.getOwnPropertyNames(tasks)
  .filter(excludeTranspiledProperties)
  .forEach(registerTask);

gulp.task("default", () => runSequence(
  "clean",
  [
    "copy",
    "sass",
    "scripts"
  ],
  "vendors",
  "connect",
  "watch"
));