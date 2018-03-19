var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}
_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (_.isFunction(func)) 
    throw new TypeError('Bind must be a funciton');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}

var executeBound = function(sourceFunc,boundFunc,context,callingContext,args){
  if(!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context,args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self,args);
  if(_.isObject(result))return result;
  return self;
}

_.bind = function(func,context){
  if(nativeBind && func.bind === nativeBind)
    return nativeBind.call(func,slice.call(arguments,1));
  if(!_.isFunction(func))
    throw new TypeError('Bind must be a funciton');
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
  }
  return bound;
}
var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}

_.bind = function (func, context) {
  if (nativeBind && func.bind == nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called on a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)))
  }
  return bound;
}

var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}
_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}
var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}
_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}

var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}

_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}

var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}

_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}
var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) {
    return sourceFunc.apply(context, args);
  }
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isObject(result)) 
    return result;
  return self;
}
_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}
var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) 
    return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (_.isFunction(result)) 
    return result;
  return self;
}
_.bind = function (func, context) {
  if (nativeBind && func.bind === nativeBind) 
    return nativeBind.apply(func, slice.call(arguments, 1));
  if (!_.isFunction(func)) 
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments, 2);
  var bound = function () {
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  }
  return bound;
}
// var subtract = function(a, b) { return b - a; };
// sub5 = _.partial(subtract, 5);
// sub5(20);
// => 15
// // Using a placeholder
// subFrom20 = _.partial(subtract, _, 20);
// subFrom20(5);
// => 15
_.partial = function(func){
  var boundArgs = slice.call(arguments,1);
  var bound = function(){
    var position = 0,
      length = boundArgs.length;
    var args = Array(length);
    for(var i = 0;i<length;i++){
      args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
    } 
    while(position <arguments.length)
      args.push(arguments[position++]);
    return executeBound(func,bound,this,this,args);
  }
  return bound;
}
_.partial = function(func){
  var boundArgs = slice.call(arguments,1);
  var bound = function(){
    var position = 0,
        length = boundArgs.length;
    var args = Array(length);
    for(var i = 0;i<length;i++){
      args[i] = boundArgs[i] === _ ? arguments[position++]:boundArgs[i];
    }
    while(position < arguments.length)
      args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  }
  return bound;
}
_.partial = function (func) {
  var boundArgs = slice.call(arguments, 1);
  var bound = function () {
    var position = 0,
      length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === _
        ? arguments[position++]
        : boundArgs[i];
    }
    while (position < arguments.length) 
      args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
};
_.partial = function (func) {
  var boundArgs = slice.call(arguments, 1);
  var bound = function () {
    var position = 0,
      length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === _
        ? arguments[position++]
        : boundArgs[i];
    }
    while (position < arguments.length) 
      args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  }
  return bound;
}
_.partial = function (func) {
  var bindArgs = slice.call(arguments, 1);
  var bound = function () {
    var args = Array(length),
      length = bindArgs.length
    position = 0;
    for (var i = 0; i < length; i++) {
      args[i] = bindArgs[i] === _
        ? arguments[position++]
        : bindArgs[i];
    }
    while (position < arguments.length) 
      args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  }
  return bound;
}
// var buttonView = {
//   label  : 'underscore',
//   onClick: function(){ alert('clicked: ' + this.label); },
//   onHover: function(){ console.log('hovering: ' + this.label); }
// };
// _.bindAll(buttonView, 'onClick', 'onHover');
// // When the button is clicked, this.label will have the correct value.
// jQuery('#underscore_button').bind('click', buttonView.onClick);
_.bindAll = function(obj){
  var i,length = arguments.length,key;
  if(length <= 1)
    throw new Error('bindAll must be passed function names');
  for(var i = 1;i<length;i++){
    key = arguments[i];
    obj[key] = _.bind(obj[key],obj);
  } 
  return obj; 
}
_.bindAll = function (obj) {
  var i,
    length = arguments.length,
    key;
  if (length <= 1) 
    throw new Error('bindAll must be passed function names');
  for (i = 1; i < length; i++) {
    key = arguments[i];
    obj[key] = _.bind(obj[key], obj);
  }
  return obj;
};

_.bindAll = function(obj){
  var i,
    length = arguments.length,
    key;
  if(length <= 1)
    throw new Error('bindAll must be passed function names');
  for(i = 1;i<length;i++){
    key = arguments[i];
    obj[key] = _.bind(obj[key],obj);
  }
  return obj;
}
// var fibonacci = _.memoize(function(n) {
//   return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
// });
_.memoize = function(func,hasher){
  var memoize = function(key){
    var cache = memoize.cache;
    var address = ''+(hasher ? hasher.apply(this,arguments):key);
    if(!_.has(cache,address))cache[address] = func.apply(this,arguments);
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}
_.memoize = function(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
};
_.memoize = function(func,hasher){
  var memoize = function(key){
    var cache = memoize.cache;
    var address = ''+(hasher ? hasher.apply(this,arguments):key);
    if(!_.has(cache,address))
      cache[address] = func.apply(this,arguments);
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}

_.memoize = function(func,hasher){
  var memoize = function(key){
    var cache = memoize.cache;
    var address = ''+(hasher ? hasher.apply(this,arguments):key);
    if(!_.has(cache,address))
      cache[address] = func.apply(this,arguments);
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}
_.delay = function(func, wait) {
  var args = slice.call(arguments, 2);
  return setTimeout(function(){
    return func.apply(null, args);
  }, wait);
};
_.delay = function(func,wait){
  var args = slice.call(arguments,2);
  return setTimeout(function(){
    return func.apply(null,args);
  },wait)
}
_.defer = _.partial(_.delay, _, 1);

_.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = _.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

_.wrap = function(func, wrapper) {
  return _.partial(wrapper, func);
};
_.partial = function(func){
  var boundArgs = slice.call(arguments,1);
  var bound =  function(){
    var position = 0,
        length = boundArgs.length,
        args = Array(length);
    for(var i = 0;i<length;i++)
      args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];    
    while(position < arguments.length)
      args.push(arguments[position]);
    return executeBound(func,bound,this,this,args);
  }
  return bound;
}
_.negate = function(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
};
_.negate = function(predicate){
  return function(){
    return !predicate.apply(this,arguments);
  }
}
// var greet    = function(name){ return "hi: " + name; };
// var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
// var welcome = _.compose(greet, exclaim);
// welcome('moe');
// => 'hi: MOE!'
_.compose = function(){
  var args = arguments;
  var start = args.length - 1;
  return function(){
    var i = start;
    var result = args[start].apply(this,arguments);
    while(i--)
      result  = args[i].call(this,result);
    return result;
  }
}
_.compose = function() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
};
// -----------------------------------------------------------
var executeBound = function(sourceFunc,boundFunc,context,callingContext,args){
  if(!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context,args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self,args);
  if(_.isObject(result))return result;
  return self;
}
_.bind = function(func,context){
  if(nativeBind && func.bind === nativeBind)
    return nativeBind.call(func,slice.call(arguments,1));
  if(_.isFunction(func))
    throw new TypeError(''); 
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
  }
  return bound;
}

_.bindAll = function(obj){
  var i,length=arguments.length,key;
  if(length <= 1)
    throw new Error('bindAll must be passed function names');
  for(var i = 1;i<length;i++){
    key = arguments[i];
    obj[key] = _.bind(obj[key],obj);
  }
  return obj;
}

_.partial = function(func){
  var boundArgs = slice.call(arguments,1);
  var bound = function(){
    var position = 0,
        length = boundArgs.length,
        args = Array(length);
    for(var i = 0;i<length;i++){
      args[i] = boundArgs[i] === _ ? boundArgs[position++] : boundArgs[i];
    }    
    while(position < arguments.length)
      args.push(arguments[position++]);
  }
  return bound;
}

_.memoize = function(func,hasher){
  var memoize = function(key){
    var cache = memoize.cache;
    var address = ''+(hasher ? (hasher.apply(this,arguments)):key);
    if(!_.has(cache,address))
      cache[address] = func.apply(this,arguments);
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}

