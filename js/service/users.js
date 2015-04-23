define(['provider','underscore','q'],function(dataProvider, _, Q){
  function UsersServices(){

  }

  UsersServices.prototype.getData = function(){


    return dataProvider.getData().then(function(data){
      var users = {},
          defer = Q.defer(),
          regExp = /[#$?@%/=^&*!()<>№.,:;\\|\\+]/g;

      if(!data){
        defer.reject(new Error("Invalid incoming data"))
      };

      _.each(data, function(message){

        if(!message.initiator.id){
          return;
        };

        if(regExp.test(message.initiator.id)){
          return;
        };

        var userId = message.initiator.id

        if(!users[userId]){
          users[userId] = {
            id: userId,
            rooms: [],
            messagesCount: 1
          }
        }else{
          users[userId].messagesCount++;
        };

        if(message.contextId && !_.contains(users[userId].rooms, message.contextId)){
          users[userId].rooms.push(message.contextId);
        };
      });
      defer.resolve(_.toArray(users));
      return defer.promise
    });
  };

  var instance = null;

  return {
    getInstance: function(){
      if(!instance){
        instance = new UsersServices();
      }
      return instance;
    },
    reset:function(){
      instance = null;
    }
  };
});

