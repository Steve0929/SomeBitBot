console.log("El bot ha iniciado");

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'qyCy6ompdKLXRk7Slb60eOUzu',
  consumer_secret:      '97dHKPDghONgiSOiSCBvWXpVtjrLrbjbQqDa7Dwidu6VLJvuSU',
  access_token:         '914990232822575104-tEIjkA268W0ZmITradNoE5TwCUV5OFo',
  access_token_secret:  'VMCCYcKVW8uX7rC8GHlv5a0mMfaOOzrRhYlD1znHdnfoZ',
})

var stream = T.stream('user');


//Cuando alguien siga al bot
stream.on('follow', twitGracias);

//Cuando alguien siga al bot
function twitGracias(eventMsg){
  var nombre = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  //var userId = eventMsg.source.user_id;
  var r = Math.floor(Math.random()*100);

  var twitiar = {
      status:"@"+screenName +" ¡Gracias por seguir a este Bot! Toma tu número aleatorio de la suerte: " +r
                }

      T.get('followers/ids', { screen_name: 'SomeBitBot' },  function (err, data, response) {
            console.log(data)
          })

      T.post('statuses/update', twitiar);
};

//Cuando alguien RESPONDA al bot
stream.on('tweet', twitRespuesta);
function twitRespuesta(eventMsg){
  var nombre = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  var botName = "SomeBitBot";
  var enviadoPor = eventMsg.user.screen_name;
  var textTweet = eventMsg.text;
  var replyto = eventMsg.in_reply_to_screen_name;
  var reply = eventMsg.id_str;
  console.log(textTweet);

  if(replyto == botName){

    if(textTweet.search(/jugo/i) != -1 ){
      var jugos = ["manzana","naranja","fresa","mora","piña","zanahoria","lulo","mango","guayaba","limón","coco","maracuyá" ];
      var r = Math.floor(Math.random()*12);
      var respuesta = "@"+enviadoPor + " De " + jugos[r] +".";
      //var twitiar = {status: respuesta, in_reply_to_status_id: reply}
      T.post('statuses/update', {in_reply_to_status_id: reply, status: respuesta });
    }

    else{
    var twitiar = { status:"@"+enviadoPor +" Gracias por escribirme :) "  }
    T.post('statuses/update', twitiar);
        }

                        }
};




//Tweetear algo
function twitea(){
var r = Math.floor(Math.random()*100);

var twitiar = {
    status:"¡Hola soy un Bot! Aquí un número aleatorio de la suerte: " +r
              }

T.post('statuses/update', twitiar);

                 };


//Buscar y explorar tweets
var parametros = {
  q: 'attack on titan',
  count: 5
                };

T.get('search/tweets', parametros, hacerAlgo);

function hacerAlgo(err,data,response){

  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
  console.log(tweets);
};
