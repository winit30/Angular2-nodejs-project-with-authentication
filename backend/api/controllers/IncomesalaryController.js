/**
 * IncomesalaryController
 *
 * @description :: Server-side logic for managing incomesalaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createIncome : function(req,res){
		
		var incomeChargeble_Head = req.param('incomeChargebleHead');
		var emp_Name = req.param('employerName');
		var emp_Type = req.param('employerType');
		var emp_Address = req.param('employerAddress');
		var emp_Address_Town = req.param('employerAddressTown');
		var emp_Add_State = req.param('employerAddressState');
		var emp_Add_Pin = req.param('employerAddressPincode');
		var income_Other = req.param('incomeOther');
		var incomeExempt_DividendEarned = req.param('incomeExemptDividendEarned');
		var incomeExempt_Interest = req.param('incomeExemptInterest');
		var incomeOther_MiscExempt = req.param('incomeOtherMiscExempt');
		var incomeAgriGross_Receipt = req.param('incomeAgriGrossReceipt');
		var expenditureOn_Agri = req.param('expenditureOnAgri');
		var unabsorbedAgri_Loss = req.param('unabsorbedAgriLoss');
		var interestPaidOccupied_Property = req.param('interestPaidOccupiedProperty');
		var finYearPreToComplOf_Const = req.param('finYearPreToComplOfConst');
		var totIntPaidPreConst_Period = req.param('totIntPaidPreConstPeriod');
		var houseAddressBlock_FlatDoor = req.param('houseAddressBlockFlatDoor');
		var houseAddressRoad_Street = req.param('houseAddressRoadStreet');
		var houseAddress_Locality = req.param('houseAddressLocality');
		var housseAddress_City = req.param('housseAddressCity');
		var houseAddress_State = req.param('houseAddressStae');
		var houseAddress_Pincode = req.param('houseAddressPincode');
		var proOwnership_Percentage = req.param('proOwnershipPercentage');
		var fin__Year = req.param('finYear');
		var user__id = req.param('userid');
		var pan__no = req.param('pan');
		
		var data = {
			incomeChargebleHead:incomeChargeble_Head,
			employerName:emp_Name,
			employerType:emp_Type,
		    employerAddress:emp_Address,
			employerAddressTown:emp_Address_Town,
			employerAddressState:emp_Add_State,
			employerAddressPincode:emp_Add_Pin,
			incomeOther:income_Other,
			incomeExemptDividendEarned:incomeExempt_DividendEarned,
			incomeExemptInterest:incomeExempt_Interest,
			incomeOtherMiscExempt:incomeOther_MiscExempt,
			incomeAgriGrossReceipt:incomeAgriGross_Receipt,
			expenditureOnAgri:expenditureOn_Agri,
			unabsorbedAgriLoss:unabsorbedAgri_Loss,
			interestPaidOccupiedProperty:interestPaidOccupied_Property,
			finYearPreToComplOfConst:finYearPreToComplOf_Const,
			totIntPaidPreConstPeriod:totIntPaidPreConst_Period,
			houseAddressBlockFlatDoor:houseAddressBlock_FlatDoor,
			houseAddressRoadStreet:houseAddressRoad_Street,
			houseAddressLocality:houseAddress_Locality,
			housseAddressCity:housseAddress_City,
			houseAddressStae:houseAddress_State,
			houseAddressPincode:houseAddress_Pincode,
			proOwnershipPercentage:proOwnership_Percentage,
			finYear:fin__Year,
			userid:user__id,
			pan:pan__no
         };
		
		
		var search_criteria = {
				userid:data.userid,
				finYear:data.finYear,
				pan:data.pan
		}
			
	        
		Incomesalary.find({finYear:fin__Year,userid:user__id,pan:pan__no}).exec(function(err,result){
              if(err){
					res.json({error:err});
					sails.log("testing in side error")
			 }		
			 if(result.length === 0){
				Incomesalary.create(data).exec(function (err, record){
					if (err){ 
						res.json({error:err})
					}		
        			else{
							res.json({message:'Created',CreatedSalaryData:record})
					}

      			 });
						 
			}
			else{
				var incomesalaryid = result[0].id;
				data.id = incomesalaryid;
				Incomesalary.update(search_criteria,data).exec(function afterwards(err, updated){
					if (err) {
						res.json({error:err});
				    }
				   else{
						res.json({message:'updated',UpdatedSalaryData:updated})
				   }
				});
			}
				
		});
	},

	Incomefind_pan:function(req,res){
			var pan_no = req.param('value_pan');
			Incomesalary.find({pan:pan_no}).exec(function(err,result){
				if(err){
					res.json({error:err});
				 }
				if(result.length == 0){
						sails.log("pan is undefined"+result);
						res.json({message:'No IncomeSlary record found'});
				}		
				else{
					res.json({message:'IncomeSalary record found',SalaryData:result});
				}
			});			

   },

   Incomefind_user:function(req,res){
			var user = req.param('value_user');
			Incomesalary.find({userid:user}).exec(function(err,result2){
				if(err){
					res.json({error:err});
				}
				if(result2.length == 0){
					sails.log("user is undefined"+result2);
					res.json({message:'No IncomeSlary record found'});
				}
				
				else{
					res.json({message:'IncomeSalary record found',SalaryData:result2});
				}
				
					

					
});
},
         Incomefind_finyr:function(req,res){
			var fin_yr = req.param('value_year');
			Incomesalary.find({finYear:fin_yr}).exec(function(err,result3){
				if(err){
					res.json({error:err});
				}
				if(result3.length == 0){
						sails.log("financial year is undefined"+result3);
						res.json({message:'No IncomeSlary record found'});
				}
				
					else{
						res.json({message:'IncomeSalary record found',SalaryData:result3});
					}
				

					
});
}
}
