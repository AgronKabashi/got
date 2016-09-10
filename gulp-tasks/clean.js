"use strict";

import config from "../config.json";
import del from "del";

export default () => {
  return del.sync([config.build.folder]);
};