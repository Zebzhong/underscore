// 如果有参数 n，则返回数组前 n 个元素（组成的数组）
// _.first([5, 4, 3, 2, 1]);
// => 5
_.first = _.head = _.take = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null || guard)return array[0];
  return _.inital(array,array.length-n);
}
/* _.initial([5, 4, 3, 2, 1]);
=> [5, 4, 3, 2] */
_.inital = function(array,n,guard){
  return slice.call(array,0,Math.max(0,array.length - (n == null || guard ? 1:n)));
}
_.first = _.head = _.take = function (array, n, guard) {
  if (array == null) 
    return void 0;
  if (n == null || guard) 
    return array[0];
  return _.inital(array, array.length - n);
}

_.first = _.head = _.take = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null || guard)return array[0];
  return _.inital(array,array.length-n);
}
//传入一个数组，n，剔除最后n个元素
_.inital = function (array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null
    || guard ? 1 : n)));
}
_.inital = function(array,n,guard){
  return slice.call(array,0,Math.max(0,array.length-(n== null || guard ? 1:n)));
}
_.first = _.head = _.take = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null || guard)return array[0];
  return _.inital(array,array.length - n);
}

_.inital = function(array,n){
  return slice.call(array,0,Math.max(0,array.length - (n == null || guard ?1:n)));
}

// 返回数组最后一个元素
// 如果传入参数 n
// 则返回该数组后 n 个元素组成的数组
// 即剔除前 array.length - n 个元素
// _.last([5, 4, 3, 2, 1]);
// => 1
_.last = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null || guard) return array[array.length-1];
  return _.rest(array,Math.max(0,array.length-n));
}
// _.rest([5, 4, 3, 2, 1]);
// => [4, 3, 2, 1]
// _.rest([5, 4, 3, 2, 1],2);
// => [3, 2, 1]
_.rest = function(array,n,guard){
  return slice.call(array,n == null || guard ? 1 : n);
}
_.last = function(array,n,guard){
  if (array == null) 
    return void 0;
  if (n == null || guard) 
    return array[arr.length-1];
  return _.rest(array,Math.max(0,array.length-n));
}
_.last = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null ||　guard)return array[array.length-1];
  return _.rest(array,Math.max(0,array.length-n));
}
_.rest = _.tail = _.drop = function(array,n,guard){
  return slice.call(array, n == null || guard ? 1 : n);
}
_.rest = _.tail = _.drop = function(array,n,guard){
  return slice.call(array,n == null || guard ? 1:n);
}
// 去掉数组中所有的假值
// 返回数组副本
// JavaScript 中的假值包括 false、null、undefined、''、NaN、0
_.compact = function(array){
  return _.filter(array,_.idenity);
}
_.compact = function(array){
  return _.filter(array,_.idenity);
}
_.compact = function(array){
  return _.filter(array,_.idenity);
}
// 递归调用数组，将数组展开
// 即 [1, 2, [3, 4]] => [1, 2, 3, 4]
// flatten(array, shallow, false)
// flatten(arguments, true, true, 1)
// flatten(arguments, true, true)
// flatten(arguments, false, false, 1)
// ===== //
// input => Array 或者 arguments
// shallow => 是否只展开一层
// strict === true，通常和 shallow === true 配合使用
// 表示只展开一层，但是不保存非数组元素（即无法展开的基础类型）
// flatten([[1, 2], 3, 4], true, true) => [1, 2]
// flatten([[1, 2], 3, 4], false, true) = > []
// startIndex => 从 input 的第几项开始展开
// ===== //
// 可以看到，如果 strict 参数为 true，那么 shallow 也为 true
// 也就是展开一层，同时把非数组过滤
// [[1, 2], [3, 4], 5, 6] => [1, 2, 3, 4]
var flatten = function(input,shallow,strict,startIndex){
  var output = [],idx = 0;
  for(var i = startIndex || 0,length = getLength(input);i<length;i++){
    var value = input[i];
    if(isArrayLike(value) && (_.isArray(value) || _.isArguments(value))){
      if(!shallow)value = flatten(value,shallow,strict);//shallow为false走递归
      var j=0,len = value.length;
      while(j < len){
        output[idx++] = value[j++];
      }
    }else if(!strict){//strict为false走下面
      output[idx++] = value;
    }
  }
  return output;
}
var flatten = function(input,shallow,strict,startIndex){
  var output = [],idx = 0;
  for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
      //flatten current level of array or arguments object
      if (!shallow) value = flatten(value, shallow, strict);
      var j = 0, len = value.length;
      output.length += len;
      while (j < len) {
        output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}
_.flatten = function(array, shallow) {
  return flatten(array, shallow, false);
};

var flatten = function(input,shallow,strict,startIndex){
  var output = [],idx = 0;
  for(var i = 0,length = input.length;i<length;i++){
    var value = input[i];
    if(isArrayLike(input) && (_.isArray(input) || _.isArguments(input))){
      if(!shallow) value = flatten(value,shallow,strict);
      var j = 0,len = value.length;
      while(j<len){
        output[idx++] = value[j++];
      }
    }else if(!strict){
      output[idx++] = value;
    }
  }
  return output;
}
_.flatten = function(array,shallow){
  return flatten(array,shallow,false);
}

var flatten = function(input,shallow,strict,startIndex){
  var output = [],idx = 0;
  for(var i = 0,length=input.length;i<length;i++){
    var value = input[i];
    if(isArrayLike(value)&&(isArray(value)||isArguments(value))){
      if(!shallow) value = flatten(value,shallow,strict);
      var j = 0,len = value.length;
      while(j<len){
        output[idx++] = value[j++];
      }
    }else if(!strict){
      output[indx++] = value;
    }
  }
  return output;
}

_.flatten = function(array,shallow){
  return flatten(array,shallow,false);
}
// 从数组中移除指定的元素
// 返回移除后的数组副本
_.without = function(array) {
  return _.difference(array, slice.call(arguments, 1));
};
// 如果第二个参数 `isSorted` 为 true
// 则说明事先已经知道数组有序
// 程序会跑一个更快的算法（一次线性比较，元素和数组前一个元素比较即可）
// 如果有第三个参数 iteratee，则对数组每个元素迭代
// 对迭代之后的结果进行去重
// 返回去重后的数组（array 的子数组）
// PS: 暴露的 API 中没 context 参数
// _.uniq(array, [isSorted], [iteratee])
_.uniq = _.unique = function(array, isSorted, iteratee, context) {
  if (!_.isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = cb(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!_.contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!_.contains(result, value)) {
      result.push(value);
    }
  }
  return result;
};
// _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2, 3, 101, 10]
// ========== //
// 将多个数组的元素集中到一个数组中
// 并且去重，返回数组副本
_.union = function() {
  return _.uniq(flatten(arguments, true, true));
};
// 寻找几个数组中共有的元素
// 将这些每个数组中都有的元素存入另一个数组中返回
// _.intersection(*arrays)
// _.intersection([1, 2, 3, 1], [101, 2, 1, 10, 1], [2, 1, 1])
// => [1, 2]
_.intersection = function(array){
  var result = [];
  var argsLength = arguments.length;
  for(var i = 0,length = array.length;i<length;i++){
    var item = array[i];
    if(_.contains(result,item))continue;
    for(var j = 1;j<argsLength;j++){
      if(!_.contains(arguments[j],item))break;
    }
    if(j === argsLength)result.push(item);
  }
  return result;
}
_.intersection = function(array){
  var result = [];
  var argsLength = arguments.length;
  for(var i =0,length = array.length;i<length;i++){
    if(_.contains(result,item))continue;
    for(var j=1;j<argsLength;j++){
      if(!_.contains(arguments[j],item))break;
    }
    if(j===argsLength)result.push(item);
  }
  return result;
}
_.intersection = function(array){
  var result = [];
  var argsLength = arguments.length;
  for(var i = 0,length = getLength(array);i<length;i++){
    if(_.contains(result,item))continue;
    for(var j = 1;j<argsLength;j++){
      if(!_.contains(arguments[j],item))break;
    }
    if(j===argsLength)result.push(item);
  }
  return result;
}
_.intersection = function(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
    if (_.contains(result, item)) continue;
    for (var j = 1; j < argsLength; j++) {
      if (!_.contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
};
_.intersection = function(array){
  var result = [];
  var argsLength = arguments.length;
  for(var i = 0,length = getLength(array);i<length;i++){
    var item = array[i];
    if(_.contains(array,item))continue;//有则跳出 没有则往下走
    for(var j = 1;j<argsLength;j++){
      if(!_.contains(arguments[j],item)) break;//没有则跳出当前循环
    }
    if(j === argsLength)result.push(item);
  }
  return result;
}
// _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4]
// ===== //
// 剔除 array 数组中在 others 数组中出现的元素
_.difference = function(array){
  var rest = flatten(arguments,true,true,1);
  return _.filter(array,function(value){
    return !_.contains(rest,value);
  })
}
_.difference = function(array) {
  var rest = flatten(arguments, true, true, 1);
  return _.filter(array, function(value){
    return !_.contains(rest, value);
  });
};
// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
// ===== //
// 将多个数组中相同位置的元素归类
// 返回一个数组
_.zip = function() {
  return _.unzip(arguments);
};

// _.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
// => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
// ------------------------------------------------------------------
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.max(stooges, function(stooge){ return stooge.age; });
// => {name: 'curly', age: 60};
//-------------------------------------------------------------------
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name');
// => ["moe", "larry", "curly"]
_.unzip = function(array){
  var length = array && _.max(array,getLength).length || 0;
  var result = Array(length);
  for(var index = 0;index<length;index++){
    result[index] = _.pluck(array,index);
  }
  return result;
}
_.unzip = function(array){
  var length = array && _.max(array,getLength).length || 0;
  var result = Array(length);
  for(var index =0;index<length;index++){
    result[index] = _.pluck(array,index);
  }
  return result;
}
_.unzip = function(array) {
  var length = array && _.max(array, getLength).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = _.pluck(array, index);
  }
  return result;
};
// 将数组转化为对象
//_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
//=> {moe: 30, larry: 40, curly: 50}
//_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
//=> {moe: 30, larry: 40, curly: 50}
_.object = function(list,value){
  var result = {};
  for(var i = 0,length = getLength(list);i<length;i++){
    if(value){
      result[list[i]] = value[i];
    }else{
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}
_.object = function(list,value){
  var result = {};
  for(var i=0,length = getLength(list);i<length;i++){
    if(value){
      result[list[i]] = values[i];
    }else{
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}
_.object = function(list, values) {
  var result = {};
  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
};
// _.findIndex([4, 6, 7, 12], isPrime);
//=> 2
//_.findIndex = createPredicateIndexFinder(1);
function createPredicateIndexFinder(dir){
  return function(array,predicate,context){
    predicate = cb(predicate,context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length -1 ;
    for(;index>=0 && index<length;index+=dir){
      if(predicate(array[index],index,array))return index;
    }
    return -1;
  }
}
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}
function createPredicateIndexFinder(dir){
  return function(array,predicate,context){
    predicate = cb(predicate,context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length-1;
    for(;index >= 0 && index < length;index+=dir){
      if(predicate(array[index],index,array))return index;
    }
    return -1;
  }
}
// _.findIndex([4, 6, 8, 12], isPrime);
// => -1 // not found
// _.findIndex([4, 6, 7, 12], isPrime);
// => 2
_.findIndex = createPredicateIndexFinder(1);
_.findLastIndex = createPredicateIndexFinder(-1);
// _.sortedIndex([10, 20, 30, 40, 50], 35);
// => 3
// var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
// _.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
// => 1
_.sortedIndex = function(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
};

function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = getLength(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), _.isNaN);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

_.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
_.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
//_.range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// _.range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// _.range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]
// _.range(0, -10, -1);
// => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
// _.range(0);
// => []
_.range = function(start,stop,step){
  if(stop == null){
    stop = start || 0;
    start = 0;
  }
  step = step || 1;
  var length = Math.max(0,Math.ceil((stop-start)/step));
  var range = Array(length);
  for(var i = 0;i<length;i++,start+=step){
    range[i] = start;
  }
  return range;
}
_.range = function(start,stop,step){
  if(stop == null){
    stop = start || 0;
    start = 0;
  }
  step = step || 1;
  var length = Math.max(Math.ceil((stop-start)/step),0);
  var range = Array(length);
  for(var idx = 0;idx<length;idx++,start+=step){
    range[idx] = start;
  }
  return range;
}
_.range = function(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};
// ------------------------------------------------------
_.first = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null || guard) return array[0];
  return _.inital(array,array.length - n);
}

_.inital = function(array,n,guard){
  return slice.call(arguments,0,Math.max(0,array.length - (n == null || guard ? 1 : n)));
}

_.last = function(array,n,guard){
  if(array == null)return void 0;
  if(n == null || guard) return array[array.length - 1];
  return _.rest(array,Math.max(0,array.length-n));
}

_.rest = function(array,n,guard){
  return slice.call(arguments,n==null || guard ? 1 : n);
}

_.compact = function(array){
  return _.filter(array,_.idenity);
}

var flatten = function(input,shallow,strict,startIndex){
  var output = [],idx = 0;
  for(var i = startIndex || 0,length = getLength(input);i<length;i++){
    var value = input[i];
    if(isArrayLike(value) && (_.isArray(value) || _.isArguments(value))){
      if(!shallow) value = flatten(value,shallow,strict);
      var j = 0 ,len = value.length;
      while(j<len){
        output[idx++] = value[j++];
      }
    }else if(!strict){
      output[idx++] = value;
    }
  }
  return output;
}

_.flatten = function(array,shallow){
  return flatten(array,shallow,false);
}

_.without = function(array) {
  return _.difference(array, slice.call(arguments, 1));
};

_.intersection = function(array){
  var argsLength = arguments.length;
  var result = [];
  for(var i = 0,length = getLength(array);i<length;i++){
    var item = array[i];
    if(_.contains(result,item))continue;
    for(var j = 1;j<argsLength;j++){
      if(!_.contains(arguments[j],item))break;
    }
    if(j === argsLength)result.push(item);
  }
  return result;
}

_.difference = function(array){
  var rest = flatten(arguments,ture,ture,1);
  return _.filter(array,function(value){
    return !_.contains(rest,value);
  })
}

_.zip = function(){
  return _.unzip(arguments);
}
_.unzip = function(array){
  var length = array && _.max(array,getLength).length;
  var result = Array(length);
  for(var index = 0;index < length;index++){
    result[index] = _.pluck(array,index);
  }
  return result;
}

_.object = function(list,values){
  var length = getLength(list);
  var result = {};
  for(var i = 0;i<length;i++){
    if(value){
      result[list[i]] = values[i];
    }else{
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}

function createPredicateIndexFinder(dir){
  return function(array,predicate,context){
    predicate = iteratee(predicate,context);
    var index = dir > 0 ? 0 : length - 1 ;
    for(;index >= 0 && index < length;index += dir){
      if(predicate(array[index],index,array))return index;
    } 
    return -1;
  }
}
_.findIndex = createPredicateIndexFinder(1);
_.findLastIndex = createPredicateIndexFinder(-1);

_.range = function(start,stop,step){
  if(stop == null){
    stop = start || 0;
    start = 0
  }
  step = step || 1;
  var length = Math.max(0,Math.ceil((stop-start)/step));
  var range = Array(length);
  for(var i = 0;i<length;i++,start+=step){
    range[i] = start;
  }
  return range;
}