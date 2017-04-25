/**
 * Pan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/*
module.exports = {
tableName: 'pan',
  attributes: {
   userid: {
		type:'string'
	},
	firstname: {
		type: 'string'
	},
	middlename: {
		type: 'string'
	},
	lastname: {
		type: 'string'
	},
	gender: {
		type: 'string',
		enum: ['Male', 'Female']
	},
	dob: {
		type: 'string'
	},
	pan: {
		type: 'string',
		primaryKey: true,
        required: true,
        regex: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
	},
	fathername: {
		type: 'string'
	},
	maritalstatus: {
		type: 'string'
	},
	primary: {

		type: 'boolean'
	}
  	

  }
};
*/

module.exports = {
tableName: 'pan',
  attributes: {
  	mainuserid:'STRING',
  	pannumber:'STRING',
	date:'STRING',
	email: 'STRING',
	firstname:'STRING',
	middlename:'STRING',
	lastname:'STRING',
	gender:'STRING',
	fathername:'STRING',
	mobilenumber:'STRING',
	maritalstatus:'STRING',
	primary:'BOOLEAN'
  }
};


