/**
 * Purchase.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      date: { type : 'date'},
      planid: { type : 'integer'},
      year : { type: 'string'},
        // Status
        // Cancel, Upgrade,Return Filed
      status: { type: 'string'}
  }
};

