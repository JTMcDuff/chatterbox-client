// YOUR CODE HERE:
//https://api.parse.com/1/classes/messages
var app = {
  server:"https://api.parse.com/1/classes/messages?limit=1000&order=-createdAt",
  friends:[],
  //username: "Testy McTesterson"



};

app.init = function () {
  //$('document.body').on('click','.username',function(event) {
   //app.friends.push(username);
  //});
  app.fetch()
   .then(function(stuff) {
     for (var i = 0; i < stuff.results.length;  i ++) {
        //console.log(stuff.results);
        app.renderMessage(stuff.results[i]);
      }
     });


   $("#submitbutton").on('click',function() {
      //$('#submitbutton').preventDefault;
      console.log("This is a message. "+$('.messagetext').val());
      // app.send($('.messagetext').val());
      app.outgoingMessage($('.messagetext').val(),$('.username').val());
    });

}

app.send = function (message) {
  console.log(message);
  return $.ajax({
  // This is the url you should use to communicate with the parse API server.
     url: app.server,
     type: 'POST',
     data: JSON.stringify(message),
     contentType: 'application/json',
     success: function (data) {
     console.log('chatterbox: Message sent');
     },
     error: function (data) {
     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
     console.error('chatterbox: Failed to send message', data);
     }

  }).then(app.fetch());
}

app.fetch = function () {
  // This is the url you should use to communicate with the parse API server.
   return $.ajax({
     url: app.server,
     type: 'GET',
     //data: JSON.stringify(message),
     contentType: 'text/html',
     success: function (data) {
     console.log('chatterbox: Messages Received.');
     },
     error: function (data) {
     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
     console.error('chatterbox: Failed to fetch messages', data);
     }
  });
}

app.clearMessages = function () {

  $('#chats').html('');

};

app.renderMessage = function (message) {
if (  ( message.text.indexOf("<script>") === -1 ) && (message.text.indexOf('<script>') === -1)  && (message.roomname.indexOf("<script>") === -1 ) ) {
    console.log(message);
     var uriUsername = encodeURI(message.username);
     var uriText = encodeURI(message.text);
     var uriRoomname = encodeURI(message.roomname);

    $('#chats').append('<div> Username: '+uriUsername  +'</div>');
    $('#chats').append('<div> Message: '+uriText  +'</div>');
    $('#chats').append('<div> Room: '+uriRoomname  +'</div>');
 }

};


app.renderRoom = function (roomName) {
  $('#roomSelect').append('<div> roomName </div>');

};

$(document).ready(app.init);

app.outgoingMessage = function (text, username) {
  var msg = {};

  msg['username'] = username;
  msg['text'] = text;
  msg['roomname'] = "room1";
  console.log("Rendered Object: "+msg['text']);
  app.send(msg);
  // return msg;
}




//function getMessages() {

  //return new Promise(function() {
    // $.ajax({
  //type: "GET",
  //url: "https://api.parse.com/1/classes/messages",
  //data: data,
  //success: success,
  //dataType: dataType
//});
  //})
//}.then(function(messages) {
  //jQuery to append to body
//})


