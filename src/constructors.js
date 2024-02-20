// class
class Player {
    constructor(name, level, village) {
        this.name = name;
        this.level = level;
        this.village = village;
    }

    attack() {
        console.log(`${this.name} attacks!`);
    }
}

// regular constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = () => {
    console.log(`Hello. I'm ${this.name} - ${this.age} years old`);
}

// factory function
function createMap(name, size) {
    return {
        name,
        size
    }
}

export {
    Player,
    createMap
}