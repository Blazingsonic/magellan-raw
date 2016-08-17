'use strict';

import pages from 'gulp-gh-pages';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {

  gulp.task('gh-pages', function() {
    return gulp.src('./build/**/*')
      .pipe(pages());
  });
}
