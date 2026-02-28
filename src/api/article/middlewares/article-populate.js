'use strict';

const category = require("../../category/controllers/category");

/**
 * `article-populate` middleware
 */

const populate = {
  cover: {
    fields: '*'
  },
  author: {
    fields: '*'
  },
  category: {
    fields: '*'
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
      return async (ctx, next) => {
        strapi.log.info('In article-populate middleware.');
        ctx.query.populate = populate;
        await next();
      };
    };
