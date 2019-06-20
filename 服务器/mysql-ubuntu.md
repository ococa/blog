# ubuntu安装mysql

<a name="K3YWg"></a>
##  安装
```
apt-get update  
```

2. 安装
```
sudo apt-get install mysql-server mysql-client
```

3. 查看版本

```
mysql –V  
service mysql start  
service mysql stop  
service mysql status  
service mysql restart  
```

<a name="2rmGS"></a>
## 开启远程登陆

1. 找到配置文件
```
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

2. 将这行代码注释或者删掉
```
bind-address = 127.0.0.1
```

3. 进入数据库

```
mysql -u root -p
```

4. 授权root(或者其他)用户访问权限，并刷新权限

```
grant all privileges on *.* to root@"%" identified by "{这里输入用户密码}" with grant option;
flush privileges;
exit;
```

5. 重启mysql

```
service mysql restart
```
<a name="jIIpO"></a>
## 修改数据库默认端口

1. 找到配置文件
```
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

2. 将这行代码注释或者删掉
```
bind-address = 127.0.0.1
```

3. 进入数据库
```
mysql -u root -p
```

4. 授权root(或者其他)用户访问权限，并刷新权限
```
grant all privileges on *.* to root@"%" identified by "{这里输入用户密码}" with grant option;
flush privileges;
exit;
```

5. 重启mysql
```
service mysql restart
```

<a name="GJJj9"></a>
## 完全卸载mysql
[https://blog.csdn.net/w3045872817/article/details/77334886](https://blog.csdn.net/w3045872817/article/details/77334886)
