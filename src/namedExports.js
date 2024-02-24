function sayHello() {
    console.log("====> Hello bro. I've been exported with an alias using 'as' keyword <====");
}

class Animal {
    constructor(name, animal) {
        this.name = name;
        this.animal = animal;
    }

    checkInfo() {
        console.log(`name: ${this.name} - animal: ${this.animal}`);
    }
}

// EXPORTS
export {
    sayHello as hello,
    Animal
};

export class Laptop {
    constructor(manufacturer, screenSize, resolution) {
        this.manufacturer = manufacturer;
        this.screenSize = screenSize;
        this.resolution = resolution;
    }
}