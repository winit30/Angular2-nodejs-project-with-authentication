var soap = require('soap');
var csv = require('csv');

module.exports = {
	refund:function(req,res)
	{

		sails.log("inside ws client method");
		var barcode = '9780201896831';
    var wsdlUrl = sails.config.ws.wsdl;
    soap.createClient(wsdlUrl, function(err, soapClient){
      // we now have a soapClient - we also need to make sure there's no `err` here. 
      if (err){
          return res.status(500).json(err);
        }
      soapClient.GetProduct({
        upc : barcode, 
        accesstoken : '924646BB-A268-4007-9D87-2CE3084B47BC'
      }, function(err, result){
        if (err){
          return res.status(500).json(err);
        }
        var responseAsCsv = result.GetProductResult;
        csv.parse(responseAsCsv, {columns : true}, function(err, parsedResponse){
          if (err) return res.status(500).json(err);
          // finally, we're ready to return this back to the client.
          return res.json({webservice:true,responseData:parsedResponse});
        });  
      });

    });

}

}
