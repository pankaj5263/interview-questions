const array = [1, 2, 3, 4, 5, 6];

//polyfill of map

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i],  i, this));
  }

  return temp;
};

console.log(array.myMap((ele) => ele * 2));


// polyfill of filter function

Array.prototype.myFilter = function (cb){
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)){
          temp.push(this[i]);
        }
    }

    return temp;
}

console.log(array.myFilter((ele) => ele > 2));

// polyfill of reduce function

Array.prototype.myReduce = function (cb, initializeValue){
     let accumulator = initializeValue;

     for (let i = 0; i < this.length;i++){
        accumulator = accumulator? cb(this[i], i, this) : this[i];
     }

     return accumulator;
}

// difference between map and foreach

// map
//1. we can chain array
//  2. it will return new array

// foreach
 //1. we can not chain array because does not return anything.
 // 2 it does not return any thing.





