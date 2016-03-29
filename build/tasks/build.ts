/// <reference path="../custom_typings/ambient.d.ts" />

import * as gulp from "gulp";
import * as runSequence from "run-sequence";

/* Build task for deployment */
gulp.task("build:prod", done => build(["typescript:prod", "sass", "html"], done));

/* Build task for dev environment */
gulp.task("build:dev", done => build(["typescript:dev:bundle", "typescript:dev", "sass", "html"], done));

function build(tasks: string[], done: any) {
    runSequence("clean", tasks, done)
}