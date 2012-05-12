# Cors-lite


This is a node program that allows for easy serving of JSON data using CORS with a fallback to JSONP. 

The primary use case is a site that is semi-static in its JSON needs. 

## Install
You need node installed. Go to 

1. Install [node](http://nodejs.org/)  if not already installed. v.06.17 or higher is recommended. 
2. Run node server  at the command line: `node server`
3. Visit localhost:3000 to check that the server is up and running.
4. Modify paths variable at top of server file to point to your JSON files of interest. Restart server and check.
   The hash is of the form `path : url`  where the path is where the server expects a request to come from and the url is where the JSON data actually lives. 

## Using JSON

Check out this live working version: http://jsbin.com/epadoh/1/edit#javascript,html

Use [IECors.js](https://github.com/dkastner/jquery.iecors) to use for IE8 (maybe IE9) as at http://jsbin.com/erugun/2/edit#javascript,html,live

One may also want to read: [kendoui](http://www.kendoui.com/blogs/archive/11-10-04/using_cors_with_all_modern_browsers.aspx) 

Two useful code snippets using jQuery: 

JSON via CORS: 

    $.get("http://simplejsonp.nodester.com/thomaspark/bootswatch", function (a, b, c) {d = [a, b, c]}, "json")

JSONP: 

    $.get("http://simplejsonp.nodester.com/thomaspark/bootswatch", function (a, b, c) {d = [a, b, c]}, "jsonp")

If you go to any page with jQuery on it (such as this very page) and use your web console, you can run this code and check out the results in the global variable d. Obviously, one should replace the anonymous functions with something much better. 

This project was initiated to provide an API for the semi-static fantastic [bootswatch](http://bootswatch.com) project. 

## Hosting

You should be able to host the server on any node service. 

I use [nodester](http://nodester.com) and the steps can be as easy as: 

1. Clone this repo
2. Modify the path hash
3. git push it to nodester. 
4. You may need to npm intall request using the nodester command line tool.
4. Done. See http://nodester.com for actual commands and stuff. You also need to get added to the service.

There is also [nodejitsu](http://nodejitsu.com) and [CloudFoundry](http://cloudfoundry.com) 

Nodester aims to always be free while the others are in free beta with no mention of pricing. 


## Disclaimer

This has nothing to do with beverages. Just a descriptive name that is also a playful parody on a certain well-known beverage. 

### Licensed under MIT license.

Copyright (c) 2012, James Taylor, https://github.com/jostylr/cors-lite

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.