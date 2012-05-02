simplejsonp
===========

A simple jsonp server that server json as CORS with fallback to jsonp

To install, clone the repository. Run node server  at the command line. Go to localhost:3000 to check that the server is up and running.

The top of the server.js file has a hash of path : url.  The path is where the server expects a request to come from and the url is where the JSON data lives. 

Change that hash to point to whatever you want. 

You should be able to host the server on any node server. I use nodester and the steps can be as easy as: clone this repo, modify the path hash, git push it to nodester. Done. See http://nodester.com

Licensed under MIT license as soon as I figure out what I have to do for that. 