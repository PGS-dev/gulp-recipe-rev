'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    config.rev = _.defaults(config.rev || {}, {
        replaceInExtensions: ['.js', '.css', '.html', '.json']
    });

    return _.merge({
        order: {
            rev: 1000,
            revReplace: 1000
        }
    }, {
        order: {
            revReplace: config.order.rev
        }
    },config);
};