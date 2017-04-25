/**
 * DeductionsController
 *
 * @description :: Server-side logic for managing deductions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createDedution:function(req,res){
		var inv_80C = req.param('empinv80C');
		var intEarnedOn_SavingBnk80TTA = req.param('empintEarnedOnSavingBnk80TTA');
		var charitableDon_80G = req.param('empcharitableDon80G');
		var inmedPremium_80Dv80C = req.param('empmedPremium80D');
		var medSeniorCitizen_80D = req.param('empmedSeniorCitizen80D');
		var medInsPremiumParents_80D = req.param('empmedInsPremiumParents80D');
		var medPolicyHoldSeniCitizens_80D = req.param('empmedPolicyHoldSeniCitizens80D');
		var invRajivGanEqu_80CCG = req.param('empinvRajivGanEqu80CCG');
		var intHigherEduLoan_80E = req.param('empintHigherEduLoan80E');
		var empCont_80CCD1 = req.param('empempCont80CCD1');
		var empCont_80CCD2 = req.param('empempCont80CCD2');
		var dedRentPerMonth_80GG = req.param('empdedRentPerMonth80GG');
		var totNoOfMonth_80GG = req.param('emptotNoOfMonth80GG');
		var medTreatCost_80DDB = req.param('empmedTreatCost80DDB');
		var ageOfPerson_80DDB = req.param('empageOfPerson80DDB');
		var dedAmount_80QQB = req.param('empdedAmount80QQB');
		var dedAmount_80RRB = req.param('empdedAmount80RRB');
		var cont_80GGA = req.param('empcont80GGA');
		var cont_80GGC = req.param('empcont80GGC');
		var dedExemptProfit_80JJA = req.param('empdedExemptProfit80JJA');
		var dedDiabled_80DD = req.param('empdedDiabled80DD');
		var dedDisability_80U = req.param('empdedDisability80U');
		var fin_Year = req.param('empfinYear');
		var user_id = req.param('empuserid');
		var pan_no = req.param('emppan');
		
		var DedData={
			inv80C:inv_80C,
			intEarnedOnSavingBnk80TTA:intEarnedOn_SavingBnk80TTA,
			charitableDon80G:charitableDon_80G,
		    inmedPremium80Dv80C:inmedPremium_80Dv80C,
			medSeniorCitizen80D:medSeniorCitizen_80D,
			medInsPremiumParents80D:medInsPremiumParents_80D,
			medPolicyHoldSeniCitizens80D:medPolicyHoldSeniCitizens_80D,
			invRajivGanEqu80CCG:invRajivGanEqu_80CCG,
			intHigherEduLoan80E:intHigherEduLoan_80E,
			empCont80CCD1:empCont_80CCD1,
			empCont80CCD2:empCont_80CCD2,
			dedRentPerMonth80GG:dedRentPerMonth_80GG,
			totNoOfMonth80GG:totNoOfMonth_80GG,
			totNoOfMonth80GG:totNoOfMonth_80GG,
			medTreatCost80DDB:medTreatCost_80DDB,
			ageOfPerson80DDB:ageOfPerson_80DDB,
			dedAmount80QQB:dedAmount_80QQB,
			dedAmount80RRB:dedAmount_80RRB,
			dedExemptProfit80JJA:dedExemptProfit_80JJA,
			dedDiabled80DD:dedDiabled_80DD,
			dedDisability80U:dedDisability_80U,
			finYear:fin_Year,
			userid:user_id,
			pan:pan_no
			};
			
			var search_criteria = {
				userid:DedData.userid,
				finYear:DedData.finYear,
				pan:DedData.pan
			}
			
	        
			Deductions.find({finYear:fin_Year,userid:user_id,pan:pan_no}).exec(function(err,result){
				sails.log("Checking length "+result.length)
                if(err){
						res.json({error:err});
						sails.log("testing in side error")
				}		
				if(result.length === 0){
					Deductions.create(DedData).exec(function (err, record){
						if (err){ 
								res.json({error:err});
								sails.log("inside create 1 ")
							}	
        					else{
								sails.log("inside create 3 ")
								res.json({message:'Created',DeductionData:record})
							}

      					 });
						 
				}
				
				else{
					var dedid = result[0].id;
					DedData.id = dedid;
					Deductions.update(search_criteria,DedData).exec(function afterwards(err, updated)
					{

						if (err) {
							res.json({error:err});
						}
						else{
							res.json({message:'updated',DeductionData:updated})
						}	
				  });
				
				
				}
				
		});
	},
 		Deductionfind_pan:function(req,res){
			var pan_no = req.param('value_pan');
			Deductions.find({pan:pan_no}).exec(function(err,result){
				if(err)
					res.json({error:err});
				if(result.length == 0){
						res.json({message:'No Deduction record found'});
				}		
				else{
					res.json({message:'Deduction record found',DeductionData:result});
				}					
});
},
	   Deductionfind_user:function(req,res){
			var user = req.param('value_user');
			Deductions.find({userid:user}).exec(function(err,result2){
				if(err){
					res.json({error:err});
					}
				if(result2.length == 0){
					sails.log("user is undefined"+result2);
					res.json({message:'No Deduction record found'});
					}
				else{
					res.json({message:'Deduction record found',DeductionData:result2});
				}
						
});

},
         Deductionfind_finyr:function(req,res){
			var fin_yr = req.param('value_year');
			Deductions.find({finYear:fin_yr}).exec(function(err,result3){
				if(err){
					res.json({error:err});
				}
				if(result3.length == 0){
						res.json({message:'No Deduction record found'});
				}
				else{
					res.json({message:'Deduction record found',DeductionData:result3});
				}
					

					
});
},
      
}
