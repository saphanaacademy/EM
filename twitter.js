s2:

twitter
{
   "uri":"",
   "authorization":""
}


f1:

            var twitter = context.getSecretValueJSON('s2', 'twitter');
            var payload = {"status": BusinessPartner};
            var opts2 = {
                url: twitter.uri,
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': twitter.authorization
                }
            };
            request(opts2, (err, res, body) => {
                if (err) { return console.log(err); }
            });
