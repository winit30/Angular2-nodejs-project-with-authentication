/**
 * Documents.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
       name: { type: 'string'},
       type: { type: 'string'},
       // source amazon s3 or local stroage
       source: { type: 'string'},
       filePath: { type: 'string'},
       userid: { type: 'integer'},
       isArchived: { type: 'boolean'},
       
  }
};

