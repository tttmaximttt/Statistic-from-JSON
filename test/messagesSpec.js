define(['js/service/messages', 'provider' ,'q', 'underscore'], function(messages, provider, Q, _){
	describe('messages service', function(){
		var messagesInstance = null,
				fixture0 = [{
				  "text": ":smile:",
				  "id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
				  "contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
				  "timestamp": "2014-12-31T11:18:35.812Z",
				  "initiator": {
				      "type": "identity",
				      "id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
				    }
				}],

				fixture1 = [{
				    "text": ":smile:",
				    "id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
				    "contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
				    "timestamp": "2014-12-31T11:18:35.812Z",
				    "initiator": {
				        "type": "identity",
				        "id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
				    }
				},{
					"text": "asd",
					"id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
					"contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				}],

				fixture2 = [{
			    "text": "asd",
			    "id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
			    "contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
			    "timestamp": "2014-12-31T11:18:35.812Z",
			    "initiator": {
			        "type": "identity",
			        "id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
			    }
				},{
				    "text": "sdf",
				    "id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
				    "contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
				    "timestamp": "2014-12-31T11:18:35.812Z",
				    "initiator": {
				        "type": "identity",
				        "id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
				    }
				}];

		describe('#getData',function(){
			beforeEach('some generate',function(){
				messagesInstance = messages.getInstance();
			});

			afterEach('reset',function(){
				messagesInstance = null;
			});

			it('should return equal array with smiles', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise),
						testArr = [':smile:'];
				defer.resolve(fixture0);

				messagesInstance.getData().then(function(data){
					if(_.isEqual(data, testArr)){
						done();
					}else{
						done('Not equals');
					}
				});
				provider.getData.restore();
			});

			it('should return array of smiles with out non valid text', function(done){
				var defer = Q.defer(),
					providerStub = sinon.stub(provider, 'getData').returns(defer.promise),
					testArr = [':smile:'];
				defer.resolve(fixture1);

				messagesInstance.getData().then(function(data){
					if(_.isEqual(data, testArr)){
						done();
					}else{
						done('returned array not valid');
					}
				});
				provider.getData.restore();
			});

			it('should return empty array', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture2);

				messagesInstance.getData().then(function(data){
					if(_.isEmpty(data)){
						done();
					}else{
						done('array is not empty');
					}
				});
				provider.getData.restore();
			});

			it('should throw an error on undefined data', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(undefined);

				messagesInstance.getData().then(function(data){
					done('Invalid result of #getData');
				}, function(){
					done();
				});
				provider.getData.restore();
			});
		});

		describe('#getInstance', function(){
			var messagesInstance = null;

			it('should expose valid object', function(){
				expect(messages).to.include.key('getInstance');
				expect(messages).to.include.key('reset');
			});

			it('shoul retun singleton', function(){
				expect(messages.getInstance()).to.be.equal(messages.getInstance());
			});
		});
	});
});