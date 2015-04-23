define(['knockout',
  'js/service/users',
  'js/service/rooms',
  'js/service/messages',
  'q'], function(ko, users, rooms, messages){

  var msgModel = {
    usersArr: ko.observableArray(null),
    roomsArr: ko.observableArray(null),
    messageArr: ko.observableArray(null)
  };

  users.getInstance().getData().then(function(data){
    msgModel.usersArr(data)
  });

 rooms.getInstance().getData().then(function(data){
   msgModel.roomsArr(data);
 });

  messages.getInstance().getData().then(function(data){
    msgModel.messageArr(data);
  });
  ko.applyBindings(msgModel);
});
