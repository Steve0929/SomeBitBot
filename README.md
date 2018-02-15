# SomeBitBot
A twitter Bot using node.js and the Twit package.
It uses Waqi API for posting each hour a tweet providing information about the air quality in Bogota city. 
It makes use of the Aylien Text Analysis API to express an opinion based on the text of a tweet.
You can mention @SomeBitBot on your tweet and it will give an opinion: Positive, neutral or negative.

 
### Tech
* [Waqi] - Waqi API to get Air Quality Index information.
* [Aylien] - Natural Language Processing API.
* [Twitter API] - For making requests and responses. 
* [node.js] - Backend Server.
* [Express] - node.js network app framework.
* [Request] - Used to make http/https calls.

 
### Installation

SomeBitBot requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and run bot.js

```sh
$ npm install 
$ node bot.js
``` 
Note that you may need to insert your own API credentials.

Twitter API
```sh
var T = new Twit({
  consumer_key:         'your_consumer_key',
  consumer_secret:      'your_consumer_secret',
  access_token:         'your_access_token',
  access_token_secret:  'your_ access_token_secret',
});
``` 
Aylien API credentials
```sh
var textapi = new AYLIENTextAPI({
  application_id: "your_application_id",
  application_key: "your_application_key"
});
``` 

### The bot in action

The bot will post each hour a tweet providing information about the air quality and the average temperatue of 5 locations (Usaquén, Guaymaral, Suba, Las Ferias, Puente Aranda) in Bogota city. Depending on the Air Quality Index the tweet will display a message indicating if the air quality is: satisfactory 🍃, moderate ⚠️ or bad ⛔️. 
* Please note that sometimes Twitter will prevend the bot from tweeting if the information of the post has already been tweeted. 


 
### Follow: @SomeBitBot


OpenAQ API: https://docs.openaq.org/ Using data provided by the U.S. Department of State from the U.S. Embassy in Bogotá.
*Update: The usage of OpenAQ API has been replaced with the Waqi API which provides more detailed air information by a certain location.


[node.js]: <http://nodejs.org>
[Twitter API]: <https://developer.twitter.com/>
[jQuery]: <http://jquery.com>
[express]: <http://expressjs.com>
[socket.io]: <https://socket.io>
[request]: <https://github.com/request/request>
[Aylien]: <https://aylien.com/text-api/>
[Waqi]:<https://waqi.info>
