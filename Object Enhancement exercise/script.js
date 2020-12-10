//Same Keys and values ES2015

function createInstructor (firstName,lastName) {
    return {
        firstName,
        lastName
    }
}

//computed Property Names Es2015

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods ES2015
const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName " says bye!";
  }
}

const d = createAnimal("dog", "bark", "Woooof!")
//{species:"dog", bark: f}
d.bark() //"Woooof!"

const s = createAnimal("sheep","bleet","BAAAAaaaa")

function createAnimal(species,verb,noise) {
    return {
        species,
        [verb] () {
            return noise;
        }
    }
}