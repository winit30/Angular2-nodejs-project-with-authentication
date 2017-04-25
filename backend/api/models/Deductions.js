/**
 * Deductions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
inv80C : 'integer',
	intEarnedOnSavingBnk80TTA : 'integer',
	charitableDon80G : 'integer',
	medPremium80D : 'integer',
	medSeniorCitizen80D : 'boolean',
	medInsPremiumParents80D : 'integer',
	medPolicyHoldSeniCitizens80D : 'boolean',
	invRajivGanEqu80CCG : 'integer',
	intHigherEduLoan80E : 'integer',
	empCont80CCD1	:	'integer',
	empCont80CCD2	:	'integer',
	dedRentPerMonth80GG : 'integer',
	totNoOfMonth80GG : 'integer',
	medTreatCost80DDB : 'integer',
	ageOfPerson80DDB	: 'integer',
	dedAmount80QQB		: 'integer',
	dedAmount80RRB		: 'integer',
	cont80GGA			: 'integer',
	cont80GGC			: 'integer',
	dedExemptProfit80JJA	: 'integer',
	dedDiabled80DD			: 'integer',
	dedDisability80U		: 'integer',
	finYear					: 'string',
	userid: {
		type:'string'
	},
	pan: {
		type: 'string'
	}
  }
};

