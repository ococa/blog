# git新建本地分支并推送到远程
1. 新建并切换到本地分支 dev
```
git checkout -b dev                     // 新建并切换到本地分支 dev(dev是新分支名)
git branch -vv                          // 查看分支状态
```

2. 切换本地分支
```
git checkout dev                        // 切换到本地dev分支
git checkout master                     // 切换到本地master分支
```

3. 新建完成后第一次将本地dev分支推送到远程
```
git branch  -vv                         // 查看当前处于与远程分支建立联系的本地分支
git pull                                // 先拉取远程分支的更新
git push --set-upstream origin dev      // 将本地新建的dev分支推送到远程，并且建立跟踪关系
```

4. 以后推送
```
git pull                                // 先拉取远程分支的更新
git push                                // 推送更新
```

