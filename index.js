function objects(){
  var recipes={"key":"value"};
} 

function updateObjectWithKeyAndValue(object, key, value) {
 return object.assign({}, object, {key:value});
 //object[key]=value;
  }
