/**
 * PersonaldetailsController
 *
 * @description :: Server-side logic for managing personaldetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createPersonalDetails : function(req, res){

      // required this for UI integration
      /* var perDetails = req.param("perDetails");*/

      	console.log(req.param('permanentInfo'));

      	var permanentInfo = req.param('permanentInfo');

		var first_name = permanentInfo.permanentfirstname;
		var middle_name = permanentInfo.permanentmiddlename;
		var last_name = permanentInfo.permanentlastname;
		var dob = permanentInfo.permanentdob;
		var gender = permanentInfo.permanentGender;
		var pan = permanentInfo.permanentpannumb;
		var fatherName = permanentInfo.permanentfather_name;
		var userid = permanentInfo.userid;

		var PersonalDetailsData = {
			pan:pan,
			userid:userid,
			firstname:first_name,
			middlename:middle_name,
			lastname:last_name,
			fathername:fatherName,
			gender:gender,
			dob:dob
		};

   
		var search_criteria = {
			userid:PersonalDetailsData.userid,
			pan:PersonalDetailsData.pan
		}
		
		Personaldetails.find(search_criteria).exec(function(err,result){
				if (err){
					res.json({error:err})
				}
				if(result.length === 0){
					Personaldetails.create(PersonalDetailsData).exec(function(err, data){
						if (err){
							res.json({error:err});
						}
						if(data === undefined){
							res.json({message:undefined})
						}
						else{

							console.log(data);
							res.json({message:'created',PersonalData:data})
						}

					});
				}
				else{
					sails.log("inside update first 111"+result[0].id);
					var perid = result[0].id;
					PersonalDetailsData.id = perid;
					sails.log("id is--->"+perid);
					sails.log("per id--->"+PersonalDetailsData.id);
	
				
				Personaldetails.update(search_criteria,PersonalDetailsData).exec(function afterwards(err, updated)
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
		
		Personaldetails.find({'userid':UID}).exec(function(err,result){
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
		
		Personaldetails.find({'pan':panNumeber}).exec(function(err,result){
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
		
		Personaldetails.find({'finYear':finyear}).exec(function(err,result){
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

