'use strict';

/**
 * `category-populate` middleware
 */

const populate = {
  articles: {
    populate: {
      'category': {
        fields: ['name', 'slug', 'description']
      },
      'cover': {
        fields: '*'
      },
      author: {
        populate: {
          'avatar': {
            fields: ['alternativeText', 'formats'],
          }
        }
      },
    }
  },
  projects: {
    populate: {
      'categories': {
        fields: ['name', 'slug']
      },
    }
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In category-populate middleware.');

    ctx.query.populate = populate;

    await next();
  };
};
