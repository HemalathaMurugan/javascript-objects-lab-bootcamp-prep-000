//function objects(){
  var recipes={"key":"value"};
//} 

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({},object, {key:value});
 //object[key]=value;
  }
  
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key]=value;
    return object;
  }
