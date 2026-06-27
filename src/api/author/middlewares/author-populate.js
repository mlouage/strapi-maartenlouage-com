'use strict';

/**
 * `authors-populate` middleware
 */

const populate = {
  avatar: {
    fields: '*'
  },
  articles: {
    populate: {
      'category': {
        fields: ['name', 'slug', 'description']
      },
      'cover': {
        fields: '*'
      }
    }
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In authors-populate middleware.');

    ctx.query.populate = populate;

    await next();
  };
};
