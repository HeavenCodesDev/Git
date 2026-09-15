function function1(){
  console.log('function is a value');
}
function1();

const functionContainer = () =>{
  console.log('Arrow Function');
}
functionContainer();

const object= {
  name:'object',
  method(){
    console.log('this is a method which is a function inside an object');
  }
};
object.method();
