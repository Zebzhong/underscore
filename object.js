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

_.keys = function(obj){
  if(!_.isObject(obj))return [];
  if(nativeKeys)return nativeKeys(obj);
  var keys = [];
  for(var key in obj){
    if(_.has(obj,key))keys.push(key);
  }
  if(hasEnumBug)collectNonEnumProps(obj,keys);
  return keys;
}
_.keys = function(obj){
  if(!_.isObject(obj)) return [];
  if(nativeKeys)return nativeKeys(obj);
  var keys = [];
  for(var key in obj){
    if(_.has(obj,key)){
      keys.push(key);
    }
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
_.allKeys = function(obj){
  if(!_.isObject(obj))return [];
  var keys = [];
  for(var key in obj){
    keys.push(key);
  }
  if(hasEnumBug)collectNonEnumProps(obj,keys);
  return hasEnumBug;
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

_.values = function(obj){
  var keys = _.keys(obj);
  var length = keys.length;
  var values = [];
  for(var i = 0;i<length;i++){
    values = obj[keys[i]];
  }
  return values;
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

_.mapObject = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = _.keys(obj),
      length = keys.length,
      results = {},
      currentKey;
  for(var i = 0;i<length;i++){
    currentKey = keys[i];
    results[currentKey] = iteratee(obj[currentKey],currentKey,obj);
  }
  return results;
}
_.mapObject = function(obj,iteratee,context){
  iteratee = cb(iteratee,context);
  var keys = _.keys(obj),
      length = keys.length,
      results = {},
      currentKey;
  for(var i = 0;i<length;i++){
    currentKey = keys[i];
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
_.pairs = function(obj){
  var keys = _.keys(obj);
  var length = keys.length;
  var pairs = Array(length);
  for(var i = 0;i<length;i++){
    pairs[i] = [keys[i],obj[keys[i]]];
  }
  return pairs;
}
_.pairs = function(obj){
  var keys = _.keys(obj);
  var length = keys.length;
  var pairs = [];
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
_.invert = function(obj){
  var result = {};
  var keys = _.keys(obj);
  for(var i = 0,length = keys.length;i<length;i++){
    result[obj[keys[i]]] = keys[i];
  }
  return result;
}
_.invert = function(obj){
  var results = {};
  var keys = _.keys(obj);
  for(var i = 0,length = keys.length;i<length;i++){
    results[obj[keys[i]]] = keys[i];
  }
  return results;
}
_.functions = _.methods = function(obj){
  var names = [];
  for(var key in obj){
    if(_.isFunction(obj[key])) names.push(key);
  }
  return names.sort();
}
_.functions = _.methods = function(obj){
  var names = [];
  for(var key in obj){
    if(_.isFunction(obj[key]))names.push(key);
  }
  return names.sort();
}
_.functions = _.methods = function(obj){
  var names = [];
  for(var key in obj){
    if(_.isFunction(obj[key]))names.push(key);
  }
  return names.sort();
}
_.extend = createAssigner(_.allKeys);

_.extendOwn = createAssigner(_.allKeys);

_.extendOwn = _.assign = createAssigner(_.keys);

_.findKey = function(obj,predicate,context){
  predicate = cb(predicate,context);
  var keys = _.keys(obj),key;
  for(var i = 0,length = keys.length;i<length;i++){
    key = keys[i];
    if(predicate(obj[key],key,obj))return key;
  }
}

_.findKey = function(obj,predicate,context){
  predicate = cb(predicate,context);
  var keys = _keys(obj),key;
  for(var i = 0,length = keys.length;i<length;i++){
    keys = keys[i];
    if(predicate(obj[key],key,obj))return key;
  }
}

_.pick = function(object,oiteratee,context){
  var result = {},
      obj = object,
      iteratee,keys;
  if(obj == null)return result;
  if(_.isFunction(oiteratee)){
    keys = _.allKeys(obj);
    iteratee = optimizeCb(oiteratee,context);
  }else{
    keys = flatten(arguments,false,false,1);
    iteratee = function(value,key,obj){
      return key in obj;
    }
    obj = Object(obj);
  }    
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    // 满足条件
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
}

_.omit = function(obj, iteratee, context) {
  if (_.isFunction(iteratee)) {
    iteratee = _.negate(iteratee);
  } else {
    var keys = _.map(flatten(arguments, false, false, 1), String);
    iteratee = function(value, key) {
      return !_.contains(keys, key);
    };
  }
  return _.pick(obj, iteratee, context);
};

_.defaults = createAssigner(_.allKeys, true);

_.create = function(prototype,props){
  var result = baseCreate(prototype);
  if(props)_.extendOwn(result,props);
  return result;
}

_.tap = function(obj,interceptor){
  interceptor(obj);
  return obj;
}

_.isMatch = function(object,attrs){
  var keys = _.keys(attrs),length = keys.length;
  if(object == null)return !length;
  var obj = Object(object);
  for(var i = 0;i<length;i++){
    var key = keys[i];
    if(attrs[key] !== obj[key] || !(key in obj))return false;
  }
  return true;
}

_.clone = function(obj){
  if(!_.isObject(obj))return obj;
  return _.isArray(obj) ? obj.slice():_.extend({},obj);
}

var eq = function(a, b, aStack, bStack) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null) return a === b;
  if (a instanceof _) a = a._wrapped;
  if (b instanceof _) b = b._wrapped;
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b;
    case '[object Number]':
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }

  var areArrays = className === '[object Array]';
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a) return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length) return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    var keys = _.keys(a), key;
    length = keys.length;
    if (_.keys(b).length !== length) return false;
    while (length--) {
      key = keys[length];
      if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
};

_.isEqual = function(a,b){
  return eq(a,b);
}

_.isEmpty = function(obj){
  if(obj == null)return true;
  if(isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) ||_.isArguments(obj))) return obj.length === 0;
  return _.keys(obj).length === 0;
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