/**
 * Tasks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 tableName: 'tasks',
  attributes: {
   assigneeuserid: {
		type:'integer'
	},
	name: {
		type: 'string'
	},
	description: {
		type: 'string'
	},
	status: {
		type: 'string',
		enum: ['Started', 'InProgress', 'Completed','Canceled']
	},
	isArchived: {
		type: 'boolean'
	},
	assignedDataTime:{
		type: 'datatime'
	}

  }
};

