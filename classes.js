// practicing classes, static keyword, extends keyword to create subclass, class constructor, super constructor

// created a class Engineer which has name, contributionsMade as it's attributes and a method name contribute() to increase the count

class Engineer {
    constructor(name) {
        this._name = name;
        this._contributionsMade = 0;
    } //parent class constructor with it's own attributes. This is a special method that is called when the object is created. 
      // Constructor methods are usually used to set initial values for the object.

    get name() {
        return this._name; //calling our name of parent class
    }

    get contributionsMade() {
        return this._contributionsMade; //calling the no. of contributions made
    }

    contribute() {
        this._contributionsMade ++;
        return this._contributionsMade; //contribute() method to increase the count of our contributions made by 1
    }

    static generateAccessID() {
        return Math.floor(Math.random()*10000); //methods called with static keywords can only be called on the parent class not it's instances.
    }
}


console.log(Engineer.generateAccessID()); //static method is called to generate accessID. 

// created a subclass WebEngineer from the parent class using the 'extends' keyword.
class WebEngineer extends Engineer {
    constructor(name, expertise = []){
        super(name); // calls Engineer's constructor using the 'super' keyword
        this._expertise = expertise;
    }

    get expertise() {
        return this._expertise; //an array of engineer's expertise
    }

    addExpertise(newLearnings) {
        this.expertise.push(newLearnings); // to add new expertise to the array
    }
}


const eng1 = new WebEngineer('Manan',['Backend']);
console.log(eng1.name); 
eng1.addExpertise('Frontend');
console.log(eng1.expertise);
eng1.contribute();
console.log(eng1.contributionsMade);

//practice on your own by adding usage statements according to your own needs