import * as gulp from "gulp";
import * as connect from "gulp-connect";
import * as sass from "gulp-sass";
import * as sourcemaps from "gulp-sourcemaps";
import * as cleanCss from "gulp-clean-css";
import {Paths} from "../paths";

gulp.task("sass", () => {
    gulp.src(Paths.StylesSrc)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(Paths.StylesDist))
        .pipe(connect.reload());
});