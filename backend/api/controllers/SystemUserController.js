/**
 * SystemUserController
 *
 * @description :: Server-side logic for managing Systemusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');


module.exports = {
	checkMail:function(req,res)
	{
		var email = req.param('empMailId');
		sails.log("mailid is---->"+email);

		// Lookup the user in the database

		SystemUser.find({email:email})
				.exec(function(err,user){

					if(err)
						res.json({error:err});
					if(user === undefined)
						res.json({notFound:true});
					else
						res.json({notFound:false,userData:user});

				});

},

	createSystemUser:function(req,res){

		sails.log('--------Inside creat user function------')
		sails.log('req values are '+req);

		//var email = req.param('empMailId')
// var data = {
// 			username:"Testing15",
//             email: "Testing15@gmail.com",
//             password: "testing15"
//         }
//var data = req.param('user');
var email1 = req.param('user_email');
var pass_word = req.param('user_password');
var user_name = req.param('user_username');
var role_data = req.param('roles');

var role_id;

//sails.log('data values are '+data);
var details;

/*var details = {
	
	username:user_name,
	password:pass_word,
	email:email1
} */

   Roles.find({rolename:role_data}).exec(function(err,roles){
							role_id = roles[0].id;
							sails.log("ROLE VALUE 1"+role_id);
								
						});

   SystemUser.find({email:email1})
				.exec(function(err,user){

					if(err){
						res.json({error:err});
					}
					if(user.length === 0){
						sails.log("user is undefined"+user);
						sails.log("ROLE VALUE 2"+role_id);
						
						var details = {
	
								username:user_name,
								password:pass_word,
								email:email1,
								roleid:role_id
						};
						
						sails.log("ROLE VALUE 3 "+details.roleid);
							
						SystemUser.create(details).exec(function(err,user){
							
							sails.log("Came inside create");
       						 if(err)
							 {
								res.json({error:err});
							 }
						 else
						 {
         					res.json({created:true,userData:user})

      					 }
						});
					}
					else{
						sails.log(user);
						res.json({created:false,userData:user});
					}
				});


	},

	login:function(req,res){

		// Get password and username from request
        var email = req.param('email');
        var password = req.param('password');

        // No username/password entered
        if(!(email && password)) {
            return res.send('No email or password specified!', 500);
        }

        // Lookup the user in the database

        SystemUser.findOne({
            email: email
        }).exec(function (err, user) {

            // Account not found
            if (err || !user) {
                return res.send('Invalid email and password combination!', 500);
            }

            // Compare the passwords
            bcrypt.compare(password, user.password, function(err, valid) {
                if(err || !valid)
                    return res.send('Invalid email and password combination!', 500)

                // The user has authenticated successfully, set their session
                req.session.authenticated = true;
                req.session.User = user;

                // Redirect to protected area
                //return res.send("SUCCESS");
                return res.json({success:true,userData:user});
            });
        });

	}

};