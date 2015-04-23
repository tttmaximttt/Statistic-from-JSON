define(['provider','underscore', 'q'],function(dataProvider, _, Q){


	function Messages(){}

	Messages.prototype.getData = function(){
		return dataProvider.getData().then(function(data){
			var messagesText = [],

					regExp = /:(.*?)(?=\s|:|&nbsp;)\:/g,
					defer = Q.defer();

			if (!data){
				defer.reject(new Error('Invalid argument: data'));
			}

			_.each(data, function(dataItem){
				if(regExp.test(dataItem.text)){
					messagesText.push(dataItem.text);
				}
			});
            defer.resolve(messagesText);

			return defer.promise;
		});
	};

	var instance = null;

	return{
		getInstance: function(){
			if(!instance){
				instance = new Messages();
			}
			return instance;
		},
		reset:function(){
			instance = null;
		}
	};
});
