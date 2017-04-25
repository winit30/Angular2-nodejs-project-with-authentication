/**
 * TaxfilingController
 *
 * @description :: Server-side logic for managing taxfilings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


createTaxfiling:function(req,res){

	

		//var email = req.param('empMailId')
 var data = {
 	        primaryBankAccount: 1234,
			primaryBankIFSC:"IFSC0001",
             primaryBankType: "Savings",
             primaryBankName: "ICICI",
             finYear : '2017',
             userid : '123456',
             pan:'APPPK3710C'
         }



	Taxfiling.create(data).exec(function(err,taxfiling){
       						 if(err)
           					res.json({error:err});
        					 if(taxfiling === undefined)
         					res.json({created:true})
        					 else{
        					 	console.log('taxfiling id is---->'+taxfiling.id);
					var bankdata = [{
					 	          otherBankAccount		:'123456',
							otherBankIFSC : 'IFSC0002',
							otherBankType : 'Current',
							OtherBankName		: 'HDFC',
							otherbanks : 	taxfiling.id	
					         },{
					 	          otherBankAccount		:'1234567',
							otherBankIFSC : 'IFSC0003',
							otherBankType : 'Current',
							OtherBankName		: 'HDFC',
							otherbanks : 	taxfiling.id	
					         }]

        					 	Otherbankinfo.create(bankdata).exec( function(err,otherbankinfo){
        					 		
        					 		console.log("success data+"+otherbankinfo);
        					 		});

         					res.json({created:true,taxfilingData:taxfiling})

         					}

      					 });

	},


  /**
   * `TaxfilingController.userinfo()`
   */
  userinfo: function (req, res) {
    return res.json({
      todo: 'userinfo() is not implemented yet!'
    });
  }
};

