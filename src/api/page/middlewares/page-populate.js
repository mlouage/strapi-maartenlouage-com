'use strict';

/**
 * `page-populate` middleware
 */

const populate = {
  seo: {
    populate: {
      shareImage: {
        populate: '*'
      }
    }
  },
  blocks: {
    on: {
      'shared.media': {
        populate: {
          'file': {
            populate: '*'
          }
        }
      },
      'shared.quote': {
        populate: '*'
      },
      'shared.rich-text': {
        populate: '*'
      },
      'shared.slider': {
        populate: {
          'files': {
            populate: '*'
          }
        }
      },
    }
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In page-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};
