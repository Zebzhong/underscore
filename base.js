(function () {

  // Baseline setup -------------- Establish the root object, `window` in the
  // browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype,
    ObjProto = Object.prototype,
    FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use are
  // declared here.
  var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeBind = FuncProto.bind,
    nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function () {};

  // Create a safe reference to the Underscore object for use below.
  var _ = function (obj) {
    if (obj instanceof _) 
      return obj;
    if (!(this instanceof _)) 
      return new _(obj);
    this._wrapped = obj;
  };

  var _ = function(obj){
    if(obj instanceof _)
      return obj;
    if(!(this instanceof _)){
      return new _(obj);
    }
    this._wrapped = obj;
  }
  // Export the Underscore object for **Node.js**, with backwards-compatibility
  // for the old `require()` API. If we're in the browser, add `_` as a global
  // object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version of
  // the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function (func, context, argCount) {
    if (context === void 0) 
      return func;
    switch (argCount == null? 3: argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      case 2:
        return function (value, other) {
          return func.call(context, value, other);
        };
      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function () {
      return func.apply(context, arguments);
    };
  };
  var optimizeCb = function(func,context,argCount){
    if(context === void 0) return func;
    switch(argCount ? argCount : 3){
      case 1:
        return function(value){
          return func.call(context,value);
        }
      case 2:
        return function(value,other){
          return func.call(context,value,other);
        } 
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection)
        }
      case 4:
        return function(accumulator, value, index, collection){
          return func.call(accumulator, value, index, collection);
        }     
    }
    return function(){
      return func.apply(context,arguments);
    }
  }
  var optimizeCb = function(func,context,argCount){
    if(context === void 0)return func;
    switch(argCount ? argCount : 3){
      case 1:
        return function(value){
          return func.call(context,value);
        }
      case 2:
        return function(value,other){
          return func.call(context,value,other);
        }
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection);
        }
      case 4:
        return function(accumulator,value,index,collection){
          return func.call(context,accumulator,value,index,collection);
        }
    }
    return function(){
      return func.apply(context,arguments);
    }
  }
  var optimizeCb = function(func,context,argCount){
    if(context === void 0)return func;
    switch(argCount ? argCount : 3){
      case 1:
        return function(value){
          return func.call(context,value);
        }
      case 2:
        return function(value,other){
          return func.call(context,value,other);
        } 
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection);
        }   
      case 4:
        return function(accumulator,value,index,collection){
          return func.call(context,value,index,collection,accumulator)
        }
    }
    return function(){
      return func.apply(context,arguments);
    }
  }
  var optimizeCb = function(func,context,argCount){
    if(context === void 0)return func;
    switch(argCount ? argCount : 3){
      case 1:
        return function(value){
          return func.call(context,value);
        }
      case 2:
        return function(value,other){
          return func.call(context,value,other);
        }  
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection);
        }
      case 4:
        return function(value,index,collection,accumulator){
          return func.call(context,value,index,collection,accumulator)
        }
    }
    return function(){
      return func.apply(context,arguments);
    }
  }
  // A mostly-internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either identity, an
  // arbitrary callback, a property matcher, or a property accessor.
  var cb = function (value, context, argCount) {
    if (value == null) 
      return _.identity;
    if (_.isFunction(value)) 
      return optimizeCb(value, context, argCount);
    if (_.isObject(value)) 
      return _.matcher(value);
    return _.property(value);
  };
  var cb = function(value,context,argCount){
    if(value == null)
      return _.identity(value);
    if(_.isFunction(value))
      return optimizeCb(value,context,argCount);
    if(_.isObject(value))
      return _.matcher(value);
   /*  _.matcher = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    }   */
    return _.property(value);
  }
  var cb = function(value,context,argCount){
    if(value == null)return _.identity(value);
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /* _.matcher = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    } */
    return _.property(value);
  }
  _.iteratee = function (value, context) {
    return cb(value, context, Infinity);
  };
  var cb = function(value,context,argCount){
    if(value == null)return _.identity(value);
    if(_.isFunction(value))return _.optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /* _.matcher = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    } */
    return _.property(value);
    /* var property = _.property = function(key){
      return function(obj){
        return obj == null ? void 0 : obj[key];
      }
    } */
  }
  var cb = function(value,context,argCount){
    if(value == null) return _identity(value);
    /* _.identity = function(value){
      return value;
    } */
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /* _.matcher = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    } */
    return _.property(value);
   /*  var property = _.property = function(key){
      return function(obj){
        return obj == null ? void 0 : obj[key];
      }
    } */
  }
  var cb = function(value,context,argCount){
    if(value == null ) return _.identity(value);
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /* _.matcher = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    } */
    return _.property(value)
  }
  var cb = function(value,context,argCount){
    if(value == null)return _.identity(value);
   /*  _.identity = function(value){
      return value;
    } */
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /* _.matcher= function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    } */
    return _.property(value);
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<lenght;index++){
        var source = arguments[index],
            keys = keysFunc(source),
            len = keys.length;
        for(var i = 0;i<length;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0)
            obj[key] = source[key];
        }    
      }
      return obj;
    }
  }
  // An internal function for creating assigner functions.
  var createAssigner = function (keysFunc, undefinedOnly) {
    return function (obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) 
        return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) 
            obj[key] = source[key];
          }
        }
      return obj;
    };
  };
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        } 
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[i],
            keys = keysFunc(source),
            l = keys.length;
        for(var i=0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        }    
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null ) return obj;
      for(var index = 1;index < length;index++){
        var source = arguments[index],
            keys = _.keys(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        }
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key]  === void 0){
            obj[key] = source[key];
          }
        }
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index];
        var keys = _.keys(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0)
            obj[key] = source[key];
        }
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
            keys = keysFunc(source),
            len = keys.length;
        for(var i = 0;i<len;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        }    
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
            keys = _.keys(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        }
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
            keys = _.keys(obj),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        }
      }
      return obj;
    }
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i]
          if(!undefinedOnly || obj[key] === void 0){
            obj[key] = source[key];
          }
        }
      }
      return obj;
    }
  }
  // An internal function for creating a new object that inherits from another.
  var baseCreate = function (prototype) {
    if (!_.isObject(prototype)) 
      return {};
    if (nativeCreate) 
      return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };
  var baseCreat = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate)return nativeCreate(prtotype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var baseCreate = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate)return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var baseCreate = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate)return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var baseCreate = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var baseCreate = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate)return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var baseCreate = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate)nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var baseCreate = function(prototype){
    if(!_.isObject(prototype))return {};
    if(nativeCreate)nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }
  var property = function (key) {
    return function (obj) {
      return obj == null
        ? void 0
        : obj[key];
    };
  };
  var property = function(key){
    return function(obj){
      return obj == null ? void 0 : obj[key];
    }
  }
  var property = function(key){
    return function(obj){
      return obj == null ? void 0 : obj[key];
    }
  }
  var property = function(key){
    return function(obj){
      return obj == null ? void 0 : obj[key];
    }
  }
  var property = function(key){
    return obj == null ? void 0 : obj[key];
  }
  var property = function(key){
    return obj == null ? void 0 : obj[key];
  }
  // Helper for collection methods to determine whether a collection should be
  // iterated as an array or as an object Related:
  // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength Avoids a
  // very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var getLength = property('length');
  var isArrayLike = function (collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };
  var isArrayLike = function(collection){
    var length = getLength(collection);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  }
  // Collection Functions Array Functions Function (ahem) Functions Object
  // Functions Utility Functions Add a "chain" function. Start chaining a wrapped
  // Underscore object.
  _.chain = function (obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  _.chain = function(obj){
    var instance = _(obj);
    instance._chain = true;
    return instance;
  }

  _.chain = function(obj){
    var instance = _(obj);
    instance._chain = true;
    return instance;
  }
  // OOP --------------- If Underscore is called as a function, it returns a
  // wrapped object that can be used OO-style. This wrapper holds altered versions
  // of all the underscore functions. Wrapped objects may be chained. Helper
  // function to continue chaining intermediate results.
  var result = function (instance, obj) {
    return instance._chain ?  _(obj).chain() : obj;
  };
  var result = function (instance,obj){
    return instance._chain ?　_(obj).chain() : obj;
  }
  var result = function(instance,obj){
    return instance._chain ? _(obj).chain() : obj;
  }

  _.chain = function(obj){
    var instance = _(obj);
    instance._chain = true;
    return instance;
  }

  var result = function(instance,obj){
    return instance._chain ? _(obj).chain() : obj;
  }
  // 可向 underscore 函数库扩展自己的方法
  // obj 参数必须是一个对象（JavaScript 中一切皆对象）
  // 且自己的方法定义在 obj 的属性上
  // 如 obj.myFunc = function() {...}
  // 形如 {myFunc: function(){}}
  // 之后便可使用如下: _.myFunc(..) 或者 OOP _(..).myFunc(..)
  // Add your own custom functions to the Underscore object.
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };
  _.mixin = function(obj){
    _.each(_.functions(obj),function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function(){
        var args = [this._wrapped];
        push.apply(args,arguments);
        return result(this,func.apply(_,args));
      }
    })
  }
  _.mixin = function(obj){
    _.each(_.functions(obj),function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function(){
        var args = [this._wrapped];
        push.apply(args,arguments);
        return result(this,func.apply(_,args));
      }
    })
  }
  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each([
    'pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'
  ], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) 
        delete obj[0];
      return result(this, obj);
    };
  });
  _.each([
    'pop',
    'push',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ],function(name){
    var method = ArrayProto[name];
    _.prototype[method] = function(){
      var obj = this._wrapped;
      method.apply(obj,arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) 
        delete obj[0];
      return result(this,obj);
    }
  })
  //将原生的数组方法加到underscore的原型上，这些方法是改变原数组的
  _.each(['pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'],function(name){
      var method = ArrayProto[name];
      _.prototype[name] = function(){
        var obj = this._wrapped;
        method.apply(obj,arguments);
        if((name === 'shift' || name === 'splice') && obj.length === 0){
          delete obj[0];
        }
        return result(this,obj);
      }
    })
  _.each(['pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'],function(name){
      var method = ArrayProto[name];
      _.prototype[name] = function(){
        var obj = this._wrapped
        method.apply(obj,arguments);
        if((name === 'shift' || name === 'splice') && obj.length === 0){
          delete obj[0];
        }
        return result(this,obj);
      }
    })  
  // Add all accessor Array functions to the wrapper.
    //将原生的数组方法加到underscore的原型上，这些方法是不改变原数组的
  _.each(['concat', 'join', 'slice'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });
  _.each(['concat', 'join', 'slice'],function(name){
    var method = ArrayProto[name];
    _.prototype[name] = function(){
      return result(this,method.apply(this._wrapped,arguments));
    }
  })
  _each(['concat','join','slice'],function(name){
    var method = ArrayProto[name];
    _.prototype[name] = function(){
      return result(this,method.apply(this._wrapped,arguments))
    }
  })
  _.each(['concat','join','slice'],function(name){
    var method = ArrayProto[name];
    _.prototype[name] = function(){
      return result(this,method.apply(this._wrapped,arguments))
    }
  })
  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function () {
    return this._wrapped;
  };

  _.prototype.value = function(){
    return this._wrapped;
  }
  // Provide unwrapping proxy for some methods used in engine operations such as
  // arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function () {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders that
  // may not enforce next-turn semantics on modules. Even though general practice
  // for AMD registration is to be anonymous, underscore registers as a named
  // module because, like jQuery, it is a base library that is popular enough to
  // be bundled in a third party lib, but not be part of an AMD load request.
  // Those cases could generate an error when an anonymous define() is called
  // outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function () {
      return _;
    });
  }
}.call(this));