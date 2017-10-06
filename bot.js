console.log("El bot ha iniciado");

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'O4wETrfULyGSHsdpfbjDYTGyX',
  consumer_secret:      'PkhUZqO7oBqjgLpbjlSFaVIFmIWhQvx8AkimQNrIgvmnFZVdXD',
  access_token:         '914990232822575104-4aFpiKRo6mXcxT9hGds4bXY2bGxYIYR',
  access_token_secret:  '5YjpnfeydkHenoroySJtDoFKbLa04OwBl81GN3EliLXMT',
})

var stream = T.stream('user');


var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "beac3017",
  application_key: "72071fda58e0aa9de1f1113a6cabf1b9"
});




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
        function sentidoTw(){
        textapi.sentiment({
          'language' : 'auto',
          'text': textTweet
        }, function(error, response) {
          if (error === null) {
            console.log(response);

            if(response.polarity == 'positive'){
              // console.log("Este parece ser un tweet cargado de energía positiva ☑️ ");
               if(lenguaje === 'español') {
                  var twitiar = "¡Hola "+ "@"+enviadoPor + "! Mi opinión: Este parece ser un tweet cargado de energía positiva :)";
                  }

               else {
                  var twitiar = "¡Hi "+ "@"+enviadoPor + "! My opinion: This seems to be a positive charged tweet :)";
                  }

                T.post('statuses/update', {in_reply_to_status_id: reply,  status: twitiar});
                                               }

            else if(response.polarity == 'negative'){
                  // console.log("Este parece ser un tweet negativo");
                  if(lenguaje == 'español') {
                     var twitiar =  "¡Hola "+ "@"+enviadoPor + "! Mi opinión: Este parece ser un tweet negativo :(" ;
                     }

                  else {
                   var twitiar = "¡Hi "+ "@"+enviadoPor + "! My opinion: This seems to be a negative tweet :(";
                       }

                   T.post('statuses/update', {in_reply_to_status_id: reply,  status: twitiar});
                                                    }

            else if(response.polarity == 'neutral'){
                  //  console.log("Este parece ser un tweet neutral");
                  if(lenguaje == 'español') {
                     var twitiar =  "¡Hola "+ "@"+enviadoPor + "! Mi opinión: Este parece ser un tweet neutral." ;
                    }

                  else{
                   var twitiar = "¡Hi "+ "@"+enviadoPor + "! My opinion: This seems to be a neutral tweet.";
                      }

                  T.post('statuses/update', {in_reply_to_status_id: reply,  status: twitiar });
                                                    }

                         }//fin response
          }); // fin sentiment
        }; // fin funcion sentidoTw

        textapi.language({
        text: textTweet
        }, function(error, response) {
           if (error === null) {
           if(response.lang != 'en' ){lenguaje = 'español'}
           else if(response.lang == 'en'){lenguaje = 'ingles'}
           console.log(response);
           console.log('EL LENGUAJE DETECTADO ES: '+lenguaje)
           sentidoTw();
                                }
                         });


         }

/*    else{
    var twitiar = { status:"@"+enviadoPor +" Gracias por escribirme :) "  }
    T.post('statuses/update', twitiar);
  } */

                        }
};


twitea();
twitAire();
setInterval(twitAire , 1000*60*60);

function twitAire(){
var r = Math.floor(Math.random()*100);
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();
request.open("GET", "https://stateair.net/dos/RSS/Bogota/Bogota-PM2.5.xml", false);
request.send();

var xml = request.responseXML;

var https = require('https');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({explicitArray : false});
var parseString = require('xml2js').parseString;


var fecha;
var concentracion;
var aqi;
var desc;

 var airData = '';
 https.get('https://stateair.net/dos/RSS/Bogota/Bogota-PM2.5.xml', function(res) {
     if (res.statusCode >= 200 && res.statusCode < 400) {
       res.on('data', function(data_) { airData += data_.toString(); });
       res.on('end', function() {
        // console.log('data', airData);

         parser.parseString(airData, function(err, result) {
         // console.log('FINISHED', err, result);
         //console.log(airData);
         parser.parseString(airData, function (err, result) {
           console.dir(result);
          //  console.dir(result.rss.channel.item[23].Conc);
          //  console.dir(result.rss.channel.item[23].AQI);
          //  console.dir(result.rss.channel.item[23].title);
        //    console.dir(result.rss.channel.item[23].Desc);

            concentracion =  result.rss.channel.item[23].Conc;
            aqi = result.rss.channel.item[23].AQI;
            fecha = result.rss.channel.item[23].title;
            desc = result.rss.channel.item[23].Desc;
            finalmenteTwitiar();
         });

         });
       });
     }
   });


/*
var items = xml.getElementsByTagName("item");
var lastItem = items[23];
var fecha = lastItem.childNodes[1];
var pm = lastItem.childNodes[5];
var concentracion = lastItem.childNodes[7];
var aqi = lastItem.childNodes[11];
var desc = lastItem.childNodes[13]; */

function finalmenteTwitiar(){
var estado;
if(aqi<50){
  estado= "Satisfactorio, sin riesgos. 🍃";
}
else if(aqi>50 && aqi<100){
  estado= "Polución moderada. ⚠️" ;
}

else if(aqi>100){
 estado = "Peligroso para la salud. ⛔️";
}


var twitiar = {
    status:"Índice de calidad del aire en Bogotá: " +aqi+
    ", concentración de partículas PM2,5 en el aire: "+concentracion+
     "ug/m3. Estado: "+ estado
      }
console.log(twitiar);
T.post('statuses/update', twitiar);
                            };
                 };





//Tweetear algo
function twitea(){
var r = Math.floor(Math.random()*100);

var twitiar = {
    status:"¡Hola soy un Bot y me acabo de reiniciar! Aquí un número aleatorio de la suerte: " +r
              }

T.post('statuses/update', twitiar);

                 };




//Buscar y explorar tweets
var parametros = {
  q: 'attack on titan  ',
  count: 15,
  is:retweet = '',
  has:mentions ='no'
                 };

//buscarOpinar();
//setInterval(buscarOpinar , 1000*30);
function buscarOpinar(){
T.get('search/tweets', parametros, hacerAlgo);
};

function hacerAlgo(err,data,response){
var tweets = data.statuses;
var enviadoPor;
var reply;
var texto;
var lenguaje;
var check;

for (var i = 0; i < tweets.length; i++) {
     check = tweets[i].text.search("RT");
     if(check  == -1){
       enviadoPor = tweets[i].user.screen_name;
       reply = tweets[i].id_str;
       texto = tweets[i].text;
       console.log(texto);
       break;
     }
     else{
       console.log("ciclando");
     }
}

console.log(texto);


/*
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log("TEXTO:"+ tweets[i].text);
  }
  //console.log(tweets);
*/

}; // fin funcion hacerAlgo


//https://api.openaq.org/v1/sources fuente
