```
const fs = require('fs');
const path = require('path');

console.log('__dirname', __dirname)		// 目录名
console.log('__filename', __filename)	// 文件名

// 读取文件
const fileName = path.resolve(__dirname, 'test.txt')
fs.readFile(fileName, (err, data) => {
	if (err) {
		console.log('err', err)
	}
	// data是buffer格式（二进制）数据，需要转换为字符串
	console.log(data.toString());
})

// 写入文件
const content = '这是新写入的内容\n';

const opt = {
	flag: 'a'			// a 追加写入。 w表示覆盖写入
}

fs.writeFile(fileName, content, opt, (err) => {
	if (err) {
		console.log('err', err)
	}
})


// 判断文件是否存在
fs.exists(fileName, (exists) => {
	console.log('exist', exists)
})

```