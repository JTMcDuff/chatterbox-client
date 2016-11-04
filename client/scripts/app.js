// YOUR CODE HERE:
//https://api.parse.com/1/classes/messages
var app = {};

  //init:function(){};
app.init = function () {

}

app.send = function (message) {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
     url: 'https://api.parse.com/1/classes/messages',
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
  });
}

app.fetch = function () {
  // This is the url you should use to communicate with the parse API server.
   $.ajax({
     url: undefined,
     type: 'GET',
     //data: JSON.stringify(message),
     contentType: 'text/html',
     success: function (data) {
     console.log('chatterbox: Messages Sent.');
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

  $('#chats').append('<div> message  </div>');

};

app.renderRoom = function (roomName) {

  $('#roomSelect').append('<div> roomName </div>');

};





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


