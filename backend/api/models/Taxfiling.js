/**
 * Taxfiling.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
 primaryBankAccount : 'integer',
		primaryBankIFSC : 'string',
		primaryBankType : 'string',
		primaryBankName : 'string',
		addInfoEmail		: 'string',
		addInfoSTD			: 'string',
		addInfoLandLine				: 'integer',
		addInfoMobile		: 'integer',
		addInfoIncomeTaxWardCircle				: 'string',
		addInfoAadhar			: 'integer', 
		addInfoPassport			: 'string',
		finYear					: 'string',
		userid: {
			type:'string'
		},
		pan: {
			type:'string'
		},
		otherbanks:{
      collection: "Otherbankinfo",
      via: "owner"
    },

    
  }
};

