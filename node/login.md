## cookie 

什么是cookie
JavaScript操作cookie
```
document.cookie // 查看cookie
document.cookie = "key1 = value1"       // 添加cookie

```
server操作cookie 

```
// 获取cookie 
request.headers.cookie
// 设置cookie
res.setHeader('Set-Cookie', `username=${username}`)
```
缺点：
1. cookie信息会暴露，危险
2. cookie大小限制，影响性能
解决：
cookie存储userid，server端根据userid对应username等其他信息

## session

服务端存储数据

## redis 内存数据库

内存数据库
缓存数据库
缺点: 成本高，存储量小