/**
 * publish/subscribe 实现
 */

const _ = {};
(function(q) {
    let topics = {};
    let subUid = -1;
    // 发布或广播事件，包含特定的topic和参数
    q.publish = function(topic, args) {
        // 如果要发布的事件不存在
        if (!topics[topic]) {
            return false;
        }
        let subscribers = topics[topic];
        let len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    };
    // 通过特定的名称和回掉函数订阅事件，topic/event触发时执行事件
    q.subscribe = function(topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        
        let token = (++subUid).toString();
        topics[topic].push({
            token,
            func
        })
    };
    // 基于订阅上的标记引用，通过特定的topic取消订阅
    q.unsubscribt = function(token) {
        for (let m in topics) {
            if (topics[m]) {
                for (let i = 0, mlength = topics[m].length; i < mlength; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].slice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
})(_);

/**
 * publish/subscribe使用
 * 简单的消息记录器。
 * 功能：记录所有通过订阅者接受的主题和数据
 */

const messageLoger = function(topics, data) {
    console.log(`Logging: ${topics} : ${data}`)
};

// 订阅者监听的topic
let subscription = _.subscribe('inbox/newMessage', messageLoger);

// 发布者负责发布程序感兴趣的topic或通知, 例如
_.publish('inbox/newMessage', 'hello world!');

// 或者
_.publish('inbox/newMessage', {
    data: 'index/newMessage'
});

// 或者
_.publish('inbox/newMessage', ['test', 'test2', 'test3']);


