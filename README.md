# SomeBitBot
A twitter Bot using node.js and the Twit package.
It uses OpenAQ API for posting each hour a tweet providing information about the air quality in Bogota city. 
It makes use of the Aylien Text Analysis API to express an opinion based on the text of a tweet.
You can mention @SomeBitBot on your tweet and it will give an opinion: Positive, neutral or negative.


OpenAQ API: https://docs.openaq.org/ Using data provided by the U.S. Department of State from the U.S. Embassy in Bogotá.
 
### Tech

* [socket.io] - Enables real-time bidirectional event-based communication
* [node.js] - Backend Server.
* [Express] - node.js network app framework.

 
### Installation

SomeBitBot requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and run bot.js

```sh
$ npm install 
$ node bot.js
``` 
 
 
### Follow: @SomeBitBot




[node.js]: <http://nodejs.org>
[Bootstrap]: <http://twitter.github.com/bootstrap/>
[jQuery]: <http://jquery.com>
[express]: <http://expressjs.com>
[socket.io]: <https://socket.io>
[request]: <https://github.com/request/request>
