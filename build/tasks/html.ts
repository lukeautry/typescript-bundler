import * as gulp from "gulp";
import * as connect from "gulp-connect";
import {Paths} from "../paths";

gulp.task("html", () => {
    return gulp.src(Paths.IndexSrc)
        .pipe(gulp.dest(Paths.DistDirectory))
        .pipe(connect.reload());
});