const person = {
    name : ['Code', 'Mafia'],
    age: 32,
    gender: 'male',

    getFullName: function(){
        console.log(this.name[0]+ this.name[1])
    }
        
};

console.log(person.name);
person.getFullName();