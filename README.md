simplejsonp
===========

A simple jsonp server that server json as CORS with fallback to jsonp

To install, clone the repository. Run node server  at the command line. Go to localhost:3000 to check that the server is up and running.

The top of the server.js file has a hash of path : url.  The path is where the server expects a request to come from and the url is where the JSON data lives. 

Change that hash to point to whatever you want. 

You should be able to host the server on any node server. I use nodester and the steps can be as easy as: clone this repo, modify the path hash, git push it to nodester. Done. See http://nodester.com



### Licensed under MIT license.

Copyright (c) 2012, James Taylor, https://github.com/jostylr/simplejsonp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.