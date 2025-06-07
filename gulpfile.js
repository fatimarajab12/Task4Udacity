import gulp from "gulp";
import shell from "gulp-shell";

gulp.task(
  "default",
  shell.task("parcel starter/index.html --open")
);

gulp.task(
  "build",
  shell.task("parcel build starter/index.html")
);
gulp.task("test", shell.task("mocha --exit"));
gulp.task('cypress', shell.task('npx cypress run'));
