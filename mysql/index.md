

## 库的操作 database opreation

### create
create DATABASE database_name;

### show
show DATABASES;

### delete
drop DATABASE database_name;

### update
1. 新建
2. 复制
3. 删除

### choose 选择数据库
use database_name;

## 表的操作

## create 新建table

CREATE TABLE table_name (column_name column_type);
```
CREATE TABLE IF NOT EXISTS `users`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `username` VARCHAR(100) NOT NULL,
   `password` VARCHAR(40) NOT NULL,
   `realname` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;        
```


## 表内操作

### 增

insert into table_name (column_name, column_name2) values (column_value1, column_value2);
```
insert into users (username, `password`, realname) values ("wangchao", "123", "wangchaoreal");
```

### 查

#### 查询所有
select * from table_name;
```
select * from users;
/* 
return
+----+----------+----------+--------------+
| id | username | password | realname     |
+----+----------+----------+--------------+
|  1 | wangchao | 123      | wangchaoreal |
+----+----------+----------+--------------+
*/
```

#### 条件查询
SELECT column_name, column_name2 FROM table_name [WHERE Clause] [LIMIT N] [ OFFSET M];
- 查询无条件

```
select id, username from users;
/* 
return
+----+----------+
| id | username |
+----+----------+
|  1 | wangchao |
+----+----------+
*/
```

- 查询单条件

```
select id, username from users where id = 1;
/* 
return
+----+----------+
| id | username |
+----+----------+
|  1 | wangchao |
+----+----------+
*/
```

- 查询多条件

```
-- 交集
select id, username from users where id = 1 and username = "wangchao";
/* 
return
+----+----------+
| id | username |
+----+----------+
|  1 | wangchao |
+----+----------+
*/
-- 并集
select id, username from users where id = 1 or username = "wangchao";
/* 
return
+----+----------+
| id | username |
+----+----------+
|  1 | wangchao |
|  2 | wangchao |
+----+----------+
*/
```

- 模糊查询

```
select id, username from users where username like "%chao%";
/* 
return
+----+----------+
| id | username |
+----+----------+
|  1 | wangchao |
|  2 | wangchao |
+----+----------+
*/
```

- 排序


```
-- desc 倒序
select id, username from users order by id desc;
/* 
return
+----+----------+
| id | username |
+----+----------+
|  2 | wangchao |
|  1 | wangchao |
+----+----------+
*/
```

### 改

update table_name column_name = new_value;
```
-- 修改所有
update users  set username = 'newwangchao';

```
update table_name  set column_name = new_value where <条件>;
```
-- 条件修改
update users  set username = 'newwangchao', realname = 'newwangchao' where id = 1;

```

### 删

- 删除所有
delete from table_name;
```
delete from users;

```

- 条件删除
```
delete from users where username = 'wangchao';

```
ps: 删除之后自增的id会跳过
- 伪删除(新建一个表示是否删除的状态来表示是否删除)
```
update users set deletestate = '0'
```

