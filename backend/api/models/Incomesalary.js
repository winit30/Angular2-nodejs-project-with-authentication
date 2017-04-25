/**
 * Incomesalary.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    incomeChargebleHead : 'integer',
	employerName : 'string',
	employerType : 'string',
	employerAddress : 'string',
	employerAddressTown :'string',
	employerAddressState : 'string',
	employerAddressPincode : 'string',
	incomeOther 	: 'integer',
	incomeExemptDividendEarned : 'integer',
	incomeExemptInterest : 'integer',
	incomeOtherMiscExempt : 'integer',
	incomeAgriGrossReceipt  : 'integer',
	expenditureOnAgri : 'integer',
	unabsorbedAgriLoss : 'integer',
	interestPaidOccupiedProperty : 'integer',
	finYearPreToComplOfConst : 'string',
	totIntPaidPreConstPeriod : 'integer',
    houseAddressBlockFlatDoor : 'string',
	houseAddressRoadStreet : 'string',
	houseAddressLocality  : 'string',
	housseAddressCity 	: 	'string',
	houseAddressStae	: 'string',
	houseAddressPincode	: 'string',
	proOwnershipPercentage : 'integer',
	finYear                 : 'string',
    userid         : 'string',
    pan         : 'string'
  }
};

