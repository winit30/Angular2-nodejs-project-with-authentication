/**
 * Taxespaid.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		nonSalaryTdsTanDeductor : 'integer',
		nonSalaryTdsNameOfDeductor : 'string',
		nonSalaryTdsTaxDeducted : 'integer',
		nonSalaryTdsClaimedThisYear : 'integer',
		nonSalaryTdsFinanYear		:'string',
		saleOfImmPropTdsPanOfPropBuyer : 'string',
		saleOfImmPropTdsNameOfPropBuyer : 'string',
		saleOfImmPropTdsTotTaxDeduct		: 'integer',
		saleOfImmPropTdsClaimedThisYear		: 'integer',
		saleOfImmPropTdsFinanYear			: 'string',
		selfTaxesAmountPaid				: 'integer',
		selfTaxesDateOfAmountPaid		: 'Date',
		selfTaxesBSRCode				: 'integer',
		selfTaxesChallaninteger			: 'integer',
		finYear					: 'string',
		userid: {
			type:'string'
		},
		pan: {
			type:'string'
		}
	}	
};

