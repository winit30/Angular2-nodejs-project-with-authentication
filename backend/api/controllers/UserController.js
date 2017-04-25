/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');


module.exports = {
	checkMail:function(req,res)
	{
		var email = req.param('empMailId');
		sails.log("mailid is---->"+email);

		// Lookup the user in the database

		User.find({email:email})
				.exec(function(err,user){

					if(err)
						res.json({error:err});
					if(user === undefined)
						res.json({notFound:true});
					else
						res.json({notFound:false,userData:user});

				});

},

	createUser:function(req,res){

		var newUser = req.param("newUser");
		
		var name = newUser.username;
		var email = newUser.email;
		var usertype = newUser.usertype;
		var password = newUser.passwords.password;

		console.log(password);

		User.findOne({email:email}).exec(function(err, usr){
			if (err) {
				res.send(500, { error: "DB Error" });
			} else if (usr) {
				res.send(400, {error: "Username already Taken"});
			} else {
				var hasher = require("password-hash");
				password = hasher.generate(password);
				
				User.create({name: name, email:email, usertype:usertype , password: password}).exec(function(error, user) {
					if (error) {
						res.send(500, {error: "DB Error"});
					} else {
						res.send(user);
					}
				});
			}
		});

	},

	login:function(req,res){

			var uniqueId = this.uniqueId();

	    	var user = req.param("user");
	    	
	    	var email = user.email;
		    var password = user.password;
		    
		    User.findOne({email:email}).exec(function(err, user) {
		        if (err) {
		        } else {
		            if (user) {

		                var hasher = require("password-hash");

		                if (hasher.verify(password, user.password)) {

	                		var id = user.id;
							var token = user.email + uniqueId + uniqueId + uniqueId;

							User.update({id:id},{token:token}).exec(function(err, user){
							  if (err) {
							    res.send(500, { error: "DB Error" });
							    return;
							  } else {
							  	res.send(user);

							  }
							});
							
		                } else {
		                    res.send(400, { error: "Wrong Password" });
		                }
		            } else {
		                res.send(404, { error: "User not Found" });
		            }
		        }
		    });

	},
	
	logout: function(req, res) {

		var token = req.param("token");

		console.log(token);

		User.update({token:token},{token:"Logged Out"}).exec(function(err, user) {

		  if (err) {

			res.send(500, { error: "DB Error" });
			return;

		  } else if(user[0]){

				res.send(200, {success: "User Logged out successFully" });

			} else {
				res.send(404, {error: "User not Found" });
			}

		});
	},
	
	uniqueId: function (){
			var n=Math.floor(Math.random()*11);
			var k = Math.floor(Math.random()* 1000000);
			var m = n+k;
			return m+k+n;
		},

	checktoken: function(req, res){

		var token = req.param("token");

		User.findOne({token:token}).exec(function(err, user){

		  if (err) {

			res.send(500, { error: "DB Error" });
			return;

		  } else {
			res.send(user);
			console.log(user); 
		  }
		});

	},

	






};
