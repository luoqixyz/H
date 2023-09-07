## 最近创建的5个文件
```dataviewjs
dv.table(["Title", "Recap", "CTime", "MTime"], dv.pages('"Inbox"')
		.sort(d => d.CreateTime,'desc')
		.map(d => [d.Title, d.Recap, d.CreateTime, d.file.mtime])
		.limit(5))
```

## 最近修改的5个文件
```dataviewjs
dv.table(["Title", "Recap", "CTime", "MTime"], dv.pages('"Inbox"')
		.sort(d => d.file.mtime,'desc')
		.map(d => [d.Title, d.Recap, d.CreateTime, d.file.mtime])
		.limit(5))
```
