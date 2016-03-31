import * as streamqueue from "streamqueue";
import * as gulp from "gulp";
import * as ts from "gulp-typescript";
import * as connect from "gulp-connect";
import * as concat from "gulp-concat";
import * as sourcemaps from "gulp-sourcemaps";
import * as uglify from "gulp-uglify";
import * as file from "gulp-file";
import {Paths} from "../paths";

const bundleFileName = "bundle.js";
const prodParams: any = { module: "system", allowJs: true, outFile: bundleFileName };
const prodProject = ts.createProject(prodParams);
const devParams: any = { module: "system", allowJs: true };
const devProject = ts.createProject(devParams);
const getModuleLoader = () => gulp.src(Paths.SystemJsFile);
const getProdSystemConfig = () => gulp.src(Paths.SystemConfigProdSrc);
const getDevSystemConfig = () => gulp.src(Paths.SystemConfigDevSrc);
const getSystemImport = () => gulp.src(Paths.SystemImportSrc);

/*
    This builds bundle.js for the production configuration
    The bundle includes everything needed to start the app, including
    compiled TypeScript and vendor scripts
*/
gulp.task("typescript:prod", ["create-empty-js"], () => {
    return streamqueue({ objectMode: true }, getModuleLoader(), getProdSystemConfig(), getTypeScriptBundle(), getSystemImport())
        .pipe(concat(bundleFileName))
        .pipe(gulp.dest(Paths.ScriptsDist))
        .pipe(connect.reload());
});

/* This compiles TypeScript in-place for the dev configuration */
gulp.task("typescript:dev", () => {
    return compileTypeScript(devProject)
        .pipe(gulp.dest(Paths.TypeScriptDist))
        .pipe(connect.reload());
});

/*
    This builds bundle.js for the dev environment configuration
    It's static and doesn't need to be regenerated when files change, e.g. watch 
*/
gulp.task("typescript:dev:bundle", () => {
   return streamqueue({ objectMode: true}, getModuleLoader(), getDevSystemConfig(), getSystemImport())
    .pipe(concat(bundleFileName))
    .pipe(gulp.dest(Paths.ScriptsDist));
});

/* 
    SystemJS hack; since libs are bundled by TypeScript compiler, SystemJS doesn't need to import the files for real
    See src/bootstrap/_system.config.prod.js
*/
gulp.task("create-empty-js", () => {
    return file("empty.js", "", { src: true})
        .pipe(gulp.dest(Paths.ScriptsDist));
});

function compileTypeScript(project: ts.Project) {
    return gulp.src(Paths.TypeScriptSrc)
        .pipe(sourcemaps.init())
        .pipe(ts(project))
        .pipe(sourcemaps.write())
}

function getTypeScriptBundle() {
    return compileTypeScript(prodProject)
        .pipe(uglify());
}