const array1 = [()=>{
  console.log('function stored in array as value');
},
{name:'siifan',
 age:1
},true];
console.log(array1);
console.log(array1[0]);
array1[0]();
console.log(array1[1]);