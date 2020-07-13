var handlebars = require('handlebars');
var fs = require('fs');

var data = {
  'Address': 'string',
  'ApplicationId': 'string',
  'Attributes': {
      'OrderNumber': [
        '14286','45361','13892','12580','14382'
      ],
      'OrderAmount': [
        '380.35','378.63','558.05','788.75','252.05'
      ],
      'ItemCount': [
        '20','20','32','35','41'
      ]
  },
  'ChannelType': 'EMAIL',
  'CohortId': 'string',
  'CreationDate': 'string',
  'Demographic': {
      'AppVersion': 'string',
      'Locale': 'string',
      'Make': 'string',
      'Model': 'string',
      'ModelVersion': 'string',
      'Platform': 'string',
      'PlatformVersion': 'string',
      'Timezone': 'string'
  },
  'EffectiveDate': 'string',
  'EndpointStatus': 'string',
  'Id': 'string',
  'Location': {
      'City': 'string',
      'Country': 'string',
      'Latitude': 123.0,
      'Longitude': 123.0,
      'PostalCode': 'string',
      'Region': 'string'
  },
  'Metrics': {
      'string': 123.0
  },
  'OptOut': 'string',
  'RequestId': 'string',
  'User': {
      'UserAttributes': {
          'string': [
              'string',
          ]
      },
      'UserId': 'string'
  }
}

fs.readFile('index.html', 'utf-8', function(error, source){
  var template = handlebars.compile(source);
  var html = template(data);
  console.log(html)
});