/*jslint node:true*/

var https = require('https');
var url = require('url');
var request = require('request');

var loadStart = 'starturl.txt';
var loadTop = 'top';

var errjson = JSON.stringify({"error" : "no such path"});

var seen = {};
var docs = {};
var paths = {};

var jfetch = function (url) {
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
  });
};

var idxq = [];

var type = function (line) {
  if (line[1].match(/\.txt$/)) {
    return "index";
  } else {
    return "json";
  }
};

var checkExists = function (line) {
  return false; 
};

var ifetch = function (top, res) {
  request(top[1], function (error, response, body) {
    
    var i, n, line
      , lines = body.split('\n');
    
    
    if (!error && response.statusCode === 200) {  
      n = lines.length;
      for (i = 0; i < n; i += 1 ) {
        line = lines[i].trim().split(" ");
        if (checkExists(line) ) {
          continue;
        }
        seen[line[1]] = "json";
      
        if (type(line) === "index") {
          idxq.push(line);
        } else {
          paths["/" + top[0] + "/" + line[0] + '/' ] = line[1];
          jfetch(line[1]);              
        }
      }
    } else {
      console.log("error", error, response.statusCode);
    }
    
    if (idxq.length > 0) {
      ifetch(idxq.shift(), res);
    } else {
      if (res) {
        res.end("all indexes have been loaded");          
      } 
    }
    
  }); //request cb
};

var load = function (res) {
  seen[loadStart] = "index";
  ifetch([loadTop, loadStart], res);
};

load();



var http = require('http');
http.createServer(function (req, res) {
  var pu, cb, ret;
  pu = url.parse(req.url, true);
  pu.path = pu.path.split('?')[0].replace(/(\.json|\/)?$/, '/');
  if (pu.path === "/refreshall/") {
    docs = {};
    seen = {};
    paths = {};
    load(res);
  } else if (pu.path === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("<html><body>Just a Simple JSON Service. See <a href='https://github.com/jostylr/simplejsonp'>GitHub SimpleJSONP</a></body></html>");
  } else {
    if (pu.query) {
      cb = pu.query.callback;
    }
    ret = docs[paths[pu.path]] || errjson;
    if (cb) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(cb+"("+ ret +")");    
    } else {
      res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
      res.end(ret);
    }
  }


}).listen(process.env['app_port'] || 3000);


