/**
 * PdfController
 *
 * @description :: Server-side logic for managing pdfs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	download : function(req, res){
		//res.download(sails.config.appPath+ '/rentreceipt.pdf');
		console.log(sails.config.appPath+ '/rentreceipt.pdf');
		return res.location(sails.config.appPath+ '/rentreceipt.pdf');
	}
};

