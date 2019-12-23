### 
www(world wide web)万维网的三项基础：
1. html 页面的文本标记语言
2. http 文档传递协议
3. URL  指定文档所在位置

#### http的基础 

##### 网络分层
1. OSI七层
。。。// todo
2. tcp/ip 四层
应用层(客户端 http) -> 传输层（tcp） -> 网络层（ip） -> 链路层（网络）
应用层(服务端 http) <- 传输层（tcp） <- 网络层（ip） <- 链路层（网络）


##### tcp
1. tcp位于传输层 提供**可靠**的字节流服务（byte stream service）
2. 字节流是指将大块数据分割成报文段为单位的数据包进行管理。
3. 为了确保数据能准确的到达 tcp采取三次握手策略。

###### 三次握手
- 三次握手的flag --- SYN（synchronize（同步））和ACK（acknowledgement（确认））
- 三次握手过程
    - 客户端发送 SYN标志的数据包给对方
    - 接受端接收到之后回传一个SYN/ACK标志的数据包以表示确认收到消息
    - 发送端发送带ACK标志的数据包 表示握手结束

- 如果在握手过程某个阶段莫名中断 会重新开始

- tcp协议还有其他方式保证通信的可靠性 // todo ？？？ 啥？

##### dns是啥？
DNS（domain name system）域名解析服务，位于应用层。提供从域名到ip地址之间的解析服务

##### 各种协议之间的协作关系

##### url和uri
url（uniform resource locator统一资源定位符）
uri（uniform resource identifier统一资源标识符）
1. url是uri的子集，用来表示web页面时需要输入的网址是url
2. uri是由某个协议方案表示的资源的定位标识符。协议方案是指访问资源所使用的协议类型名称，采用 HTTP 协议时，协议方案就是 http。除此之外，还有 ftp、mailto、telnet、file 等。
3. 

