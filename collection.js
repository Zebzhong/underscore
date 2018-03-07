_.each = _.forEach = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i = 0,length = obj.length;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.keys(obj);
    for(i = 0,length = keys.length;i<length;i++){
      var key = keys[i];
      iteratee(obj[key],key,obj);
    }
  }
  return obj;
}
_.each = _.forEach = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i=0,length=obj.length;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.keys(obj),
        length = keys.length;
    for(i = 0;i<length;i++){
      var currentKey = keys[i];
      iteratee(obj[currentKey],currentKey,obj);
    }
  }
}
_.each = _.forEach = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i = 0,length=obj.length;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.keys(obj),
      length = keys.length;
    for(i = 0;i<length;i++){
      var currentKey = keys[i];
      iteratee(obj[currentKey],currentKey,obj);
    }
  }
}
_.each = _.forEach = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i=0,length= obj.length;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.keys(obj);
    length = keys.length;
    for(i=0;i<length;i++){
      var currentKey = keys[i];
      iteratee(obj[currentKey],currentKey,obj);
    }
  }
}
_.each = _.forEach = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i = 0,length=obj.length;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.keys(obj);
    var length = keys.length;
    for(i=0;i<length;i++){
      iteratee(obj[keys[i]],keys[i],obj);
    }
  }
}
_.each = _.forEach = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i = 0,length=obj.length;i<length;i++){
      iteratee(obj[i],i,obj)
    }
  }else{
    var keys = _.keys(obj);
    for(i = 0,length = keys.length;i<length;i++){
      iteratee(obj[keys[i]],keys[i],obj);
    }
  }
}

_.each = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i = 0;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.key(obj);
    for(i = 0,length=keys.length;i<length;i++){
      var key = keys[i];
      iteratee(obj[key],key,obj);
    }
  }
}

_.each = function(obj,iteratee,context){
  iteratee = optimizeCb(iteratee,context);
  var i,length;
  if(isArrayLike(obj)){
    for(i=0,length=obj.length;i<length;i++){
      iteratee(obj[i],i,obj);
    }
  }else{
    var keys = _.keys(obj),
        length = keys.length;
    for(i=0;i<length;i++){
      var currentKey = keys[i];
      iteratee(obj[currentKey],currentKey,obj);
    }
  }
}
_.map = _.collect = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var currentKey = keys ? keys[i] : i;
    results[i] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}
_.map = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var key = keys ? keys[i] : i;
    results[i] = iteratee(obj[key],key,obj);
  }
  return results;
}
_.map = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var currentKey = keys ? keys[i] : i;
    results[i] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}
_.map = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) && _.keys(obj),
    length = (keys || obj).length,
    results = [];
  for(var i = 0;i<length;i++){
    var key = keys ? keys[i] : i;
    results[i] = iteratee(obj[key],key,obj);
  }
  return results;
}
_.map = _.collect = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) &&  _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var currentKey = keys ? keys[i] : i;
    results[i] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}
_.map = _.collect = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var currentKey = keys ? keys[i]:i;
    results[i] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}

_.map = _.collect = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike && _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var currentKey = keys ? keys[i] : i;
    results[i] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}

_.map = _.collect = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = [];
  for(var i = 0;i<length;i++){
    var key = keys ? keys[i] : i;
    results[i] = iteratee(obj[key],key,obj);
  }    
  return results;
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index<length && index >=0;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,memo,context){
    iteratee = optimizeCb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir > 0 ? 0 : length-1; 
    if(arguments.length < 3){
      memo = obj[keys ? keys[index]:index];
      index += dir;
    }    
    return iterator(obj,iteratee,memo,keys,index,length);
  }
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index >= 0 && index < length;index+=dir){
      var currentKey = keys ? keys[index]:index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,memo,context){
    iteratee = cb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if(arguments<3){
      memo = keys ? obj[keys[index]]:obj[index];
      index += dir;
    }
    return iterator(obj, iteratee, memo, keys, index, length);
  }
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index >= 0 && index < length;index+=dir){
      var currentKey = keys ? keys[index]:index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,memo,context){
    iteratee = cb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if(arguments.length < 3){
      memo = obj[keys ? keys[index]:index];
      index += dir;
    }
    return iterator(obj,iteratee,memo,keys,index,length);
  }
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index < length && index >= 0;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,memo,context){
    iteratee = optimizeCb(iteratee,context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir > 0 ? 0 : length-1;
    if(arguments.length < 3){
      memo = obj[keys ? keys[index] : index];
      index += dir;
    }
    return  iteratee(obj,iteratee,memo,keys,index,length);
  }
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index > 0 && index <= length;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,memo,context){
    iteratee = cb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if(arguments.length < 3){
      memo = obj[keys ? keys[index]:index];
      index += dir;
    }
    return iterator(obj, iteratee, memo, keys, index, length);
  }
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index > 0 && index < length;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,memo,context){
    iteratee = cb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      index = dir > 0 ? 0 : length - 1;
    if(arguments.length < 3){
      memo = keys ? obj[keys[index]] : obj[index];
      index += dir;
    }
    return iterator(obj, iteratee, memo, keys, index, length);
  }
}
function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index >= 0 && index <length;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,context){
    iteratee = optimizeCb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir>0 ? 0 : length -1; 
    if(arguments.length < 3){
      memo = obj[keys ? keys[index]:index];
      index += dir;
    }
    return iterator(obj, iteratee, memo, keys, index, length);       
  }
}

function createReduce(dir){
  function iterator(obj,iteratee,memo,keys,index,length){
    for(;index >= 0 && index < length;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,context){
    iteratee = optimizeCb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir>0 ? 0 : length -1; 
    if(arguments.length<3){
      memo = obj[keys ? keys[index]:index];
      index += dir;
    } 
    return iterator(obj,iteratee,memo,keys,index,length);
  }
}

function createReduce(dir){
  function iterator(obj, iteratee, memo, keys, index, length){
    for(;index > 0 && index<length;index+=dir){
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo,obj[currentKey],currentKey,obj);
    }
    return memo;
  }
  return function(obj,iteratee,context){
    iteratee = cb(iteratee,context,4);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        index = dir > 0 ? 0 : length-1;
    if(arguments.length < 3){
      memo = obj[keys ? keys[index]:index];
      index += dir;
    }
    return iterator(obj, iteratee, memo, keys, index, length)
  }
}
_.reduce = _.foldl = _.inject = createReduce(1);

_.reduceRight = _.foldr = createReduce(-1);

_.find = _.detect = function(obj,predicate,context){
  var key;
  if(isArrayLike(obj)){
    key = _.findIndex(obj,predicate,context);
  }else{
    key = _.findKey(obj,predicate,context);
  }
  if(key !== void 0 && key !== -1)return obj[key];
}


