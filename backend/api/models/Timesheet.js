/**
 * Timesheet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    date :    'date',
       // status:
	//   WD = worked whole day
	//   OM = off for the morning
	//   OA = off for the afternoon
	//   OD = off the whole day
	//   CH = Commission holiday
    status: 'string',
    t1: 'float',
    t2: 'float',
    t3: 'float',
    t4: 'float',
    t4: 'float',
    comment: 'string',
    systemUserId : 'integer'
  }
};

