const chalk = require('chalk');
/**
 * mediator pattern 
 * 中介者模式简单实现
 */
const mediator = (function() {
    // 存储可被广播或者监听的topic
    // key: topicName, value: subscription
    let topics = {};
    // 订阅一个topic，提供一个回调函数，一旦topic被广播就执行该回调
    const subscribe = function(topic, fn) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        topics[topic].push({context: this, callback: fn});
        return this;
    };
    // 发布或广播事件到程序的剩余部分
    const publish = function(topic) {
        let args;
        if (!topics[topic]) {
            return false;
        }

        args = Array.prototype.slice.call(arguments, 1);
        for (let i = 0, l = topics[topic].length; i < l; i++) {
            let subscription = topics[topic][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
    return {
        publish,
        subscribe,
        installTo: function(obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
})();

/**
 * test code
 * 测试代码
 */

mediator.subscribe('event1', function(data) {
    console.log(chalk.red('hhallll'));
    console.log(chalk.red(data.message));
})
mediator.publish('event1', {message: 'event1-message1'})
mediator.publish('event1', {message: 'event1-message2'})
mediator.publish('event1', {message: 'event1-message3'})

console.log(chalk.red('hhallll'))

