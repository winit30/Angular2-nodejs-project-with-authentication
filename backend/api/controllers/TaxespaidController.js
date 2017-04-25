/**
 * TaxespaidController
 *
 * @description :: Server-side logic for managing taxespaids
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createTaxPaid : function(req, res){
		var fin_Year = req.param('empfinYear');
		var user_id = req.param('empuserid');
		var pan1 = req.param('emppan');
		var nonSalaryTdsTan_Deductor = req.param('empnonSalaryTdsTanDeductor');
		var nonSalaryTdsNameOf_Deductor = req.param('empnonSalaryTdsNameOfDeductor');
		var nonSalaryTdsTax_Deducted = req.param('empnonSalaryTdsTaxDeducted');
		var nonSalaryTds_ClaimedThisYear = req.param('empnonSalaryTdsClaimedThisYear');
		var nonSalaryTds_FinanYear = req.param('empnonSalaryTdsFinanYear');
		var saleOfImmPropTds_PanOfPropBuyer = req.param('empsaleOfImmPropTdsPanOfPropBuyer');	
		var saleOfImmProp_TdsNameOfPropBuyer = req.param('empsaleOfImmPropTdsNameOfPropBuyer');	
		var saleOfImmProp_TdsTotTaxDeduct = req.param('empsaleOfImmPropTdsTotTaxDeduct');	
		var saleOfImmProp_TdsClaimedThisYear = req.param('empsaleOfImmPropTdsClaimedThisYear');	
		var saleOfImmProp_TdsFinanYear = req.param('empsaleOfImmPropTdsFinanYear');	
		var selfTaxes_AmountPaid = req.param('empselfTaxesAmountPaid');	
		var selfTaxes_DateOfAmountPaid = req.param('empselfTaxesDateOfAmountPaid');	
		var selfTaxes_BSRCode = req.param('empselfTaxesBSRCode');	
		var selfTaxes_ChallanNumber = req.param('empselfTaxesChallanNumber');	
		
		var taxPaidData = {
			finYear:fin_Year,
			pan:pan1,
			userid:user_id,
			nonSalaryTdsTanDeductor:nonSalaryTdsTan_Deductor,
			nonSalaryTdsNameOfDeductor:nonSalaryTdsNameOf_Deductor,
			nonSalaryTdsTaxDeducted:nonSalaryTdsTax_Deducted,
			nonSalaryTdsClaimedThisYear:nonSalaryTds_ClaimedThisYear,
			nonSalaryTdsFinanYear:nonSalaryTds_FinanYear,
			saleOfImmPropTdsPanOfPropBuyer:saleOfImmPropTds_PanOfPropBuyer,
			saleOfImmPropTdsTotTaxDeduct:saleOfImmProp_TdsTotTaxDeduct,
			saleOfImmPropTdsClaimedThisYear:saleOfImmProp_TdsClaimedThisYear,
			selfTaxesAmountPaid:selfTaxes_AmountPaid,
			selfTaxesDateOfAmountPaid:selfTaxes_DateOfAmountPaid,
			selfTaxesBSRCode:selfTaxes_BSRCode,
			selfTaxesChallanNumber:selfTaxes_ChallanNumber,
			saleOfImmPropTdsNameOfPropBuyer:saleOfImmProp_TdsNameOfPropBuyer,
			saleOfImmPropTdsFinanYear:saleOfImmProp_TdsFinanYear,
		};
		
		var search_criteria = {
			userid:taxPaidData.userid,
			finYear:taxPaidData.finYear,
			pan:taxPaidData.pan
		}
		
		Taxespaid.find(search_criteria).exec(function(err,result){
				if (err){
					res.json({error:err})
				}
				if(result.length === 0){
					Taxespaid.create(taxPaidData).exec(function(err, data){
						if (err){
							res.json({error:err});
						}
						if(data === undefined){
							res.json({created:true})
						}
						else{
							res.json({message:'Created',CreatedTaxPaidData:data})
						}

					});
				}
				else{
					var perid = result[0].id;
					Taxespaid.update({id:perid},taxPaidData).exec(function afterwards(err, updated)
						{
							if (err) {
								res.json({error:err});
							}
						res.json({message:'updated',PersonalData:updated})
					});
				
				
				}
				
		});
	},
	
	
	findByUser : function(req, res){
		var UID = req.param('empuserid');
		
		Taxespaid.find({'userid':UID}).exec(function(err,result){
			if (err){
				res.json({error:err})
			}
			if (result.length === 0){
				res.json({nodataFound:true})
			}
			else{
				res.json({DataFound:true,result:result})
			}
		});
	},

	findByPan : function(req, res){
		var panNumeber = req.param('emppan');
		
		Taxespaid.find({'pan':panNumeber}).exec(function(err,result){
			if (err){
				res.json({error:err})
			}
			if (result.length === 0){
				res.json({nodataFound:true})
			}
			else{
				res.json({DataFound:true,result:result})
			}
		});
	},

	findByFinacialYear : function(req, res){
		var finyear = req.param('empfinYear');
		
		Taxespaid.find({'finYear':finyear}).exec(function(err,result){
			if (err){
				res.json({error:err})
			}
			if (result.length === 0){
				res.json({nodataFound:true})
			}
			else{
				res.json({DataFound:true,result:result})
			}
		});
	}	
	
};