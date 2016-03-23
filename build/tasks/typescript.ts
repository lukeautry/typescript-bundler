import * as gulp from "gulp";
import * as ts from "gulp-typescript";
import * as connect from "gulp-connect";
import {Paths} from "../paths";

const tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", () => {
    return gulp.src(Paths.TypeScriptSrc)
        .pipe(ts(tsProject))
        .pipe(gulp.dest(`${Paths.WebRoot}/scripts`))
        .pipe(connect.reload());;
});