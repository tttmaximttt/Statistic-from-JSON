define(['jQuery','q'], function($,Q){

  function ResponseData(){};

  ResponseData.prototype.getData = function(){
    return Q($.ajax({
      url: 'users/users.json',
      type:'Get',
      dataType: 'json',
      success: function (data){
        data:data
      }, error: function(error){
        error:error
      }
    }));
  };

  var instance = new ResponseData();

  return instance;
});
