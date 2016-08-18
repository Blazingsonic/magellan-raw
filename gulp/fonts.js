'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  console.log(dirs.fonts);

  gulp.task('fonts', function () {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*'))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(path.join(dest)));
  });
}
