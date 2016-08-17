'use strict';

import path from 'path';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

  gulp.task('svgstore--dev', function () {
    return gulp.src(path.join(dirs.source, dirs.images, '/svg/*.svg'))
      .pipe(plugins.changed(dest))
      .pipe(svgmin({
        plugins: [{
          cleanupIDs: false
        }]
      }))
      .pipe(svgstore())
      // .pipe(gulp.dest(path.join(dirs.source, dirs.images, '/sprite')))
      .pipe(gulp.dest(path.join(dest, '/sprite')))
      // browser neu starten
      .pipe(browserSync.stream({match: '**/*.svg'}));
  });
}
