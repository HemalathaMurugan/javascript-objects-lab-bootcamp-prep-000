function objects(){
  var object={"key":"value"};
} 

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({object}, {key:value});
 //object[key]=value;
  }
