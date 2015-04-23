define(['provider','underscore', 'q'],function(dataProvider, _, Q){
 function RoomsServices (){};

 RoomsServices.prototype.getData = function(){

	 return dataProvider.getData().then(function(data){
		var rooms = {},
				defer = Q.defer(),
				regExp = /[#$?@%/=^&*!()<>№.,:;\\|\\+]/g;

		 if(!data){
			 defer.reject('invalid incomig data')
		 };
		_.each(data, function(message){

			if(!message.contextId){
				return;
			};

			if(regExp.test(message.contextId)){
				return;
			};

		var roomId = message.contextId;

		if(!rooms[roomId]){
			rooms[roomId] = {
			 id: roomId,
			 users: [],
			 messageCount: 1
			}
		}else{
			rooms[roomId].messageCount++;
		};

		 if(message.initiator && message.initiator.id && !_.contains(rooms[roomId].users, message.initiator.id)){
			rooms[roomId].users.push(message.initiator.id);
     }
		});
		 defer.resolve(_.toArray(rooms));
		return defer.promise;
	 });
 };

 var instance = null;

 return {

  getInstance: function(){
   if(!instance){
    instance = new RoomsServices();
   }
   return instance;
  },
  reset:function(){
   instance = null;
  }
 };
});

