'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * author router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::author.author', {
  config: {
    find: {
      middlewares: [
        'api::author.author-populate'
      ],
    },
    findOne: {
      middlewares: [
        'api::author.author-populate'
      ]
    }
  }
});
