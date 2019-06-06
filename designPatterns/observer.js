/**
 * observer 观察者模式
 * 一个对象(subject)维持一系列依赖于它(观察者)的对象，将有关状态的任何变动告诉给它们
 * 如：dom事件，react-redux的provider组件
 * 观察者模式中的角色：
 * Subject          --> 目标,被观察者     ---> class Subject
 * Observer         --> 观察者           ---> class Observer
 * ConcreteSubject  --> 具体目标         ---> controlCheckbox,controlInput
 * ConcreteObserver --> 具体观察者       ---> AddInputbserver生成的input，AddCheckboxbserver生成的checkbox，
 */

 /**
  * Observer class
  */
function ObserverList() {
    this.observerlist = [];
};

ObserverList.prototype.Add = function(obj) {
    return this.observerlist.push(obj);
};

ObserverList.prototype.clear = function() {
    return this.observerlist = [];
};

ObserverList.prototype.Count = function() {
    return this.observerlist.length;
};

ObserverList.prototype.Get = function(index) {
    if (index > -1 && index < this.observerlist.length) {
        return this.observerlist[index];
    }
};

ObserverList.prototype.Insert = function(obj, index) {
    let pointer = -1;
    if (index === 0) {
        this.observerlist.unshift(obj);
        pointer = index;
    } else if (index === this.observerlist.length) {
        this.observerlist.push(obj);
        pointer = index;
    }
    return pointer;
};

ObserverList.prototype.IndexOf = function(obj, startIndex = 0) {
    let i = startIndex;
    let pointer = -1;
    while (i < this.observerlist.length) {
        if (this.observerlist[i] === obj) {
            pointer = i;
        }
        i++;
    }
    return pointer;
};

ObserverList.prototype.RemoveIndexOf = function(index) {
    if (index ===0) {
        this.observerlist.shift();
    } else if (index === this.observerlist.length - 1) {
        this.observerlist.pop();
    }
};



// 使用extension扩展对象
function extend(obj, extension) {
    for (let key in obj) {
        extension[key] = obj[key]
    }
}

/**
 * Subject 目标，被观察者 class 
 */

function Subject() {
    this.observers = new ObserverList();
};

Subject.prototype.AddObserver = function(observer) {
    this.observers.Add(observer);
};

Subject.prototype.RemoveObserver = function(observer) {
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
};

Subject.prototype.Notify = function(context) {
    let observerCount = this.observers.Count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.Get(i).Update(context);
    }
}

function Observer() {
    this.Update = function() {
        console.log("this is Observer.Update function");
        // TODO finish this function 
    }
}

// 引用dom元素
let controlCheckbox = document.getElementById('cb1');
let addBtn = document.getElementById('btn1');
let container = document.getElementById('container');

// 具体目标 concrete subject --> controlCheckbox (被观察者是controlCheckbox)

// 利用Subject扩展controlCheckbox
extend(new Subject(), controlCheckbox);

// 点击checkbox会触发通知到观察者上
controlCheckbox.onclick = new Function('controlCheckbox.Notify(controlCheckbox.checked)');
// controlCheckbox.onclick = controlCheckbox.Notify(controlCheckbox.checked);

addBtn.onclick = AddNewObserver;

// 具体观察者， concrete observer
function AddNewObserver() {
    let check = document.createElement('input');
    check.type = "checkbox";

    // 利用Observer类来扩展checkbox
    extend(new Observer(), check);

    // 重写自定义更新行为
    check.Update = function(value) {
        this.checked = value;
    }
    // 未主subject的观察者列表添加新的观察者
    controlCheckbox.AddObserver(check);
    // 将观察者附到容器上
    container.appendChild(check);
}

let controlInput = document.getElementById('input2');
let containerList = document.getElementById('containerList');
let btn2 = document.getElementById('btn2');

// concret subject，具体被观察者
extend(new Subject(), controlInput);
// 被观察者通知事件给观察者
controlInput.oninput = new Function('controlInput.Notify(controlInput.value)');

// 添加观察者
btn2.onclick = AddInputbserver;

// concrete observer，具体观察者
function AddInputbserver() {
    let input = document.createElement('input');
    input.type = "text";

    // 利用Observer类来扩展input
    extend(new Observer(), input);

    // 重写自定义更新行为
    input.Update = function(value) {
        this.value = value;
    }
    // 在主concret subject 中添加新的观察者
    controlInput.AddObserver(input);

    // 将观察者附到容器上
    containerList.appendChild(input);
}