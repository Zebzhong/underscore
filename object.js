var hasEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = [
  'valueOf',
  'isPrototypeOf',
  'toString',
  'propertyIsEnumerable',
  'hasOwnProperty',
  'toLocaleString'
];
function collectNonEnumProps(obj,keys){
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = (_.isFunction(constructor) && constructor.prototype) || objProto;

  var prop = 'constructor';
  if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
      keys.push(prop);
    }
  }
}

_.keys = function(obj){
  if(!_.isObject(obj))return [];
  if(nativeKeys)return nativeKeys(obj);
  var keys = [];
  for(var key in obj){
    if(_.has(obj,key)) keys.push(key);
  }
  if(hasEnumBug)collectNonEnumProps(obj,keys);
  return keys;
}

_.allKeys = function(obj){
  if(!_.isObject(obj))return [];
  var keys = [];
  for(var key in obj){
    keys.push(key);
  }
  if(hasEnumBug)collectNonEnumProps(obj,keys);
  return keys;
}

_.values = function(obj){
  var keys = _.keys(obj);
  var length = keys.length;
  var values = Array(length);
  for(var i = 0;i<length;i++){
    values[i] = obj[keys[i]];
  }   
  return values; 
}

_.mapObject = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = _.keys(obj),
      length = keys.length,
      results = {},
      currentKey;
  for(var i = 0;i<l;i++){
    var currentKey = keys[i];
    results[currentKey] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}

_.pairs = function(obj){
  var keys = _.keys(obj);
  var length = keys.length;
  var pairs = Array(length);
  for(var i = 0;i<length;i++){
    pairs[i] = [keys[i],obj[keys[i]]];
  }
  return pairs;
}

_.invert = function(obj){
  var result = {};
  var keys = _.keys(obj);
  for(var i = 0,length = keys.length;i<length;i++){
    result[obj[keys[i]]] = keys[i];
  }
  return result;
}

_.functions = _.methods = function(obj){
  var names = [];
  for(var key in obj){
    if(_.isFunction(obj[key])) names.push(key);
  }
  return names.sort();
}

_.extend = createAssigner(_.allKeys);

_.extendOwn = _.assign = createAssigner(_.keys);

_.findKey = function(obj,predicate,context){
  predicate = cb(predicate,context);
  var keys = _.keys(obj),key;
  for(var i = 0,length = keys.length;i<length;i++){
    key = keys[i];
    if(predicate(obj[key],key,obj))return key;
  }
}

_.isArray = nativeIsArray || function(obj) {
  return toString.call(obj) === '[object Array]';
};

_.isElement = function(obj){
  return !!(obj && obj.nodeType === 1 );
}  

_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

_.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'],function(name){
  _['is'+name] = function(obj){
    return toString.call(obj) === '[object '+name+']';
  }
})

if (!_.isArguments(arguments)) {
  _.isArguments = function(obj) {
    return _.has(obj, 'callee');
  };
}

if (typeof /./ != 'function' && typeof Int8Array != 'object') {
  _.isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

_.isFinite = function(obj){
  return isFinite(obj) && !isNaN(parseFloat(obj));
}

_.isNaN = function(obj){
  return _.isNumber(obj) && obj !== +obj;
}

_.isBoolean = function(obj){
  return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
}

_.isNull = function(obj){
  return obj === null;
}

_.isUndefined = function(obj){
  return obj === void 0;
}

_.has = function(obj,key){
  return obj != null && hasOwnProperty.call(obj,key);
}