(function() {

  //保存根对象，在浏览器下是window,在服务器下是exports
  var root = this;

  //保留变量_之前的值，即在window(exports)中有用过此符号做为变量
  var previousUnderscore = root._;

  //实现更少的字节和作用域链查找
  var ArrayProto = Array.prototype,
    ObjProto = Object.prototype,
    FuncProto = Function.prototype;

  var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

  //ES5的原生方法  
  var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeBind = FuncProto.bind,
    nativeCreate = Object.create;

  //空函数
  var Ctor = function() {};
  //确保获得的是_的实例
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this.wrapped = obj;
  }

  //对Node.js的扩展
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  _.VERSION = '1.8.3';

  var optimizeCb = function(value,context,argCount){
    if(context === void 0)return func;
    switch(argCount == null ? 3 : argCount){
      case 1:
        return function(value){
          return func.call(context,value)
        };
      case 2:
        return function(value,other){
          return func.call(context,value,other)
        };
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection);
        }; 
      case 4:
        return function(accumlator,value,index,collection){
          return func.call(context,accumlator,value,index,collection)
        }; 
    }
    return function(){
      return func.apply(context,arguments);
    }     
  }
  var optimizeCb = function(func,context,argCount){
    if(context == null) return func;
    switch(argCount == null ? 3 : argCount){
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
        return function(accumlator,value,index,collect){
          return func.call(context,accumlator,value,index,collect)
        };     
    }
    return function(){
      return func.apply(context,arguments)
    }
  }
  var optimizeCb = function(func,context,argCount){
    if(context == null)return func;
    switch(argCount == null ? 3 : argCount){
      case 1:
        return function(value){
          return func.call(context,value)
        };
      case 2:
        return function(value,other){
          return func.call(context,value,other)
        };
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection)
        };
      case 4:
        return function(accumlator,value,index,collection){
          return func.call(context,accumlator,value,index,collection)
        };      
    }
    return function(){
      return func.apply(context,arguments);
    }
  }
  var optimizeCb = function(func,context,argCount){
    if(context == null)return func;
    switch(argCount== null ? 3 : argCount ){
      case 1:
        return function(value){
          return func.call(context,value)
        };
      case 2:
        return function(value,other){
          return func.call(context,value,other)
        }
      case 3:
        return function(value,index,collection){
          return func.call(context,value,index,collection)
        };
      case 4:
        return function(accumlator,value,index,collection){
          return func.call(context,accumlator,value,index,collection)
        };      
    }
    return function(){
      return func.apply(context,arguments);
    }
  }
  //传入undefined和null时返回一个函数function(value){return value}
  var cb = function(value,context,argCount){
    if(value == null )return _.identity;
    /*_.identity = function(value) {
      return value;
    };*/
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /*_.matcher = _.matches = function(attrs) {
        attrs = _.extendOwn({}, attrs);
        return function(obj) {
          return _.isMatch(obj, attrs);
        };
    };*/
    return _.property(value);
   /*var property = function(key) {
        return function(obj) {
          return obj == null ? void 0 : obj[key];
        };
      };
    */
    //_.property = property;
  }
  var cb = function(value,context,argCount){
    if(value == null) return _.identity;
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /*_.matcher =  _.matches = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    }*/
    return _.property(value);
    /*var property = _.property = function(key){
        return function(obj){
          return obj == null ? void 0 : obj[key];
        }
    } 
    */
  }
  var cb = function(value,context,argCount){
    if(value == null)return _.identity;
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    /* _.matcher = _.matches = function(attrs){
      attrs = _.extendOwn({},attrs);
      return function(obj){
        return _.isMatch(obj,attrs);
      }
    } */
    return property(value);
    /* var property = _.property = function(key){
      return function(obj){
        return obj == null ? void 0 : obj[key];
      }
    } */
  }
  var cb = function(value,context,argCount){
    if(value == null) return _.identity;
    /* _.identity = function(value){
      return value;
    } */
    if(_.isFunction(value))return optimizeCb(value,context,argCount);
    if(_.isObject(value))return _.matcher(value);
    // _.matcher = function(attrs){
    //   attrs = _.extendOwn({},attrs);
    //   return function(obj){
    //     return _.isMatch(obj,attrs);
    //   }
    // }
    return property(value);
    /* var property = _.property = function(key){
      return function(obj){
        return obj == null ? void 0 : obj[key];
      }
    } */
  }
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  _.iteratee = function(value,context){
    return cb(value,context,Infinity);
  }
  var createAssigner = function (keysFunc,undefinedOnly) {
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index];
        var keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i < l;i++){
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
      for(var index = 1 ; index<length;index++){
        var source = arguments[index];
        var keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly && obj[key] === void 0){
            obj[key] = source[key]
          }
        }    
      }
    }
    return obj;
  }
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length < 2 || obj == null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index];
        var keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly && obj[key] === void 0){
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
        var keys = keysFunc(source),
            l = keys.length;
        for(var i = 0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly && obj[key] === void 0){
            obj[key] = source[key];
          }
        }    
      }
      return obj;
    }
  }
  //传入一个原型，生成一个带有空对象的原型，用来实现继承
  var baseCreate = function(prototype) {

    //参数不是对象，则返回一个空对象
    if (!_.isObject(prototype)) return {};

    if (nativeCreate) return nativeCreate(prototype);

    //模拟Object.create函数，生成一个具有的继承父亲prototype的空对象
    //可以用来实现继承
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
    if(nativeCreate) return nativeCreate(prototype);
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
  //闭包，获取对象的值，如果对象中没有该key，则创建一个
  //值为undenfined
  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    }
  }
    //Math.pow(2, 53) - 1 是 JavaScript 中能精确表示的最大数字
  var MAX_ARRAY_INDEX = Math.pow(2,53) - 1;

  //该函数传入一个对象参数，来获取对象参数的length值
  // 用来获取 array 以及 arrayLike 元素的 length 属性值
  var getLength = property('length');
  var getLength = property('length');
  var property = function(key){
    return function(obj){
      return obj == null ? void 0 : obj[key];
    }
  }
  // 判断是否是 ArrayLike Object
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  }
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  }
  var isArrayLike = function(collection){
    var length = getLength('length');
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  }
  var isArrayLike = function(collection){
    var length = getLength(collection);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  }
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
        iteratee(obj[keys[i]],keys[i],obj);
      }
    }
    return obj;
  }
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
        iteratee(obj[keys[i]],keys[i],obj);
      }
    }
  }
  _.each = _.forEach = function(obj,iteratee,context){
    iteratee = optimizeCb(iteratee,context);
    var i,length;
    if(isArrayLike(obj)){
      for(i = 0,length = obj.length;i<length;i++){
        iteratee(obj[i],i,obj);
      }
    }else{
      var keys = _.keys(obj),
          length = keys.length;
      for(i = 0;i<length;i++){
        var key = keys[i];
        iteratee(obj[key],key,obj);
      }
    }
  }
  _.each = _.forEach = function(obj,iteratee,context){
    iteratee = optimizeCb(iteratee,context);
    var i,length;
    if(isArrayLike(obj)){
      for(i = 0;i<length;i++){
        iteratee(obj[i],i,obj);
      }
    }else{
      var keys = _.keys(obj),
          length = keys.length;
      for(i=0;i<length;i++){
        var key = keys[i];
        iteratee(obj[key],key,obj);
      }
    }
  }
  _.map = _.collect = function(obj, iteratee, context) {
    // 根据 context 确定不同的迭代函数
    iteratee = cb(iteratee, context);

    //如果传入的是对象，则获取他的keys数组
    var keys = !isArrayLike(obj) && _.keys(obj),
      // 如果 obj 为对象，则 length 为 key.length
      // 如果 obj 为数组或伪数组，则 length 为 obj.length
      length = (keys || obj).length;
    results = Array(length);

    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  }
  _.map = _.collect = function(obj,iteratee,context){
    iteratee = cb(iteratee,context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for(var index = 0;index<length;index++){
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey],currentKey,obj);
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
  function createReduce(dir) {
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }
    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj);
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length)
    }
  }
  function createReduce(dir){
    function iterator(obj,iteratee,memo,keys,index,length){
      for(;index >=0&& index<length;index+=dir){
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo,obj[currentKey],currentKey,obj);
        return memo;
      }
    }
    return function(obj,iteratee,memo,context){
      iteratee = optimizeCb(iteratee,context,4);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            index = dir > 0 ? 0 : length - 1;
        if(arguments.length<3){
          memo = obj[keys ? keys[index]:index];
          index += dir;
        }
        return iterator(obj,iteratee,memo,keys,index,length)
    }
  }
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    // 如果是对象，返回由对象values 组成的数组
    if (!isArrayLike(obj)) obj = _.values(obj);

    // fromIndex 表示查询起始位置
    // 如果没有指定该参数，则默认从头找起
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;

    // _.indexOf 是数组的扩展方法（Array Functions）
    // 数组中寻找某一元素
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  _.contains = _.includes = _.include = function(obj,item,fromIndex,guard){
    if(!isArrayLike(obj)) obj = _.values(obj);
    /*_.values = function(obj){
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
        values[i] = obj[keys[i]];
      }
      return values;
    }
    */
    if(typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj,item,fromIndex) >= 0;
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
  _.find = _.detect = function(obj,predicate,context){
    var key;
    if(isArrayLike(obj)){
      key = _.findIndex(obj,predicate,context);
    }else{
      key = _.findKey(obj,predicate,context);
    }
    if(key !== void 0 && key !== -1) return obj[key];
  }

  _.filter = _.select = function(obj,predicate,context){
    var results = [];
    predicate = cb(predicate,context);
    _.each(obj,function(value,index,list){
      if(predicate(value,index,list))results.push(value);
    })
    return results;
  }

  _.filter = _.select = function(obj,predicate,context){
    var results = [];
    predicate = cb(predicate,context);
    _.each(obj,function(value,index,list){
      if(predicate(value,index,list))results.push(value);
    })
    return results;
  }

  _.reject = function(obj,predicate,context){
    return _.filter(obj,_.negate(cb(predicate)),context);
  }
  _.every = _.all = function(obj,predicate,context){
    predicate = cb(predicate,context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for(var index = 0;index<length;index++){
      var currentKey = keys ? keys[index] : index;
      if(!predicate(obj[currentKey],currentKey,obj))
        return false;
    } 
    return true;   
  }
  _.some = _.any = function(obj,predicate,context){
    predicate = cb(predicate,context);

    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for(var index = 0;index<length;index++){
      var currentKey = keys ? keys[index] : index;
      if(predicate(obj[currentKey],currentKey,obj))
        return true;
    }
    return false;
  }
  _.contains = _.includes = _.include = function(obj,item,fromIndex,guard){
    if(!isArrayLike(obj))obj = _.value(obj);
    if(typeof fromIndex != 'number' || guard)fromIndex = 0;
    return _.indexOf(obj,item,fromIndex)>=0;
  };
  _.invoke = function(obj,method){
    var args = slice.call(arguments,2);
    var isFunc = _.isFunction(method);
    return _.map(obj,function(value){
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value,args)
    })
  }
  _.pluck = function(obj,key){
    return _.map(obj,_.prototype(key));
  }
  _.where = function(obj,attrs){
    return _.filter(obj,_.matcher(attrs));
  }
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };
  _.max = function(obj,iteratee,context){
    var result = -Infinity,
        lastComputed = -Infinity,
        value, computed;
    if(iteratee == null && obj != null){
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for(var i = 0,length = obj.length;i<length;i++){
        value = obj[i];
        if(value > result){
          result = value;
        }
      }
    }else{
      iteratee = cb(iteratee,context);
      _.each(obj,function(value,index,list){
        computed = iteratee(value,index,list);
        if(computed > lastComputed || computed === -Infinity && result === -Infinity){
          result = value;
          lastComputed = computed;
        }
      })
    } 
    return result;   
  }
  _.min = function(obj,iteratee,context){
    var result = Infinity,
        lastComputed = Infinity,
        value,computed;
    if(iteratee == null && obj != null){
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for(var i = 0,length = obj.length;i<length;i++){
        value = obj[i];
        if(value < result){
          result = value;
        }
      }
    }else{
      iteratee = cb(iteratee,context);
      _.each(obj,function(value,index,list){
        computed = iteratee(value,index,list);
        if(computed < lastComputed computed === Infinity && result === Infinity){
          result = value;
          lastComputed = computed;
        }
      })
    }
    return result;
  }

  _.shuffle = function(obj){
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;

    var shuffled = Array(length);
    for(var index = 0,rand;index<length;index++){
      rand = _.random(0,index);
      if(rand !== index)shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
       /*_.random = function(min, max) {
        if (max == null) {
          max = min;
          min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
      };*/
    }
    return shuffled;
  }
  _.sample = function(obj,n,guard){
    if(n == null || guard){
      if(!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length-1)];
    }
    return _.shuffle(obj).slice(0,Math.max(0,n));
  }
  *********
  _.sortBy = function(obj,iteratee,context){
    iteratee = cb(iteratee,context);
    // _.pluck(list, propertyName)
   /*_.pluck = function(obj, key) {
      return _.map(obj, _.property(key));
    };*/
    return _.pluck(_.map(obj,function(value,index,list){
      return {
        value:value,
        index:index,
        criteria:iteratee(value,index,list)
      }
    }).sort(function(left,right){
      var a = left.criteria;
      var b = right.criteria;
      if(a !== b){
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }),'value');
  }

  _.toArray = function(obj){
    if(!obj)return [];
    if(_.isArray(obj))return slice.call(obj);
    // 函数也是isArrayLike
    if(isArrayLike(obj))return _.map(obj,_.identity);    
    return _.values(obj);
  }
  _.size = function(obj){
    if(obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  }
  _.partition = function(obj,predicate,context){
    predicate = cb(predicate,context);
    var pass = [],  
        fail = [];
    _.each(obj,function(value,key,obj){
      (predicate(value,key,obj) ? pass : fail).push(value);
    }) 
    return [pass,fail];   
  }
  // Array Functions
  // 数组的扩展方法
  // 共 20 个扩展方法
  // Note: All array functions will also work on the arguments object.
  // However, Underscore functions are not designed to work on "sparse" arrays.
  // ---------------
  _.first = _.head = _.take = function(array,n,guard){
    if(array == null)return void 0;
    if(n == null || guard)return array[0];
    return _.initial(array,array.length-n);
  }
  _.initial = function(array,n,guard){
    return slice.call(array,0,Math.max(0,array.length - (n == null || guard ? 1 : n)))
  }
  _.last = function(array,n,guard){
    if(array == null) return void 0;
    if(n == null || guard)return array[array.length-1];
    return _.rest(array,Math.max(0,array.length - n));
  }
  _.rest = _.tail = _.drop = function(array,n,guard){
    return slice.call(array,n == null || guard ? 1 : n);
  }
  _.compact = function(array){
    return _.filter(array,_.identity);
  }
  var flatten = function(input,shalow,strict,startIndex){
    var output = [],
        idx = 0;
    for(var i = startIndex || 0,length = getLength(input);i<length;i++){
      var value = input[i];
      if(isArrayLike(value) && (_.isArray(value)||_.isArgumets(value))){
        if(!shallow)
          value = flatten(value,shallow,strict);
        var j = 0,
            len = value.length;
        output.length += len;
        while(j<len){
          output[idx++] = value[j++];
        }
      }else if(!strict){
        output[idx++] = value;
      }
    }
    return output;
  }

  // Function (ahem) Functions
    // 函数的扩展方法
    // 共 14 个扩展方法
  var executeBound = function(sourceFunc,boundFunc,context,callingContext,args){
    if(!callingContext instanceof boundFunc){
      return sourceFunc.apply(context,args);
    }
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self,args);
    if(_.isObject(result)){
      return result;
    }
    return self;
  }

  var _.bind = function(func,context){
    if(nativeBind && func.bind === nativeBind){
      return nativeBind.apply(func,slice.call(arguments,1))
    }
    if(!_.isFunction(func))
      throw new TypeError('Bind must be called on a function')
    var args = slice.apply(arguments,2);
    var bound = function(){
      return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));
    }
    return bound;
  }

  _.memoize = function(func,hasher){
    var memoize = function(key){
      var cache = memoize.cache;
      var address = ''+(hasher ? hasher.apply(this,arguments):key);
      if(!_.has(cache,address)){
        cache[address] = func.apply(this,arguments);
      }
      return cache[address];
    }
    memoize.cache = {};
    return memoize;
  }

  _.delay = function(func,wait){
    var args = slice.call(arguments,2);
    return setTimeout(function(){
      func.apply(null,args);
    },wait)
  }
  _.negate = function(predicate){
    return function(){
      return !predicate.apply(this,arguments);
    }
  }
  _.compose = function(){
    var args = arguments;
    var start = args.length - 1 ;
    return function(){
      var i = start;
      var result = args[start].apply(this,arguments);
      while(i--)
        result = args[i].call(this,result);
      return result;
    }
  }
  // 在IE < 9 下 不能用 for key in ... 来枚举对象的某些key
  // 比如重写了对象的 `toString` 方法，这个 key 值就不能在 IE < 9 下用 for in 枚举到
  // IE < 9，{toString: null}.propertyIsEnumerable('toString') 返回 false
  // IE < 9，重写的 `toString` 属性被认为不可枚举
  // 据此可以判断是否在 IE < 9 浏览器环境中
  //propertyIsEnumerable是构造方法Object的prototype的一个方法，所以所有对象(除了null和未定义的空对象等特殊情况以外)都能调用
  var hasEnumBug = !{
    toString:null
  }.propertyIsEnumerable('toString');
  //将对象中不可枚举的属性（方法）用数组nonEnumerableProps保存起来
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'
  ];

  // obj 为需要遍历键值对的对象
  // keys 为键数组
  // 利用 JavaScript 按值传递的特点
  // 传入数组作为参数，能直接改变数组的值
  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = object.constructor;

    //获取对象的原型
    //如果constructor被重写，则proto变为Object.proptotype
    //如果没有被重写，则为obj.constructor.prototype
    //即然要获取对象的原型，个人感觉可以直接获取Object.prototype,
    //而没必要还去做前面的判断
    var proto = (_.isFunction(constructor) && constructor.prototype || ObjProto);

    var prop = 'constructor';

    //判断对象的自身属性中是否有constructor，且constructor存不存在于keys的参数中
    if (_.has(obj, prop) && !_.contains(keys, prop))keys.push(prop);

      while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx]
        // obj[prop] !== proto[prop] 判断该 key 是否来自于原型链
        // 即是否重写了原型链上的属性
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }
  var hasEnumBug = !{toString:null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'];
  function collectNonEnumProps(obj,keys){
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype || objProto)
    var prop = 'constructor';
    if(_.has(obj,prop) && !_.containes(keys,prop))keys.push(prop);
    while(nonEnumIdx--){
      prop = nonEnumerableProps[nonEnumIdx];
      if(prop in obj && obj[prop] !== proto[prop] && !_.contains(keys,prop)){
        keys.push(prop);
      }
    }
  }
  _.keys = function(obj){
    if(!_.isObject(obj))return [];
    if(nativeKeys)return nativeKeys(obj);
    var keys = [];
    for(var key in obj)if(_.has(obj,key))keys.push(key);
    if(hasEnumBug) collectNonEnumProps(obj,keys);
    return keys;
  }
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);

    var keys = [];

    for (var key in obj) {
      if (_.has(obj, key)) keys.push(key);
    }

    //兼容IE<9下一些不能用for .. in ..枚举的值
    if (hasEnumBug) collectNonEnumProps(obj, keys);

    return keys;
  }


  //返回一个对象的所有属性,还包括原型链上继承上的属性
  //返回的是一个数组类型
  _.allKeys = function(obj) {

    if (!_.isObject(obj)) return [];

    var keys = [];
    for (var key in obj) keys.push(key);

    // IE < 9 下的 bug，同 _.keys 方法
    if (hasEnumBug) collectNonEnumProps(obj, keys);

    return keys;
  }
  _.allkeys = function(obj){
    if(!_.isObject(obj))return [];
    var keys = [];
    for(var key in obj) keys.push(key);
    if(hasEnumBug)collectNonEnumProps(obj,keys);
  }
    // 将一个对象的所有 values 值放入数组中
    // 仅限 own properties 上的 values
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  }

  _.mapObject = function(obj, iteratee, context) {
    //迭代函数
    //对每个键值对进行迭代
    //指定this，如果传了context,则将iteratee的this指向context
    iteratee = cb(iteratee, context);

    var keys = _.keys(obj),
      length = keys.length,
      results = {},
      currentKey;

    for (var index = 0; index < length; index++) {
      currentKey = keys[index];

      results[currentKey] = iteratee(obj[currentKey], , currentKey, obj);
    }
    return results;
  }

  //2017/09/10
  //将一个对象转化为成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
  //相当于ES6中的Object.entries方法
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  }

  //将一个对象的Key-value的键值颠倒
  //注意：如果原来对象的value值重复，则后来的会覆盖前面的
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }

  // 传入一个对象
  // 遍历该对象的键值对（包括 own properties 以及 原型链上的）
  // 如果某个 value 的类型是方法（function），则将该 key 存入数组
  // 将该数组排序后返回,且放弃了对nonEnumerableProps数组里方法的重写支持
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  }

  //将几个对象进行融合，相当于es6的Object.assign()方法
  //但是将继承的方法也融合
  _.extends = createAssigner(_.allkeys);

  //与上面的方法一致，区别是只会融合own properties的键值对
  _.extendOwn = _.assign = createAssigner(_.keys);

  // 和 _.extend 非常类似
  // 区别是如果 *defaults 中出现了和 object 中一样的键
  // 则不覆盖 object 的键值对
  // 如果 *defaults 多个参数对象中有相同 key 的对象
  // 则取最早出现的 value 值
  // 参数个数 >= 1
  _.defaults = createAssigner(_.allKeys, true);

  // 跟数组方法的 _.findIndex 类似
  // 找到对象的键值对中第一个满足条件的键值对
  // 并返回该键值对 key 值
  _.findKey = function(obj, predicate, context) {
    //如果传入了context，则将predicate的this指向context
    predicate = cb(predicate, context);

    var keys = _.keys(obj),
      key;
    //遍历键值对
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key]), key, obj) return key;
    }
  }

  // 根据一定的需求（key 值，或者通过 predicate 函数返回真假）
  // 返回拥有一定键值对的对象副本
  // 第二个参数可以是一个 predicate 函数
  // 也可以是 >= 0 个 key
  _.pick = function(object, oiteratee, context) {
    var result = {},
      obj = object,
      iteratee, keys;

    if (obj == null) return result;

    //如果第二个参数是函数
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      // 如果第二个参数不是函数
      // 则后面的 keys 可能是数组
      // 也可能是连续的几个并列的参数
      // 用 flatten 将它们展开
      keys = flatten(arguments, false, false, 1);

      iteratee = function(value, key, obj) {
        return key in obj;
      }
      obj = Object(obj);
    }

    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value
    }
    return result;
  }


  // Return a copy of the object without the blacklisted properties.
  // 跟 _.pick 方法相对
  // 返回 _.pick 的补集
  // 即返回没有指定 keys 值的对象副本
  // 或者返回不能通过 predicate 函数的对象副本
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      // _.negate 方法对 iteratee 的结果取反
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // 给定 prototype
  // 以及一些 own properties
  // 构造一个新的对象并返回
  _.create = function(prototype, props) {
    //相当于调用了ES5的Object.create方法
    var result = baseCreate(prototype);

    // 将 props 的键值对覆盖(无则添加，有则覆盖) result 对象
    if (props) _.extendOwn(result, props);
    return result;
  }

  // 对象的 `浅复制` 副本
  // 注意点：所有嵌套的对象或者数组都会跟原对象用同一个引用
  // 所以是为浅复制，而不是深度克隆
  _.clone = function(obj) {

    //不是对象或数组类型，则直接返回
    if (!_.isObject(obj)) return obj;

    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  }

  // 主要是用在链式调用中
  // 对中间值立即进行处理
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  _.isMatch = function(object, attrs) {
    // 提取 attrs 对象的所有 keys,返回一个数组
    var keys = _.keys(attrs),
      length = keys.length;

    // 如果 object 为空
    // 根据 attrs 的键值对数量返回布尔值      
    if (object == null) return !length;

    var obj = Object(object);

    for (var i = 0; i < length; i++) {
      var key = keys[i];

      // attrs[key] !== obj[key]是用来判断两个对象里都没有  
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  }

  //eq方法作用是比较两个值是否相等，太长，后期来补，先搞懂其他的再说
  var eq = function(a, b, aStack, bStack) {
      // a === b 时
      // 需要注意 `0 === -0` 这个 special case
      // 0 和 -0 被认为不相同（unequal）
      if (a === b) return a !== 0 || 1 / a === 1 / b;

      // 如果 a 和 b 有一个为 null（或者 undefined）
      // 判断 a === b
      if (a == null || b == null) return a === b;

      if (a instanceof _) a = a._wrapped;
      if (b instanceof _) b = b._wrapped;

      var className = toString(a);

      if (className != toString(b)) return false;

      switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        // 以上五种类型的元素可以直接根据其 value 值来比较是否相等
        case '[object RegExp]':
          // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case '[object String]':
          // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
          // equivalent to `new String("5")`.
          // 转为 String 类型进行比较
          return '' + a === '' + b;

          // RegExp 和 String 可以看做一类
          // 如果 obj 为 RegExp 或者 String 类型
          // 那么 '' + obj 会将 obj 强制转为 String
          // 根据 '' + a === '' + b 即可判断 a 和 b 是否相等
          // ================

        case '[object Number]':
          // `NaN`s are equivalent, but non-reflexive.
          // Object(NaN) is equivalent to NaN
          // 如果 +a !== +a
          // 那么 a 就是 NaN
          // 判断 b 是否也是 NaN 即可
          if (+a !== +a) return +b !== +b;

          // An `egal` comparison is performed for other numeric values.
          // 排除了 NaN 干扰
          // 还要考虑 0 的干扰
          // 用 +a 将 Number() 形式转为基本类型
          // 即 +Number(1) ==> 1
          // 0 需要特判
          // 如果 a 为 0，判断 1 / +a === 1 / b
          // 否则判断 +a === +b
          return +a === 0 ? 1 / +a === 1 / b : +a === +b;

          // 如果 a 为 Number 类型
          // 要注意 NaN 这个 special number
          // NaN 和 NaN 被认为 equal
          // ================

        case '[object Date]':
        case '[object Boolean]':
          // Coerce dates and booleans to numeric primitive values. Dates are compared by their
          // millisecond representations. Note that invalid dates with millisecond representations
          // of `NaN` are not equivalent.
          return +a === +b;

          // Date 和 Boolean 可以看做一类
          // 如果 obj 为 Date 或者 Boolean
          // 那么 +obj 会将 obj 转为 Number 类型
          // 然后比较即可
          // +new Date() 是当前时间距离 1970 年 1 月 1 日 0 点的毫秒数
          // +true => 1
          // +new Boolean(false) => 0
      }


      // 判断 a 是否是数组
      var areArrays = className === '[object Array]';

      // 如果 a 不是数组类型
      if (!areArrays) {
        // 如果 a 不是 object 或者 b 不是 object
        // 则返回 false
        if (typeof a != 'object' || typeof b != 'object') return false;

        // 通过上个步骤的 if 过滤
        // !!保证到此的 a 和 b 均为对象!!

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        // 通过构造函数来判断 a 和 b 是否相同
        // 但是，如果 a 和 b 的构造函数不同
        // 也并不一定 a 和 b 就是 unequal
        // 比如 a 和 b 在不同的 iframes 中！
        // aCtor instanceof aCtor 这步有点不大理解，啥用？
        var aCtor = a.constructor,
          bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
            _.isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
          return false;
        }
      }

      // Assume equality for cyclic structures. The algorithm for detecting cyclic
      // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

      // Initializing stack of traversed objects.
      // It's done here since we only need them for objects and arrays comparison.
      // 第一次调用 eq() 函数，没有传入 aStack 和 bStack 参数
      // 之后递归调用都会传入这两个参数
      aStack = aStack || [];
      bStack = bStack || [];

      var length = aStack.length;

      while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
      }

      // Add the first object to the stack of traversed objects.
      aStack.push(a);
      bStack.push(b);

      // Recursively compare objects and arrays.
      // 将嵌套的对象和数组展开
      // 如果 a 是数组
      // 因为嵌套，所以需要展开深度比较
      if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        // 根据 length 判断是否应该继续递归对比
        length = a.length;

        // 如果 a 和 b length 属性大小不同
        // 那么显然 a 和 b 不同
        // return false 不用继续比较了
        if (length !== b.length) return false;

        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
          // 递归
          if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
      } else {
        // 如果 a 不是数组
        // 进入这个判断分支

        // Deep compare objects.
        // 两个对象的深度比较
        var keys = _.keys(a),
          key;
        length = keys.length;

        // Ensure that both objects contain the same number of properties before comparing deep equality.
        // a 和 b 对象的键数量不同
        // 那还比较毛？
        if (_.keys(b).length !== length) return false;

        while (length--) {
          // Deep compare each member
          // 递归比较
          key = keys[length];
          if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
        }
      }

      // Remove the first object from the stack of traversed objects.
      // 与 aStack.push(a) 对应
      // 此时 aStack 栈顶元素正是 a
      // 而代码走到此步
      // a 和 b isEqual 确认
      // 所以 a，b 两个元素可以出栈
      aStack.pop();
      bStack.pop();

      // 深度搜索递归比较完毕
      // 放心地 return true
      return true;
    }
    // 判断两个对象是否一样
    // new Boolean(true)，true 被认为 equal
    // [1, 2, 3], [1, 2, 3] 被认为 equal
    // 0 和 -0 被认为 unequal
    // NaN 和 NaN 被认为 equal
  _.isEqual = function(a, b) {
    return eq(a, b)
  }

  //判断是否是{},[]或者"" null undefined
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    //
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
  }

  _.isElement = function(obj) {
    //前面两个!是为了保证obj不是Null ,如果
    //不加，则输入为null时得到的结果是Null，而不是boolean值
    return !!(obj && obj.nodeType === 1)
  }

  //判断是否为数组
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  }

  //判断是否为对象，这里将function也列为对象了，排除null
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

  //一次生成其他的类型判断
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });
  //对isArguments方法在IE<9以下的兼容
  // IE < 9 下对 arguments 调用 Object.prototype.toString.call 方法
  // 结果是 => [object Object]
  // 而并非期望的 [object Arguments]。
  // 所以用是否含有 callee 属性来做兼容
  if (!_.isArgumets(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    }
  }

  //不知道这两个判断是什么意思，百度了下，/./是正则对象，后面的Int8Array是一个8位整数值的类型转化的对象
  //https://segmentfault.com/q/1010000004220008
  //https://msdn.microsoft.com/library/br212462(v=vs.94).aspx
  //个人感觉没什么必要，等敲第二遍的时候来细想吧
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // 判断是否是有限的数字
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  }

  // 判断是否是 NaN
  // NaN 是唯一的一个 `自己不等于自己` 的 number 类型
  _.isNaN = function(obj) {
      return _.isNumber(obj) && obj !== +obj;
    }
    //判断是否是布尔值类型
    //前两个应该是为性能考虑才加的如果前两个判断就出结果了，则不需要调用函数了
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };
  //判断是否为null
  _.isNull = function(obj) {
      return obj === null
    }
    // 判断是否是 undefined
    // undefined 能被改写 （IE < 9）
    // undefined 只是全局对象的一个属性
    // 在局部环境能被重新定义
    // 但是「void 0」始终是 undefined
  _.isUndefined = function(obj) {
    return obj === void 0;
  }

  //判断对象中是否有指定的key，只判断是否是自身的key
  _.has = function(obj, key) {
    //obj不能为null或Undenfined
    return obj != null && hasOwnProperty.call(obj, key);
  }

  // 数组的扩展方法
  // 共 20 个扩展方法
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    //如果不传n，则返回第一个元素
    if (n == null || guard) return array[0];
    // 如果指定了n, 则返回一个新的数组, 包含顺序指定数量n个元素
    return _.initial(array, arr.length - n);
  }

  // 传入一个数组
  // 返回剔除最后一个元素之后的数组副本
  // 如果传入参数 n，则剔除最后 n 个元素
  _.initial = function(array, n, guard) {
    // 注意 undenfined == null为true
    // 而n == null || guard ? 1 : n 这句的执行顺序为(n == null || guard) ? 1 : n
    // 如果传递参数n, 则返回从最后一个元素开始向前的n个元素外的其它元素
    // 如果不传n,则默认值为1，即返回剔除最后一个元素之后的数组副本
    // guard参数用于确定只返回第一个元素, 当guard为true时, 指定数量n无效
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }

  _.last = function(array, n, guard) {
    if (array == null) return void 0;

    // 如果没有指定参数 n，则返回最后一个元素
    if (n == null || guard) return array[array.length - 1];

    // 如果传入参数 n，则返回后 n 个元素组成的数组
    // 即剔除前 array.length - n 个元素
    return _.rest(array, Math.max(0, array.length - n));
  }

  _.rest = _.tail = _.drop = function(array, n, guard) {
    //和上面类似
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // 去掉数组中所有的假值
  // 返回数组副本
  // JavaScript 中的假值包括 false、null、undefined、''、NaN、0
  // 联想 PHP 中的 array_filter() 函数
  // _.identity = function(value) {
  //   return value;
  // };
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // 函数的扩展方法
  // 共 14 个扩展方法

  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc))
      return sourceFunc.apply(context, args);
    // self 为 sourceFunc 的实例，继承了它的原型链
    var self = baseCreate(sourceFunc.prototype);
    // 用 new 生成一个构造函数的实例
    // 正常情况下是没有返回值的，即 result 值为 undefined
    // 如果构造函数有返回值
    // 如果返回值是对象（非 null），则 new 的结果返回这个对象
    // 否则返回实例
    var result = sourceFunc.apply(self, args);
    // 如果构造函数返回了对象
    // 则 new 的结果是这个对象
    // 返回这个对象
    if (_.isObject(result)) return result;
    // 否则返回 self
    // var result = sourceFunc.apply(self, args);
    // self 对象当做参数传入
    // 会直接改变值
    return self;
  }

  _.bind = function(func, context) {
    // 如果浏览器支持 ES5 bind 方法，并且 func 上的 bind 方法没有被重写
    // 则优先使用原生的 bind 方法
    if (nativeBind && func.bind)
      return nativeBind.apply(func, slice(arguments, 1));

    if (_.isFunction(func))
      throw new TypeError('Bind must be called on a function');

    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    }

    return bound;
  }

  _.bind = function(func,context){
    if(nativeBind && func.bind === nativeBind)
      return nativeBind.apply(func,slice(arguments,1));
    if(!_isFunction(func))
      throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments,2);
    var bound = function(){
      return executeBound(func,bound,context,this,args.concat(slice.call(arguments)))
    }
    return bound;
  }
  executeBound = function(){
    
  }
  _.partial = function() {
    // 如果传入的是 _，则这个位置的参数暂时空着，等待手动填入
    var boundArgs = slice.call(arguments, 1)

    var bound = function() {
      var position = 0,
        length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length)
        arguments.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };

    return bound;
  }

  _.bindAll = function(obj) {
    var i, length = arguments.length,
      key;

    if (length <= 1)
      throw new Error('bindAll must be passed function names')
    for (var i=1;i<length;i++){
      key = arguments[i];
      obj[key] = _.bind(obj[key],obj);
    }
    return obj;
  }
  _.memoize = function(func,hasher){
    var memoize = function(key){
      var cache = memoize.cache;

      var address = '' + (hasher ? hasher.apply(this,arguments):key);

      if(!_.has(cache,address))
        cache[address] = func.apply(this,arguments);

      return cache[address];
    };

    memoize.cache = {};

    return memoize;
  }

  // 对象的扩展方法




}.call(this))



===============================
var mult = (function(){
  var cache = {};
  var calculate = function(){
    var a = 1;
    for(var i = 0,l = arguments.length;i<l;i++){
      a = a*arguments[i];
    }
    return a;
  }
  return function(){
    var args = Array.prototype.join.call(arguments),
    if(cache[args]){
      return cache[args]
    }else{
      return cache[args] = calculate(arguments);
    }
  }
})()
var mult = (function(){
  var cache = {};
  var calculate = function(){
    var a = 1;
    for(var i=0,l=arguments.length;i<l;i++){
      a = a * arguments[i];
    }
    return a;
  }
  return function(){
    var args = Array.prototype.join.call(arguments);
    if(args in cache){
      return cache[args];
    }else{
      return cache[args] = calculate(arguments);
    }
  }
})()
function report = (function(){
  var imgs = [];
  return function(src){
    var img = new Image();
    imgs.push(img);
    img.src = src;
  }
})()
var report = (function(){
  var imgs = [];
  return function(src){
    var img = new Image();
    img.push(img);
    img.src = src;
  }
})()
//函数节流
var throttle = function(fn,interval){
  var _self = fn,
      timer,
      firstTime = true;
  return function(){
    var args = arguments,
        _me = this;
    if(firstTime){
      _self.apply(_me,args);
      return firstTime = false;
    }
    if(timer){
      return false;
    }
    timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _self.apply(_me,args);
    },interval||500)
  }    
}
var throttle = function(fn,interval){
  var _self = fn,
      timer,
      firstTime;
  return function(){
    var args = arguments,
        _me = this;
    if(firstTime){
      _self.apply(_me,arguments);
      firstTime = false;
    }
    if(timer){return false}
    timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _self.apply(_me,args);
    },interval||500)
  }
}
var addEvent = function(elem,type,hanlder){
  if(window.addEventListener){
    addEvent = function(elem,type,hanlder){
      elem.addEventListener(type,hanlder,false)
    }
  }else if(window.attachEvent){
    addEvent = function(elem,type,hanlder){
      elem.attachEvent('on'+type,hanlder)
    }
  }
  addEvent(elem,type,hanlder)
}
var addEvent = function(elem,type,handler){
  if(window.addEventListener){
    addEvent = function(elem,type,handler){
      return elem.addEventListener(type,handler,false)
    }
  }else if(window.attachEvent){
    addEvent = function(elem,type,handler){
      return elem.attachEvent('on'+type,handler);
    }
  }
}
var mult = (function(){
  var cache = {};
  var calculate = function(){
    var a = 1;
    for(var i=0,len=arguments.length;i<len;i++){
      a = a*arguments[i];
    }
    return a;
  }
  return function(){
    var args = Array.prototype.join(arguments,',');
    if(args in cache){
      return cache[args];
    }else{
      return cache[args] = calculate(arguments);
    }
  }
})();

var report = (function(){
  var imgs = [];
  return function(src){
    var img = new Image();
    imgs.push(img);
    img.src=src;
  }
})();

var throttle = function(fn,interval){
  var _self = this,
      timer,
      firstTime = true;
  return function(){
    var args = arguments,
        _me = this;
    if(firstTime){
      _self.apply(_me,args);
      return firstTime = false;
    }
    if(timer){
      return false;
    }
    timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _self.apply(_me,args);
    }, interval||500)
  }
}

var addEvent = function(elem,type,handler){
  if(window.addEventListener){
    addEvent = function(elem,type,handler){
      return elem.addEventListener(type, handler, false);
    }
  }else if(window.attachEvent){
    addEvent = function(elem,type,handler){
      return elem.attachEvent('on'+type,handler)
    }
  }
  addEvent(elem,type,handler);
}

var strategies = {
  isNoEmpty:function(value,errMsg){
    if(value === ''){
      return errMsg;
    }
  },
  minLength:function(value,length,errMsg){
    if(value.length<length){
      return errMsg;
    }
  },
  isMobile:function(value,errMsg){
    if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){
      return errorMsg;
    }
  }
}
var validataFunc = function(){
  var validator = new Validator();
  validator.add(userName,'isNoEmpty','用户名不能为空');
  validator.add(passWord,'minLength:6','密码长度不能少于 6 位');
  validator.add(phoneNumber,'isMobile','手机号码格式不正确');
  var errMsg = validator.start();
  return errMsg;
}
form.onsubmit = function(){
  var errMsg = validataFunc();
  if(errMsg){
    alert(errMsg);
    return false;
  }
}

var Validator = function(){
  this.cache = [];
}
Validator.prototype.add = function(dom,rule,errMsg){
  var ary = rule.split(':');
  this.cache.push(function(){
    var strategy = ary.shift();
    ary.unshift(dom.value);
    ary.push(errMsg);
    return strategies
  })
}

var each = function(ary,callback){
  for(var i=0,l=ary.length;i<l;i++){
    callback.call(ary[i],i,arr[i])
  }
}

var event = {
  clientList:[],
  listen:function(key,fn){
    if(!this.clientList[key]){
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger:function(){
    var key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key];
    if(!fns || fns.length===0){
      return false;
    }
    for(var i=0,fn;fn = fns[i++];){
      fn.apply(this.arguments)
    }
  }
}
var installEvent = function(obj){
  for(var i in event){
    obj[i] = event[i];
  }
}
var mult = (function(){
  var cache = {};
  var calculate = function(){
    var a = 1;
    for(var i=0,l=arguments.length;i<l;i++){
      a = a*arguments[i];
    }
    return a;
  }
  return function(){
    var args = Array.prototype.join.call(arguments);
    if(cache[args]){
      return cache[args];
    }else{
      return cache[args] = calculate(arguments);
    }
  }
})
