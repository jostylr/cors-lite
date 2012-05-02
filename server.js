/*jslint node:true*/

//change this to have any paths (start with / and end with / for key) and the value is the source JSON.
var paths = {
  "/thomaspark/bootswatch/" : "http://bootswatch.com/api/themes.json"
  , "/bootswatch/" : "http://bootswatch.com/api/themes.json"
};


var https = require('https');
var url = require('url');
var request = require('request');

var errjson = JSON.stringify({"error" : "no such path"});

var docs = {};

var jfetch = function (url, res) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      try {
        docs[url] = JSON.stringify(JSON.parse(body));
      } catch (e) {
        docs[url] = JSON.stringify({"error" : e, "body" : body});
      }
    } else {
      console.log("error jfetch", error, response.statusCode);
    }
    if (res) {
      res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
      res.end("Path loaded. \n" + docs[url]  );
    }
  });
};


// load initial values
var path, lurl; 
for (path in paths) {
  lurl  = paths[path];
  if (!docs.hasOwnProperty(lurl)) {
    docs[url] = 1;
    jfetch(lurl);
  }
}


var http = require('http');
http.createServer(function (req, res) {
  var pu, cb, ret;
  pu = url.parse(req.url, true);
  if (pu.path.match(/\/.+\/refresh\/?/)) {
    pu.path = pu.path.replace(/(\.json)?\/refresh\/?$/, '/');
    if (paths.hasOwnProperty(pu.path)) {
      jfetch(paths[pu.path], res);
    } else {
      res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
      res.end("Path not found: " + pu.path); 
    }
    return;
  }
  pu.path = pu.path.split('?')[0].replace(/(\.json|\/)?$/, '/');
  if (pu.path === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("<html><body>Just a Simple JSON Service. See <a href='https://github.com/jostylr/simplejsonp'>GitHub SimpleJSONP</a></body></html>");
  } else {
    if (pu.query) {
      cb = pu.query.callback;
    }
    ret = docs[paths[pu.path]]|| errjson;
    if (cb) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(cb+"("+ ret +")");    
    } else {
      res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
      res.end(ret);
    }
  }


}).listen(process.env['app_port'] || 3000);


