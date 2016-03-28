/// <reference path="../custom_typings/ambient.d.ts" />

import * as gulp from "gulp";

gulp.task("build", ["typescript", "sass", "html"]);