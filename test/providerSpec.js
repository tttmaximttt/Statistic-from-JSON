define(['jQuery','provider','underscore', 'q'], function($,provider,_,Q){
  describe('dataProvider', function(){
	  describe('#getData', function(){

		  var xhr,
				  server,
				  request;
		  beforeEach(function(){
			  request = null;
			  xhr = sinon.useFakeXMLHttpRequest();

			  xhr.onCreate = function(xhr){
				  request = xhr;
			  };
		  });

		  afterEach(function(){
			  xhr.restore();
			  request = null;
		  });

		  it('should make a request', function(){
			  provider.getData();
			  //console.log(request);
			  expect(request).to.not.be.equal(null);
		  });

		  it('should return a valid data', function(done){
			  provider.getData().then(function(data){
				  if(_.isArray(data)){
					  done();
				  }else{
					  done('data not valid');
				  }
			  });

			  request.respond(200, { "Content-Type": "application/json" },
					  '[{ "id": 12, "comment": "Hey there" }]');
		  });

		  it('should rejected respons', function(done){
			  provider.getData().then(function(error){
				  done('something went wrong');
			  },function(error){
				  done();
			  });

			  request.respond(200, { "Content-Type": "application/json" }, '');
		  });
	  });
  });
});
