function objects(){
  var recipes={key:value};
} 

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({recipes}, object, {key:value});
 //object[key]=value;
  }
