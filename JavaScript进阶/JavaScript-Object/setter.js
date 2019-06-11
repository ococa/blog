/**
 * es5 getter and setter
 */

const ninjaCollection = {
    ninjas: ['Yoshi', 'Kuma', 'Hattori'],
    get firstNinja() {
        console.log('get first ninja');
        return this.ninjas[0]
    },
    set firstNinja(name) {
        console.log('set first ninja');
        this.ninjas[0] = name;
    }
}

console.log(ninjaCollection.firstNinja);    // get first ninja  \n Yoshi
ninjaCollection.firstNinja = 'new Yoshi'    // set first ninja
console.log(ninjaCollection.firstNinja);    // get first ninja  \n new Yoshi

/**
 * es6 setter and getter
 */

class NinjaCollection6 {
    constructor() {
        this.ninjas = ['Yoshi', 'Kuma', 'Hattori'];  
    }
    get firstNinja() {
        console.log('get first ninja');
        return this.ninjas[0];
    };
    set firstNinja(name) {
        console.log('set first ninja');
        this.ninjas[0] = name;
    };
}

const ninjaCollection6 = new NinjaCollection6();
console.log(ninjaCollection6.firstNinja);    // get first ninja  \n Yoshi
ninjaCollection6.firstNinja = 'new Yoshi'    // set first ninja
console.log(ninjaCollection6.firstNinja);    // get first ninja  \n new Yoshi


/**
 * defineProperty实现私有变量getter和setter
 */
function Ninja() {
    let _skillLevel = 0;
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('in getter');
            return _skillLevel;
        },
        set: value => {
            console.log('in setter');
            if (!Number.isInteger(value)) { throw new TypeError('skillLevel should be a number')};
            _skillLevel = value;
        }
    });
};

const ninja = new Ninja();
console.log(ninja._skillLevel);     // undefined
console.log(ninja.skillLevel);      // in getter \n 0
ninja.skillLevel = 101;             // in setter
console.log(ninja.skillLevel);      // in getter \n 101
try {
    ninja.skillLevel = '101'       
} catch (e) {
    console.log(e)
}