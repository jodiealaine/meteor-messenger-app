Meteor.methods({
  newMessage(message) {
    message.timestamp = new Date();
 
    const messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });
 
    return messageId;
  }
});