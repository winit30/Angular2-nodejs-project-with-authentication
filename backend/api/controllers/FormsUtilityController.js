var fs = require('fs');var HtmlDocx = require('html-docx-js');var htmltopdf = require('html-pdf');module.exports = {		form1htmltoword : function(req,res){				var from1htmlstring = FormUtility.form1String();		console.log(from1htmlstring);		var docx = HtmlDocx.asBlob(from1htmlstring,{orientation: 'portrait ', margins: {top: 220}});		var outputFile = 'form1.docx';		fs.writeFile(outputFile, docx, function(err) {		if (err) throw err;  });					}	/*form2htmltoword : function(req,res){				var from2htmstring = FormUtility.form2String();		console.log(from2htmstring);		var docx = HtmlDocx.asBlob(from2htmstring,{orientation: 'portrait ', margins: {top: 220}});		var outputFile = 'form2.docx';		fs.writeFile(outputFile, docx, function(err) {		if (err) throw err;  });					}		form4shtmltoword : function(req,res){				var from4shtmlstring = FormUtility.form4sString();		console.log(from4shtmlstring);		var docx = HtmlDocx.asBlob(from4shtmlstring,{orientation: 'portrait ', margins: {top: 220}});		var outputFile = 'form4s.docx';		fs.writeFile(outputFile, docx, function(err) {		if (err) throw err;  });					}){	form12bbhtmltopdf : function(req,res    var form12bbhtmlstring = FormUtility.form12bbString();    console.log(form12bbhtmlstring);     var fileName = '12bb'+'.pdf'     htmltopdf.create(template, options).toFile(fileName, function (err, file) {        if (err) {            return next(err);        }        sails.log('<<<<<<<-------------------UtilityController().downlod12BBPdf-----------starting pdf---------->>>>>>');        res.download(file.filename, 'rentreceipt');         sails.log('<<<<<<<-------------------UtilityController().downlod12BBPdf-----------ending pdf------------>>>>>>');    });   	}*/}