## 全局用户名设置

- 修改name和email
```
git config -g user.name "newName"          // 修改name
git config -g user.email "newEmail"        // 修改email

```
- 查看name和email
```
git config user.name
git config user.email 
```

## 单个文件的用户名设置
1. 在项目根目录下找到.git 文件夹
2. 修改.git/config文件
```
//  1. cd .git
//  2. open config 或者 vim config
//  3. 在config文件中添加设置
[user]
    name = XXX(自己的名称英文)
    email = XXXX(邮箱)
```
