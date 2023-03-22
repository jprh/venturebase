var request = require("request");

var options = {
    method: 'POST',
    url: 'https://api.hubapi.com/contacts/v1/contact/',
    qs: { hapikey: '' },
    headers:
    {
        'Content-Type': 'application/json'
    },
    body:
    {
        properties:
            [{ property: 'email', value: 'mate@hubspot.com' },
            { property: 'firstname', value: 'mate' },
            { property: 'lastname', value: 'ravelo' },
            { property: 'website', value: 'http://hubspot.com' },
            { property: 'company', value: 'HubSpot' },
            { property: 'phone', value: '555-122-2323' },
            { property: 'address', value: '25 First Street' },
            { property: 'city', value: 'Cambridge' },
            { property: 'state', value: 'MA' },
            { property: 'zip', value: '02139' }]
    },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
