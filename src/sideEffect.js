// Side Effect module

function sideEffect() {
    console.log("THIS IS A SIDE-EFFECT MODULE");
}

sideEffect();

/*
this var can't be accessed when "import './sideEffect.js'"
bcoz this code is just being ran, not imported.
*/
let randomVar = 'random';