'use strict';

/**
 * `project-populate` middleware
 */

const populate = {
  categories: {
    fields: ['name', 'slug']
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In project-populate middleware.');

    ctx.query.populate = populate;

    await next();
  };
};
