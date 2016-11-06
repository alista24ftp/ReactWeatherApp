var names = ['John', 'Jason', 'Julie'];

// normal iteration over the array
names.forEach(function(name){
  console.log('Normal foreach', name);
});

// iterating using arrow functions, exactly same functionality as above
names.forEach((name) => {
  console.log('Arrow function', name);
});

// for single statements we can get rid of the curly braces
names.forEach((name) => console.log(name));

// arrow functions with a single statement automatically returns that statement
var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

// Main difference between anonymous and arrow functions is their definition of
// 'this' binding (arrow function has parent's 'this' binding)
var person = {
  name: 'John',
  buggyGreet: function(){
    names.forEach(function(name){
      // Anonymous functions update 'this' keyword, and result may not be what we want.
      // this.name == undefined in this case, and not equal to 'John'
      console.log(this.name + ' says hi to ' + name);
    });
  },
  correctGreet: function(){
    names.forEach((name) => {
      // In arrow functions, 'this' keyword will NOT get updated
      // thus, this.name == 'John'
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
person.buggyGreet();
person.correctGreet();

// Challenge: Create add function using arrow functions
var add = (a, b) => a+b;
console.log(add(2,3));
