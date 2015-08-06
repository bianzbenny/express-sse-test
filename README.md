# express-sse-test
An example for testing Server Sent Event (sse) with express js framework. This example is intended to give a more structured way for a real world case utilizing sse. Some codes are borrowred from [**sendevent**](https://github.com/fgnass/sendevent) package example. 

routes/sse.js use package "sendevent" and create an expressjs middleware. it logs events when a client is connected or disconnected

the client (browser) script part is in views/index.jade. It simplely logs received event data in browser console and on the page

###steps to test

1. clone the repository
1. cd to the local folder and run "npm install"
1. run "node ./bin/www"
1. open browser location "localhost:3001", you should see the date is updating in every 5 seconds after a wellcome message
1. open browser console also can see the message updating
1. try open a few browser tabs and close some of them to check the client connection and disconnection in server log
