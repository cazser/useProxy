function isPlainObject(object){
  if(typeof object!=='object' ){
    return false;
  }

  for(let [key, val] of Object.entries(object)){
    if(typeof val=== 'object'){
      return false;
    }
  }

  return true;
}

export default isPlainObject;