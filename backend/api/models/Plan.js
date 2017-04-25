/**
 * Plan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      planName: {
		type: 'string',
		enum: ['Basic', 'Medium', 'Advanced','Customised']
	},
    	planCost: {type: 'float'},
    	isArchived: 'boolean',
    	dateAndTime : 'datetime',

  }
};

