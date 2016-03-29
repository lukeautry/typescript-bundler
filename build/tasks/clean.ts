import * as del from "del";
import * as gulp from "gulp";
import {Paths} from "../paths";

/* Clear out the dist directory */
gulp.task("clean", () => del(`${Paths.DistDirectory}/**/*`, { force: true }));