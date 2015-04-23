define(['provider','js/service/users','q', 'underscore'], function(provider,users,Q, _){

	describe('users service', function(){
		var usersInstance = null,

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
					"contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity"
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
					"contextId": "c0dc91a6-d0c8-4802-9c01-a5c97b68e55a",
					"timestamp": "2014-12-31T11:18:35.812Z",
					"initiator": {
						"type": "identity",
						"id": "844eeaf2-b0a7-49ff-8c91-62146edb09c1"
					}
				}];

		describe('#getData',function(){
			beforeEach('some generate',function(){
				usersInstance = users.getInstance();
			});

			afterEach('reset',function(){
				usersInstance = null;
			});

			it('should return valid data', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture1);

				usersInstance.getData().then(function(data){
					var ourObj = [{
						id: '844eeaf2-b0a7-49ff-8c91-62146edb09c1',
						rooms: ['c0dc91a6-d0c8-4802-9c01-a5c97b68e55a'],
						messagesCount: 1
					}];

						if(_.isEqual(data, ourObj)){
							done();
						}else{
							done('FAIL');
						}
				});
				provider.getData.restore();
			});

			it('should go to the next iterration and return valid data', function(done) {
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture2);

				usersInstance.getData().then(function (data) {
					var testObj = [{
						id: '844eeaf2-b0a7-49ff-8c91-62146edb09c1',
						rooms: [
							'c0dc91a6-asdf-4802-9c01-a5c97b68e55a',
							'c0dc91a6-d0c8-4802-9c01-a5c97b68e55a'
						],
						messagesCount: 2
					}];

						if (_.isEqual(data, testObj)) {
							done();
						} else {
							done('data not valid');
						}
				});
				provider.getData.restore();
			});

			it('if initiator id in our data not valid, go to the next iterration', function(done){
				var defer = Q.defer(),
						providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(fixture3);

				usersInstance.getData().then(function(data){
					done();
				},function(){
					done('something went wrong');
				});
				provider.getData.restore();
			});
		});

		describe('module', function(){

			var usersInstance = null;
			var defer = null;

			beforeEach('generate som variables', function(){
				usersInstance = users;

				defer = Q.defer();
			});

			afterEach('reset all',function(){
				usersInstance = null;
			});

			it('should expose valid object', function(){
				expect(users).to.include.key('getInstance');
				expect(users).to.include.key('reset');
			});

			it('shoul retun singleton', function(){
				expect(users.getInstance()).to.be.equal(users.getInstance());
			});
		});
	});
});