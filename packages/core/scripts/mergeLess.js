const fs = require('fs');
const path = require('path');

const filePath = path.resolve('./src');
const variablePath = path.resolve('./Public/commonStyle');

// let lessSummary = '';

const newLessFile = './dist/theme/theme.less';

// 首先创建一个less文件，如果有就将文件置空，如果没有 就创建
fs.writeFile(newLessFile, '// 仅用于实时换肤 \n', 'utf8', function (writeError) {
  if (writeError) {
    console.error(writeError);
  } else {
    console.log('SUCCESS');
  }
});

function mergeLess(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err);
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        var fileDir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(fileDir, function (error, stats) {
          if (error) {
            console.warn('获取文件stats失败');
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              //获取最后一个.的位置
              var index = fileDir.lastIndexOf('.');
              //获取后缀
              var ext = fileDir.substr(index + 1);
              if (ext === 'less') {
                fs.readFile(fileDir, 'utf8', function (readError, fileStr) {
                  if (readError) {
                    console.error(readError);
                  } else {
                    const reg = new RegExp('@import(.)*;\n', 'g');
                    const currentLess = `${fileStr.replace(reg, '')}\n`;
                    // 在less文件中插入
                    fs.appendFile(newLessFile, currentLess, function (appendError) {
                      if (appendError) {
                        console.error(appendError);
                      } else {
                        console.log('APPEND SUCCESS');
                      }
                    });
                  }
                });
              }
            }
            // 如果是文件夹，就继续遍历该文件夹下面的文件
            if (isDir) {
              mergeLess(fileDir); //递归
            }
          }
        });
      });
    }
  });
}

mergeLess(variablePath); // 读取变量相关less文件
mergeLess(filePath); // 读取每个组件中的样式
