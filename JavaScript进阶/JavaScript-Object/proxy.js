const employer = {
    name: 'komei'
};

/**
 * employer访问代理
 */
const representative = new Proxy(employer, {
    get: (target, key) => {
        console.log('Reading ' + key + ' through a proxy');
        return key in target ? target[key] : 'do not bother employer';
    },
    set: (target, key, value) => {
        console.log('setting ' + key + ' through a proxy');
        target[key] = value;
    }
});

console.log(representative.name);   // Reading name through a proxy \n komei
console.log(representative.age);    // do not bother employer
representative.name = 'new komei';  // setting name through a proxy
console.log(representative.name);   // Reading name through a proxy \n new komei
representative.age = 12;            // setting age through a proxy
console.log(representative.age);    // Reading name through a proxy \n 12