/// <reference path="../custom_typings/ambient.d.ts" />

import * as gulp from "gulp";
import * as connect from "gulp-connect";
import {Paths} from "../paths";

/* Local web server and live reload */
gulp.task("connect", () => {
   connect.server({
       root: Paths.DistDirectory,
       livereload: true,
       port: 8888,
       https: false
   }); 
});