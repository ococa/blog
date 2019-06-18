oldName等待修改的分支名字
newName将要修改的新名字

## 两种情况

### 情况一：未提交过的本地分支
```
git branch -m oldName newName
```
### 情况二：修改远程分支的名字
1. 修改本地分支名字
```
git branch -m oldName newName
```
2. 删除远程分支
```
git push --delete origin oldName
```
3. 将修改过名字的本地分支上传到远程
```
git push --set-upstream origin newName
```
或者分两步
```
git push origin newName
git branch --set-upstream-to origin/newName
```