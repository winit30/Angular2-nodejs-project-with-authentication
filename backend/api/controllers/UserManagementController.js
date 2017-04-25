/**
 * UserManagementController
 *
 * @description :: Server-side logic for managing usermanagements
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createNewUser: function(req, res) {
		console.log(req.param('newUser'));

		var newUserData = req.param('newUser');

		var email = newUserData.useremail;

		    UserManagement.findOne({useremail:email}).exec(function(err, usr){
	            if (err) {
	                res.send(500, { error: "DB Error" });
	            } else if (usr) {
	                res.send(400, {error: "Username already Taken"});
	            } else {
	                UserManagement.create(newUserData).exec(function(error, user) {
		                if (error) {
		                    res.send(500, {error: "DB Error"});
		                } else {
		                    res.send(user);
		                }
	            	});
		        }
	    	});
	},

	findUsers: function(req, res) {
		UserManagement.find().exec(function(err, usr){

			if(err){
				res.json({error:err});
			}
						
					else{
						res.json(usr);
					}

		});
	}
	
};

