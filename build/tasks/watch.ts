import * as gulp from "gulp";
import * as connect from "gulp-connect";
import {Paths} from "../paths";

gulp.task("watch:prod", ["build:prod", "connect"], () => {
    gulp.watch(Paths.IndexSrc, ["html"]);
    gulp.watch(Paths.TypeScriptSrc, ["typescript:prod"])
    gulp.watch(Paths.StylesSrc, ["sass"]);
});

gulp.task("watch:dev", ["build:dev", "connect"], () => {
    gulp.watch(Paths.IndexSrc, ["html"]);
    gulp.watch(Paths.TypeScriptSrc, ["typescript:dev"])
    gulp.watch(Paths.StylesSrc, ["sass"]);
});