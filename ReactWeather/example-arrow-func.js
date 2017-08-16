var names = ['Yoav', 'Andrew', 'Julie', 'Jen'];


// names.forEach( (name) => console.log('ForEach', name));


var returnMe = (name) => name + '!';

// console.log(returnMe('Yoav'));


var person = {
    name: 'Yoav',
    greet: () => {
        names.forEach((name) => {
            console.log(this.name + ' say hi to' + name)
        })
    }
}

person.greet();




var addStatement = (a, b) => {
    return a + b;
};

var addExpresion = (a, b) =>  a + b; 

console.log(addStatement(1,3));
console.log(addExpresion(0,9));