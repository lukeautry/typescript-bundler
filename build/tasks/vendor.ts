// somehow we need to make some node_modules accessible client-side
// obviously we don't want to do it for all node_modules, so in time figure out a more scalable way to do this
// maybe systemJS is the only thing we actually need to copy over? if so, nbd

import * as gulp from "gulp";
import {Paths} from "../paths";

gulp.task("copy-vendor", () => {
    return gulp.src("./node_modules/systemjs/dist/**/*.js")
        .pipe(gulp.dest(`${Paths.WebRoot}/scripts/vendor/systemjs`));
});
