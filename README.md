<img src="https://img.shields.io/badge/created-October%202017-80aaff.svg">


[![](https://img.shields.io/badge/%E7%9F%A5%E4%B9%8E%E4%B8%93%E6%A0%8F-%E6%8E%98%E9%87%91%E7%BF%BB%E8%AF%91%E8%AE%A1%E5%88%92-blue.svg)](https://zhuanlan.zhihu.com/juejinfanyi)

[![](https://img.shields.io/badge/Bot%20Status-online-brightgreen.svg)](https://twitter.com/SomeBitBot)

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


## The bot in action
### Air quality in the city
The bot will post each hour a tweet providing information about the air quality and the average temperatue of 5 locations (Usaquén, Guaymaral, Suba, Las Ferias, Puente Aranda) in Bogota city. Depending on the Air Quality Index the tweet will display a message indicating if the air quality is: satisfactory 🍃, moderate ⚠️ or bad ⛔️. 
* Please note that sometimes Twitter will prevend the bot from tweeting if the information of the post has already been tweeted in the past. 

### Natural Language Processing and tweeting a response based on sentiment
When someone in a tweet mentions @SomeBitBot, it will take the information from that tweet and use the Aylien text analysis API to determine the sentiment expressed in the tweet. The response from the Aylien API can be: "positive", "neutral" or "negative". Based on this the bot will tweet back a reply.
* The API also allows to know the language of the tweet. With this information the bot determines if the reply message will be sent in English or in Spanish.

### Positve sentiment:
Tweet
```sh
@SomeBitBot This was such a great day!!
``` 
Response
```sh
¡Hi @Esteban2606! My opinion: This seems to be a positive charged tweet :)
``` 
### Neutral sentiment:
Tweet
```sh
@SomeBitBot I was just walking by the streets.
``` 
Response
```sh
¡Hi @Esteban2606! My opinion: This seems to be a neutral tweet.
``` 
### Negative sentiment:
Tweet
```sh
@SomeBitBot So I have been stuck in traffic for 2 hours.
``` 
Response
```sh
¡Hi @Esteban2606! My opinion: This seems to be a negative tweet :(
``` 
 
### Follow: @SomeBitBot

OpenAQ API: https://docs.openaq.org/ Using data provided by the U.S. Department of State from the U.S. Embassy in Bogotá.
* Update: The usage of OpenAQ API has been replaced with the Waqi API which provides more detailed air information in a certain location.


[node.js]: <http://nodejs.org>
[Twitter API]: <https://developer.twitter.com/>
[jQuery]: <http://jquery.com>
[express]: <http://expressjs.com>
[socket.io]: <https://socket.io>
[request]: <https://github.com/request/request>
[Aylien]: <https://aylien.com/text-api/>
[Waqi]:<https://waqi.info>
