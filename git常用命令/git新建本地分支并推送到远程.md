1. 新建并切换到本地分支 dev
```
git checkout -b dev                     // 
git branch -vv                          // 查看分支状态
```

2. 切换本地分支
```
git checkout dev                        // 切换到本地dev分支
git checkout master                     // 切换到本地master分支
```

2. 将本地dev分支推送到远程
```
git push origin/dev                     //
git branch -vv                          //
```

3. 建立本地分支和远程分支的跟踪关系
```
git branch                              // 当前处于与远程分支建立联系的本地分支
git push --set-upstream origin dev      // 与远程的dev分支建立联系
```

