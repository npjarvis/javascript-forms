"use strict";
// curly braces define objects
var person = {
    name: 'theodore',
    sayHello: function() {
        return 'Hello ' + this.name;
    }
};

console.log(person.name);
person.name = 'Dave';
person.coolnessFactor = 0;
person.reportCoolness = function() {
    if (this.coolnessFactor > 50) {
        console.log('very cool!');
    }
    else {
        console.log('total nerd!');
    }
}
// asks person object if it has keymap of function sayHello, object says yes and returns the function
console.log(person.sayHello());
person.reportCoolness();
person.coolnessFactor = 55;
person.reportCoolness();
// in js every method is public and always open, allowing us to add things to them all the time (unless you use closure)