simplejsonp
===========

A simple jsonp server that server json as CORS with fallback to jsonp

It uses an index page of files that can be other indexes (ends in .txt) or json (end in .json)

For each line, there is a pathname and the url to load the file from. 

The code in server should be modified at the top to have a start name and path. 

This runs on node. Try nodester.com for a great free node hosting option for this. At least so far :)

Once the files are loaded use the pathname that comes from indexpathname/jsonpathname  (trailing / or .json works fine too)

To reload all resources, visit /refreshAll

