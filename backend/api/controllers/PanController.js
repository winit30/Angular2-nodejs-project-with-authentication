/**
 * PanController
 *
 * @description :: Server-side logic for managing pans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createPan:function(req , res) {

				
			var data = req.param('pan');

  			Pan.find({mainuserid:data.mainuserid}).exec(function(err,pan){

						if(err) {
							console.log(err);
						}
							
						else if(pan.length < 5) {

							  Pan.findOne({pannumber:data.pannumber}).exec(function(err , pan) { 

											if(err){ console.log('1 ' + data);

												res.send(500, { error: "DB Error" });

											} else if(pan) { 

												res.send(400, { error: "Pan already exists" });
						 
											} else {

												Pan.create(data).exec(function( err, pan) {

						       						 if(err) { 
						       						 	console.log('1 ' + data);
						       						 	console.log(err);

						       						 	res.send(500, { error: "DB Error" });
						       						 }

						        					 else {

						        					 	res.send(pan);
						        					 }

						      					 });
											}

								});

						} else {

							res.send(500, { error: "Can't add more pans" });
							
						}

				});

	},

	findPans:function(req,res){


		var userid = req.param('userid')

  		Pan.find({mainuserid:userid})
				.exec(function(err,pan){

					if(err)
						res.json({error:err});
					else{
						sails.log(pan);
						res.json(pan);
					}

				});

	}
};

