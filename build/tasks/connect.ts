/// <reference path="../ambient.d.ts" />

import * as gulp from "gulp";
import * as connect from "gulp-connect";
import {Paths} from "../paths";

gulp.task("connect", () => {
   connect.server({
       root: Paths.WebRoot,
       livereload: true,
       port: 8888,
       https: false
   }); 
});