var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
  if(!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context,args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self,args);
  if(_.isObject(result))return result;
  return self;
}
_.bind = function(func,context){
  if(nativeBind && func.bind === nativeBind)
    return nativeBind.apply(func,slice.call(arguments,1));
  if(_.isFunction(func))
    throw new TypeError('Bind must be a funciton');
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
  }
  return bound;
}

var executeBound = function(sourceFunc,boundFunc,context,callingContext,args){
  if(!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context,args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self,args);
  if(_.isObject(result))
    return result;
  return self;
}

_.bind = function(func,context){
  if(nativeBind && func.bind == nativeBind)
    return nativeBind.apply(func,slice.call(arguments,1));
  if(!_.isFunction(func))
    throw new TypeError('Bind must be called on a function');
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)))
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
    return nativeBind.apply(func,slice.call(arguments,1));
  if(!_.isFunction(func))
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
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
    return nativeBind.apply(func,slice.call(arguments,1));
  if(!_.isFunction(func))
    throw  new TypeError('Bind must be called a function');
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
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
    return nativeBind.apply(func,slice.call(arguments,1));
  if(!_.isFunction(func))
    throw new TypeError('Bind must be called a function');
  var args = slice.call(arguments,2);
  var bound = function(){
    return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
  }
  return bound;
}