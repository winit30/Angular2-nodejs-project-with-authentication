var bcrypt = require('bcryptjs');

module.exports = {
  tableName: 'systemuser',
  attributes: {
	username: {
		type: 'string'
	},
	email: {
		type: 'string',
		index:true
	},
	password: {
		type: 'string'
	},
	active: {
		type: 'boolean',
        defaultsTo: true,
      	index: true
	},
	date: {
		type:'date',
		default:Date.now
	},
	roleid:{
		type:'string'
	},
	token: {
		type:'string',
		default:"Logged Out"
	}
  },

  beforeCreate: function(user, cb) {
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                sails.log(err);
                cb(err);
            } else {
                user.password = hash;
                sails.log(hash);
                cb(null, user);
            }
          });
      });
  }
};