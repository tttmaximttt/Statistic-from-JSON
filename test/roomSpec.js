define(['provider','js/service/rooms','q', 'underscore'], function(provider,rooms,Q, _){

	describe('rooms service', function(){
		var roomsInstance = null,
				fixture1 = [{
					"text": ":smile:",
					"id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
					"contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				}],

				fixture2 = [{
					"text": ":smile:",
					"id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				},{
					"text": ":smile:",
					"id": "b2e8d7c2-sdff-4abb-b640-a84dd09beedd",
					"contextId": "c0dc91a6-asdf-4802-9c01-a5c97b68e55a",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				},{
					"text": ":smile:",
					"id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
					"contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				}],
				fixture3 = [{
					"text": ":smile:",
					"id": "b2e8d7c2-dc89-4abb-b640-a84dd09beedd",
					"contextId": "?//=/@#%-@3$$2/^&*-^&*",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				}];
		describe('#getData',function(){

			beforeEach('some generate',function(){
				roomsInstance = rooms.getInstance();
			});

			afterEach('reset',function(){
				roomsInstance = null;
			});
			//
			it('should return valid object', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture1);

				roomsInstance.getData().then(function(data){
					var ourObj = [{
						id: 'c0dc91a6-d0c8-4802-9c01-a5c97b68e55a',
						users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
						messageCount: 1
					}];

						if(_.isEqual(data, ourObj)){
							done();
						}else{
							done('returned object not valid');
						}
				});
				provider.getData.restore();
			});

			it('should go to the next iterration and return the valid object', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture2);

				roomsInstance.getData().then(function(data){
					var ourObj = [{
						id: 'c0dc91a6-asdf-4802-9c01-a5c97b68e55a',
						users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
						messageCount: 1
					},{
						id: 'c0dc91a6-d0c8-4802-9c01-a5c97b68e55a',
						users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
						messageCount: 1
					}];

						if(_.isEqual(data, ourObj)){
							done();
						}else{
							done('returned object not valid');
						}
				});
				provider.getData.restore();
			});

			it('if contextId in our data not valid, go to the next iterration', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture3);

				roomsInstance.getData().then(function(data){
					done();
				},function(){
					done('something went wrong');
				});
				provider.getData.restore();
			});

			describe('module', function(){
				var roomsInstance = null;
				var defer = null;

				beforeEach('generate som variables', function(){
					roomsInstance = rooms;
				});

				afterEach('reset all',function(){
					roomsInstance = null;
				});

				it('should expose valid object', function(){
					expect(rooms).to.include.key('getInstance');
					expect(rooms).to.include.key('reset');
				});

				it('shoul retun singleton', function(){
					expect(rooms.getInstance()).to.be.equal(rooms.getInstance());
				});
			});
		});
	});
});