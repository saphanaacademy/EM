s2:

s4hcbp
{
   "uri":"",
   "authorization":""
}


f1: 

const request = require('request');

module.exports = {
    handler: function (event, context) {
        var s4hcbp = context.getSecretValueJSON('s2', 's4hcbp');
        var opts1 = {
            url: s4hcbp.uri + "/A_BusinessPartner('" + JSON.parse(event.data).EVENT_PAYLOAD.KEY[0].BUSINESSPARTNER + "')?$format=json&$expand=to_BusinessPartnerAddress",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': s4hcbp.authorization
            }
        };
        request(opts1, (err, res, body) => {
            if (err) { return console.log(err); }
            var data = JSON.parse(body);
            var address = data.d.to_BusinessPartnerAddress.results[0];
            var BusinessPartner = data.d.BusinessPartnerFullName + ', ' + address.HouseNumber + ' ' + address.StreetName + ', ' + address.CityName + ', ' + address.PostalCode;
            console.log('BusinessPartner: ' + BusinessPartner);
        });
    }
}


dependencies:

{
   "dependencies":{
      "request":"latest"
   }
}
