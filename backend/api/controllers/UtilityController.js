

PDFDocument = require('pdfkit');
var wkhtmltopdf = require('wkhtmltopdf');
var HtmlDocx = require('html-docx-js');
var extract = require('extract-zip');
var fs = require('fs');
var fstream = require('fstream');
var htmltopdf = require('html-pdf');
var unzip = require('unzip2');
var path = require('path');




module.exports = {

  itruploadFindAll:function(req,res){


        Itrupload.find().exec(function(err,result){
                   if(err)
                    res.json({error:err});
                    else
                  res.json({itruploadData:result})

                 });

		},
  
  
 
  
  downlodRentReceiptPdf:function(req,res){
	  
	  var rentData = req.param('data');
	  
  sails.log('<<<<<<<-------------------UtilityController().downlodRentReceiptPdf-----------inside pdf method------>>>>>>');
  
  
  /*const doc = new PDFDocument()
  let filename = 'samplefile'
  // Stripping special characters
  filename = encodeURIComponent(filename) + '.pdf'
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  const content = 'sample testing'
  doc.y = 300
  doc.text(content, 50, 50)
  doc.pipe(res)
  doc.end()*/
   /* var htmlTemplate = '<h1>Test</h1>'+
    '<p>Hello world</p>';*/
	
	
var resultList = [];
var date = new Date("10/14/2015");
var endDate = new Date("03/13/2016");


  sails.log('<<<<<<<-------------------UtilityController().downlodRentReceiptPdf-----------Testing 2------>>>>>>');


var months = endDate.getMonth() - date.getMonth()
       + (12 * (endDate.getFullYear() - date.getFullYear()));





       sails.log("months--->"+months)

  var template="";



  template = template+ '<style>'+
  'html, body {'+
    'height: 100%;'+
  '}'+
  '#tableContainer-1 {'+
    'height: 100%;'+
    'width: 100%;'+
    'display: table;'+
  '}'+
  '#tableContainer-2 {'+
    'vertical-align: middle;'+
    'display: table-cell;'+
    'height: 100%;'+
  '}'+
  '#myTable > td,'+
  '#myTable > th{'+
    'margin: 0 auto;'+
   'border:1px solid black;'+
    '}'+
  '#myTable{'+
  'margin: 0 auto;'+
     '}'+
  '#tableth {'+
    'text-align:center;'+
'}'+
'</style>'+
'<div id=\"tableContainer-1\">'+
  '<div id=\"tableContainer-2\">'+
    '<table id=\"myTable\" style=\"border:1px solid black;border-collapse:collapse;\">'+
  '<tr >'+
     '<th colspan=\"2\" style=\"border:1px solid black;\">RENT RECEIPT</th>'+
   '</tr>'+
  '<tr border=\"0\" >'+
    '<td style=\"border:1px solid black;\">Tenant’s Name  :</td>'+
    '<td style=\"border:1px solid black;\"> '+ rentData.name +' (Employee ID: '+rentData.employee+'  ) </td>'+
  '</tr>'+
  '<tr border=\"0\">'+
    '<td style=\"border:1px solid black;\">Property Address  :</td>'+
    '<td style=\"border:1px solid black;\">'+rentData.address+
 '</td>'+
  '</tr>'+
  '<tr border=\"0\">'+
    '<td style=\"border:1px solid black;\">Rent Amount  :</td>'+
    '<td style=\"border:1px solid black;\"> '+rentData.rent+' </td>'+
  '</tr>'+
  '<tr border=\"0\">'+
    '<td style=\"border:1px solid black;\">Period From  :</td>'+
    '<td style=\"border:1px solid black;\">'+ rentData.pfrom +'</td>'+
  '</tr>'+
  '<tr border=\"0\">'+
    '<td style=\"border:1px solid black;\">Period To  :</td>'+
    '<td style=\"border:1px solid black;\">'+ rentData.pto +'</td>'+
  '</tr>'+
    '</table>'+
  '</div>'+
'</div>'


   
//sails.log("html template------->"+template);



 var options = {
       "height": "10.5in",
       "width": "8in",
        "format": 'Letter',
        // Page options
        "border": {
    "top": "2in",            // default is 0, units: mm, cm, in, px
    "right": "1in",
    "bottom": "2in",
    "left": "1.5in",
	"type": "pdf",             // allowed file types: png, jpeg, pdf 
	"quality": "75",
  "directory": "/tmp"
  },};


    htmltopdf.create(template, options).toFile('rentreceipt.pdf', function (err, file) {

        if (err) {
            return next(err);
        } else {
			console.log(file);
			res.json({filepath: file.filename}); 
		}
    });

   
    
},







uploadToS3: function(req,res){

     

  var fileName;
    try{
      fileName=req.file('uploadFile')._files[0].stream.headers['content-disposition'].split('"').reverse()[1];
    }
    catch(e){
      fileName="abc.abc";
    }
    var d = new Date();
    var rfc2104Hmac = crypto.createHmac("sha256", "FlAUVUqSsjmMN9qxbLruZl9GUtNDOrj4GAiWZzc1").update(d.toUTCString()).digest("base64");
const options =
      { // This is the usual stuff 
        adapter: require('skipper-better-s3')
      , key: 'AKIAJNY3NX7JK2HXBHIQ'
      , secret: rfc2104Hmac
      , bucket: 'varenyaeitr'
      , region: 'us-west-2'  // Optional - default is 'us-standard' 
      , "x-amz-algorithm": "AWS4-HMAC-SHA256"
        // Let's use the custom s3params to upload this file as publicly 
        // readable by anyone 
      , s3params:
        { ACL: 'public-read'
        }
        // And while we are at it, let's monitor the progress of this upload 
      , onProgress: progress => sails.log.verbose('Upload progress:', progress)
      }
 
req.file('uploadFile').upload(options, (err, files) => {
  sails.log('inside upload file');
  res.json({created:true,ItruploadData:files});
  
})



},

uploadITR: function  (req, res) {
    var year = req.param('year');
    var type = req.param('type');
    sails.log('inside upload ITR method'+year);
    if(req.method === 'GET')
      return res.negotiate(new Error('GET not allowed'));
    var fileName;
    try{
      fileName=req.file('uploadFile')._files[0].stream.headers['content-disposition'].split('"').reverse()[1];
    }
    catch(e){
      fileName="abc.abc";
    }
 // html to pdf



    req.file('uploadFile').upload({
      dirname:'../../upload',
      saveAs:fileName
    },function onUploadComplete(err,files){
      if(err){
        sails.log(err);
        return res.serverError(err);
      }
      if(!files.length) {
        return res.serverError(new Error('No file Uploaded'))
      }
      if(files.length){
        var testing = files;
      sails.log("testing path---->"+testing[0].fd);
      sails.log("#####>>>>"+testing.fd);

      var dir  = '../../github/eitr-backend/upload/'+year;
      var dir1 = '../../github/eitr-backend/upload/'+year+'/'+type;
      sails.log('directory name is--->'+dir);
     // var filepath = dir+
    // var dir  = '../../../eitr-backend/upload/'+year;

      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        }

        if (!fs.existsSync(dir1)){
        fs.mkdirSync(dir1);
        }

     // unzipping  
     var readStream = fs.createReadStream(testing[0].fd);
     var writeStream = fstream.Writer(dir1);

    readStream
      .pipe(unzip.Parse())
      .pipe(writeStream);
     //    res.json({upload:true,userData:files});

          var data = {
            itrtype:type,
            year: year,
            filepath: dir1
        }

        //delete zip file
        fs.unlinkSync(testing[0].fd);
           
        // udpated to model 
         Itrupload.create(data).exec(function(err,itrupload){
                   if(err)
                    res.json({error:err});
                   if(itrupload === undefined)
                  res.json({created:true})
                   else
                  res.json({created:true,ItruploadData:itrupload})

                 });
      }
    //  sails.log("file path is "+files.fd);
      
    

    });
  },

  downlod12BBPdf:function(req,res){

  sails.log('<<<<<<<-------------------UtilityController().downlod12BBPdf-----------inside pdf method------>>>>>>');
  

template


 var options = {
       "height": "10.5in",
       "width": "8in",
        "format": 'Letter',
        // Page options
        "border": {
    "top": "2in",            // default is 0, units: mm, cm, in, px
    "right": "1in",
    "bottom": "2in",
    "left": "1.5in"
  },};
/*
   var options = {
       "height": "15.5in",
       "width": "10in",
        "format": 'Letter',
      
   };*/


 var fileName = '12bb'+'.pdf'

    htmltopdf.create(template, options).toFile(fileName, function (err, file) {

        if (err) {
            return next(err);
        }
        sails.log('<<<<<<<-------------------UtilityController().downlod12BBPdf-----------starting pdf---------->>>>>>');

       //res.attachment(file.filename);
        res.download(file.filename, 'rentreceipt'); 
        sails.log('<<<<<<<-------------------UtilityController().downlod12BBPdf-----------ending pdf------------>>>>>>');
    });

  
 /* var fileName = '12bb.docx'
  var docx = HtmlDocx.asBlob(template);
   fs.writeFile(fileName, docx, function(err) {
    if (err) throw err;
  });
*/

},
}
