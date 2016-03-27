import * as gulp from "gulp";
import * as connect from "gulp-connect";
import {Paths} from "../paths";

gulp.task("watch", ["connect"], () => {
    gulp.watch(Paths.HtmlSrc, ["html"]);
    gulp.watch(Paths.TypeScriptSrc, ["typescript"])
    gulp.watch(Paths.StylesSrc, ["sass"]);
});

gulp.task("html", () => {
    gulp.src(Paths.HtmlSrc)
        .pipe(connect.reload());
});