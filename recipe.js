'use strict';
var path = require('path');

/**
 * Recipe for distribution files reving
 *
 * @config rev.replaceInExtensions
 */
module.exports = function ($, config, sources) {
    // lazy load rev modules on first usage
    function rev() {
        return $.rev();
    }

    function revReplace() {
        return $.revReplace({replaceInExtensions: config.rev.replaceInExtensions});
    }

    return {
        /**
         * @hooks pipes.processJs* file reving
         * @hooks pipes.processCss* file reving
         * @hooks pipes.postBuild* file reving
         * @hooks pipes.postMerge* rev replace
         */
        pipes: {
            processJsRev: [config.order.rev, $.lazypipe().pipe(rev)],
            processCssRev: [config.order.rev, $.lazypipe().pipe(rev)],
            postBuildRev: [config.order.rev, $.lazypipe().pipe(rev)],
            postMergeRevReplace: [config.order.revReplace, $.lazypipe().pipe(revReplace)]
        }
    };
};