## 设计模式分类
1. 创建型设计模式
简介：专注于处理对象创建机制

包括：
构造器，工厂，抽象，原型，单例，生成器
constructor，factory，abstract，prototype，singleton，builder

2. 结构型设计模式
简介：处理对象之间的组合，

包括：
装饰者，外观，享元，适配器，代理
decorator，facade，flyweight，adapter，proxy

3. 行为设计模式
简介：专注于改善或者简化系统中不同对象之间的通信

包括：
迭代器，中介者，观察者，访问者
iterator，mediator，observer，visitor

## 详细

### 创建型设计模式

#### factory（工厂模式）
1. 适用场景
- 当对象或组件设置涉及高复杂性时
- 当需要根据不同的条件创建不同的对象的不同实例
- 当处理很多共享相同属性的小型对象或者组件时
- 在编写指需要满足一个api契约（鸭子类型）的其他对象的实例时。对解耦是很有用的。 ？？？ 啥意思了

#### abstract factory （抽象工厂模式）