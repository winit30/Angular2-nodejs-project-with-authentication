/**
 * TasksController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createTask:function(req,res){

		 sails.log('<<<<<<<-------------------TasksController().createTask---------starting--->>>>>>');
		var data=req.param('task');
		sails.log("data test"+data);
			
			// Creatin the task 
		Tasks.create(data).exec(function (err, record){
					if (err){ 
							res.json({error:err});
							sails.log('<<<<<<<-------------------TasksController().createTask-----------inside error----->>>>>>');
						}	
        				else{
							sails.log('<<<<<<<-------------------TasksController().createTask-----------inside create----->>>>>>');	
							res.json({message:'Created',taskData:record})
							}

      				});
		sails.log('<<<<<<<-------------------TasksController().createTask-----------ending----->>>>>>');				 
				
}
}

