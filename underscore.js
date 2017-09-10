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

  //？？暂时不知道什么作用
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function(value) {
          return func.call(context, value);
        };
      case 2:
        return function(value, other) {
          return func.call(context, value, other);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection)
        };
      return function() {
          return func.apply(context, arguments);
        }
    }
  }

  
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  //内部函数指定
  var createAssigner = function(keysFunc,undefinedOnly){
    return function(obj){
      var length = arguments.length;
      if(length<2||obj==null)return obj;
      for(var index = 1;index<length;index++){
        var source = arguments[index],
        keys = keysFunc(source),
        l = keys.length;
        for(var i=0;i<l;i++){
          var key = keys[i];
          if(!undefinedOnly || obj[key] ===void 0){
            obj[key] = source[key]
          }
        }
      }
      return obj;
    }
  }

  //传入一个原型，生成一个带有空对象的原型，用来实现继承
  var baseCreate = function(prototype){

    //参数不是对象，则返回一个空对象
    if(!_.isObject(prototype))return{};

    if(nativeCreate) return nativeCreate(prototype);

    //模拟Object.create函数，生成一个具有的继承父亲prototype的空对象
    //可以用来实现继承
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }

  //闭包，获取对象的值，如果对象中没有该key，则创建一个
  //值为undenfined
  var property = function(key){
    return function(obj){
      return obj == null ? void 0 : obj[key];
    }
  }
  //Math.pow(2, 53) - 1 是 JavaScript 中能精确表示的最大数字
  var MAX_ARRAY_INDEX = Math.pow(2,53) - 1;

  //该函数传入一个对象参数，来获取对象参数的length值
  // 用来获取 array 以及 arrayLike 元素的 length 属性值
  var getLength = property('length');

  // 判断是否是 ArrayLike Object
  var isArrayLike = function(collection){
    var length = getLength(collection);
    return typeof length == 'number' && length>=0 && length <= MAX_ARRAY_INDEX;
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

      for(i=0,length = keys.length;i<length;i++){
        iteratee(obj[keys[i]],keys[i],obj);
      }
    }

    return obj;
  }

  _.map = _.collect = function(obj,iteratee,context){
    // 根据 context 确定不同的迭代函数
    iteratee = cb(iteratee,context);

    //如果传入的是对象，则获取他的keys数组
    var keys = !isArrayLike(obj) && _.keys(obj),
        // 如果 obj 为对象，则 length 为 key.length
        // 如果 obj 为数组或伪数组，则 length 为 obj.length
        length = (keys || obj).length;
        results = Array(length);

    for(var index = 0;index<length;index++){
      var currentKey = keys ? keys[index]:index;
      results[index] = iterate(obj[currentKey],currentKey,obj);
    }
    return results;
  }

  function createReduce(dir){
    function iterator(obj,iteratee,memo,keys,index,length){
      for(;index>=0&&index<length;index+=dir){
        var currentKey = keys ? keys[]
      }
      return memo;
    }
    return function(obj,iteratee,memo,context){
      iteratee = optimizeCb(iteratee,context,4);
      var keys = !isArrayLike(obj)&&_.keys(obj);
      length = (keys || obj).length,
      index = dir > 0?0:length-1;
      if(arguments.length<3){
        memo = obj[keys ? keys[index]:index];
        index += dir;
      }
      return iterator(obj,iteratee,memo,keys,index,length)
    }
  }
  _.contains = _.includes = _.include = function(obj,item, fromIndex, guard){
    // 如果是对象，返回由对象values 组成的数组
    if(!isArrayLike(obj))obj = _.values(obj);

    // fromIndex 表示查询起始位置
    // 如果没有指定该参数，则默认从头找起
    if(typeof fromIndex !='number'||guard) fromIndex = 0;

    // _.indexOf 是数组的扩展方法（Array Functions）
    // 数组中寻找某一元素
    return _.indexOf(obj,item,fromIndex) >=0;
  };
  //对象的扩展方法

  // 在IE < 9 下 不能用 for key in ... 来枚举对象的某些key
  // 比如重写了对象的 `toString` 方法，这个 key 值就不能在 IE < 9 下用 for in 枚举到
  // IE < 9，{toString: null}.propertyIsEnumerable('toString') 返回 false
  // IE < 9，重写的 `toString` 属性被认为不可枚举
  // 据此可以判断是否在 IE < 9 浏览器环境中
  //propertyIsEnumerable是构造方法Object的prototype的一个方法，所以所有对象(除了null和未定义的空对象等特殊情况以外)都能调用
  var hasEnumBug = !{
    toString:null//重写了toString在IE9以下是无法用for key in obj来枚举的
  }.propertyIsEnumerable('toString');
  //将对象中不可枚举的属性（方法）用数组nonEnumerableProps保存起来
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'
  ];

  // obj 为需要遍历键值对的对象
  // keys 为键数组
  // 利用 JavaScript 按值传递的特点
  // 传入数组作为参数，能直接改变数组的值
  function collectNonEnumProps(obj,keys){
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
    if(_.has(obj,prop) && !_.contains(keys,prop))

    while(nonEnumIdx--){
      prop = nonEnumerableProps[nonEnumIdx]
      // obj[prop] !== proto[prop] 判断该 key 是否来自于原型链
      // 即是否重写了原型链上的属性
      if(prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)){
        keys.push(prop);
      }
    }
  }

  _.keys = function(obj){
    if(!_.isObject(obj))return[];
    if(nativeKeys) return nativeKeys(obj);

    var keys = [];

    for(var key in obj){
      if(_.has(obj,key)) keys.push(key);
    }

    //兼容IE<9下一些不能用for .. in ..枚举的值
    if(hasEnumBug)collectNonEnumProps(obj,keys);

    return keys;
  }


  //返回一个对象的所有属性,还包括原型链上继承上的属性
  //返回的是一个数组类型
  _.allKeys = function(obj){

    if(!_.isObject(obj))return [];

    var keys = [];
    for(var key in obj)keys.push(key);

    // IE < 9 下的 bug，同 _.keys 方法
    if (hasEnumBug) collectNonEnumProps(obj, keys);

    return keys;
  }
  // 将一个对象的所有 values 值放入数组中
  // 仅限 own properties 上的 values
  _.values = function(obj){
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for(var i=0;i<length;i++){
      values[i] = obj[keys[i]];
    }
    return values;
  }
  
  _.mapObject = function(obj,iteratee,context){
    //迭代函数
    //对每个键值对进行迭代
    //指定this，如果传了context,则将iteratee的this指向context
    iteratee = cb(iteratee,context);

    var keys = _.keys(obj),
    length = keys.length,
    results = {},
    currentKey;

    for(var index = 0;index<length;index++){
      currentKey = keys[index];

      results[currentKey] = iteratee(obj[currentKey],, currentKey, obj);
    }
    return results;
  }

  //2017/09/10
  //将一个对象转化为成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
  //相当于ES6中的Object.entries方法
  _.pairs = function(obj){
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for(var i=0;i<length;i++){
      pairs[i] = [keys[i],obj[keys[i]]];
    }
    return pairs;
  }

  //将一个对象的Key-value的键值颠倒
  //注意：如果原来对象的value值重复，则后来的会覆盖前面的
  _.invert = function(obj){
    var result = {};
    var keys = _.keys(obj);
    for(var i=0,length=keys.length;i<length;i++){
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }

  // 传入一个对象
  // 遍历该对象的键值对（包括 own properties 以及 原型链上的）
  // 如果某个 value 的类型是方法（function），则将该 key 存入数组
  // 将该数组排序后返回,且放弃了对nonEnumerableProps数组里方法的重写支持
  _.functions = _.methods = function(obj){
    var names = [];
    for(var key in obj){
      if(_.isFunction(obj[key]))names.push(key);
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
  _.defaults = createAssigner(_.allKeys,true);

  // 跟数组方法的 _.findIndex 类似
  // 找到对象的键值对中第一个满足条件的键值对
  // 并返回该键值对 key 值
  _.findKey = function(obj,predicate,context){
    //如果传入了context，则将predicate的this指向context
    predicate = cb(predicate,context);

    var keys = _.keys(obj),
    key;
    //遍历键值对
    for(var i=0,length = keys.length;i<length;i++){
      key = keys[i];
      if(predicate(obj[key]),key,obj)return key;
    }
  }

  _.pick = function(object,oiteratee,context){
    var result = {},
    obj = object,
    iteratee,keys;

    if(obj == null ) return result;
  }

  // 给定 prototype
  // 以及一些 own properties
  // 构造一个新的对象并返回
  _.create = function(prototype,props){
    //相当于调用了ES5的Object.create方法
    var result = baseCreate(prototype);

    // 将 props 的键值对覆盖(无则添加，有则覆盖) result 对象
    if(props)_.extendOwn(result,props);
    return result;
  }

  // 对象的 `浅复制` 副本
  // 注意点：所有嵌套的对象或者数组都会跟原对象用同一个引用
  // 所以是为浅复制，而不是深度克隆
  _.clone = function(obj){

    //不是对象或数组类型，则直接返回
    if(!_.isObject(obj))return obj;

    return _.isArray(obj) ? obj.slice():_.extend({},obj);
  }

  // 主要是用在链式调用中
  // 对中间值立即进行处理
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  _.isMatch = function(object,attrs){
    // 提取 attrs 对象的所有 keys,返回一个数组
    var keys = _.keys(attrs),
        length = keys.length;

    // 如果 object 为空
    // 根据 attrs 的键值对数量返回布尔值      
    if(object == null)return !length;

    var obj = Object(object);

    for(var i=0;i<length;i++){
      var key = keys[i];

      // attrs[key] !== obj[key]是用来判断两个对象里都没有  
      if(attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  }

  
  //判断对象中是否有指定的key，只判断是否是自身的key
  _.has = function(obj,key){
    //obj不能为null或Undenfined
    return obj != null && hasOwnProperty.call(obj,key);
  }




}.call(this))





var mult = (function(){
  var cache = {};
  var calc = function(){
    var a = 1;
    for(var i=0,length = arguments.length;i<length;i++){
      a = a*arguments[i];
    }
    return a;
  }
  return function(){
    var argStr = Array.prototype.join.call(arguments,',');
    if(argStr in cache){
      return cache[argStr];
    }
    return cache[argStr] = calc.apply(null,arguments);
  }
})()
console.log(mult(1,2,3))













_.matcher(value)

 function(obj) {
    return _.isMatch(obj, attrs);
  };

_.matcher = _.matches = function(attrs) {
  attrs = _.extendOwn({}, attrs);//attrs = {name:1,age:12}
  return function(obj) {
    return _.isMatch(obj, attrs);
  };
};

_.isMatch = function(object, attrs) {
    // 提取 attrs 对象的所有 keys,返回一个数组
    var keys = _.keys(attrs),
      length = keys.length;

    // 如果 object 为空
    // 根据 attrs 的键值对数量返回布尔值
    if (object == null) return !length;

    // 这一步有必要？
    var obj = Object(object);

    // 遍历 attrs 对象键值对
    for (var i = 0; i < length; i++) {
      var key = keys[i];

      // 如果 obj 对象没有 attrs 对象的某个 key
      // 或者对于某个 key，它们的 value 值不同
      // 则证明 object 并不拥有 attrs 的所有键值对
      // 则返回 false
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
  };
