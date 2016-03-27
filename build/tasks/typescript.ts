import * as streamqueue from "streamqueue";
import * as gulp from "gulp";
import * as ts from "gulp-typescript";
import * as connect from "gulp-connect";
import * as concat from "gulp-concat";
import * as sourcemaps from "gulp-sourcemaps";
import * as uglify from "gulp-uglify";
import {Paths} from "../paths";

const tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", () => {
    return streamqueue({objectMode: true}, getModuleLoader(), getCompiledTypeScript(), getBootstrapCode())
            .pipe(concat("bundle.js"))
            .pipe(gulp.dest(`${Paths.WebRoot}/scripts`))
            .pipe(connect.reload());
});

function getCompiledTypeScript() {
    return gulp.src([Paths.TypeScriptSrc, Paths.VendorSrc])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(uglify());
}

function getModuleLoader() {
    return gulp.src(Paths.SystemJsFile); 
}

function getBootstrapCode() {
    return gulp.src(Paths.BootstrapSrc);
}