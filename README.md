#pinpoint-template-tester
Just a quick and dirty way to compile a [Handlebars](https://handlebarsjs.com/) template against a sample [AWS Pinpoint](https://aws.amazon.com/pinpoint/) endpoint object to see the results.  Useful for verifying Handlebars template ahead of copying into a Pinpoint template and sending test emails.

NOTE: This does not test the actual Pinpoint Handlebars.js implementation.  Pinpoint may have a different implementation of Handlebars and/or implemented different helpers.  Just because something works here, doesn't mean it will work in Pinpoint.

## Prerequisites
- [Node.js](https://nodejs.org/en/download/)

## Getting Started
- Clone this repo:
```bash
git clone git@github.com:davelemons/pinpoint-template-tester.git && cd pinpoint-template-tester
```
- Install dependencies:
```bash
npm -i
```
- Update index.js with a sample endpoint.  You can use the [AWS Pinpoint API](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html) to retrieve one from your account if needed.
- Update index.html with your Handlebars Template
- Run it (output will be written to the console):
```bash
node index.js
```
