// app/assets/javascripts/channels/chatroom.js

App.chatroom = App.cable.subscriptions.create("ChatroomChannel", {
  connected: function () {
    // Called when the subscription is ready for use on the server
    console.log("hello from rails");
  },

  disconnected: function () {
    // Called when the subscription has been terminated by the server
    console.log("Bye from rails");
  },

  // received: function (data) {
  //   // Called when the server broadcasts a message to this channel
  //   // You can handle the received data here, e.g., append the message to the chatroom UI
  //   console.log(data);
  //   console.log("Received data:", data);
  //   $("#message-container").append(data.mod_message);
  // },
  received: function (data) {
    console.log("Received data:", data);
    // Append the message to the chat interface
    $("#message-container").append(data.mod_message);
  },
});
