# [gulp-recipe](https://github.com/PGS-dev/gulp-recipe-loader)-rev [![Dependency Status][depstat-image]][depstat-url]
[![NPM][npm-image]][npm-url]

Recipe for distribution files reving using gulp-rev and gulp-rev-replace.

**Note** that all rev trickery still applies. All your reved paths have to be referenced with paths relative to its bases.
If your files are renamed but references are not replaced, you need to correct your base in sources.

## Configuration
### Recipe specific
#### config.rev.replaceInExtensions
> default: `['.js', '.css', '.html', '.json']`

Configure revReplace to modify files only with given extensions

### Order
#### config.order.rev
> default: 1000

#### config.order.revReplace
> alias: config.order.rev
> default: 1000 (from alias)

## Api
### Used Hooks
#### pipes.processJsRev

Apply rev on js files in build.

#### pipes.processCssRev

Apply rev on css files in build.

#### pipes.postBuildRev

Apply rev on all additional build files.

#### pipes.postMergeRevReplace

Apply revReplace on full build output.

[npm-url]: https://npmjs.org/package/gulp-recipe-rev
[npm-image]: https://nodei.co/npm/gulp-recipe-rev.png?downloads=true
[depstat-url]: https://david-dm.org/PGS-dev/gulp-recipe-rev
[depstat-image]: https://img.shields.io/david/PGS-dev/gulp-recipe-rev.svg?style=flat