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

const array2 = [1,2,3,4];
console.log(array2);
for(let i= 0;i<array2.length;i++){
  console.log(array2[i]);
}
console.log('looping through an array');