/**
 * UserManagement.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
tableName: 'usermanagement',

  attributes: {
  	user_dashboard:'BOOLEAN',
	user_document:'BOOLEAN',
	useremail:'STRING',
	usermobile:'INTEGER',
	username:'STRING',
	usertype:'STRING',
  }
};

