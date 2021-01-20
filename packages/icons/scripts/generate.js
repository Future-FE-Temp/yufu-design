'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { template } = require('lodash');

const args = process.argv.splice(2);
const fileDirRootPath = args[0];
const error = chalk.bold.red;
const success = chalk.bold.green;

const renderSvgIcon = template(`import BaseIcon, { IconProps } from '../components/BaseIcon';

const  <%= svgName %>Svg = () => <svg><%= content %>;

const <%= svgName %> = (props: IconProps) => <BaseIcon component={<%= svgName %>Svg} {...props} />;

export default <%= svgName %>;
`);

const indexExport = template(`export { default as <%= svgName %>Icon } from './icons/<%= svgName %>';
`);

const iconPath = path.resolve(__dirname, '../src/icons');

const currentTSXFiles = fs.readdirSync(iconPath);

function readFileDir(fileDirPath) {
  fs.readdir(fileDirPath, { encoding: 'utf-8' }, (err, files) => {
    if (err) {
      console.error(error('error'), err);
    }
    files.forEach((fullFilename) => {
      const filePath = path.join(fileDirPath, fullFilename);
      const stats = fs.statSync(filePath);
      const isDir = stats.isDirectory();
      const isFile = stats.isFile();
      if (isDir) {
        readFileDir(filePath);
      }
      if (isFile) {
        if (!/\.(svg)$/.test(fullFilename)) {
          console.error(error(fullFilename + " is't svg"));
          return;
        }
        const FileName = fullFilename.replace('.svg', '');
        fs.readFile(filePath, (readErr, data) => {
          if (readErr) {
            console.error(error(`${FileName}.svg read failed`, readErr));
          }
          const svgData = SVGToReact(data);
          fs.writeFile(
            path.join(iconPath, FileName + '.tsx'),
            renderSvgIcon({ svgName: FileName, content: svgData }),
            (writeErr) => {
              if (err) {
                console.error(error(`${FileName}.tsx is failed`), writeErr);
              } else {
                console.info(success(`${FileName}.tsx is saved`));
              }
            },
          );
        });
        appendIndexTSX(FileName);
      }
    });
  });
}

function SVGToReact(data) {
  const svgData = data.toString('utf-8').match(/<svg([\S\s]*)svg>/) || [];
  if (svgData.length == 0) {
    return null;
  }
  return svgData[0].replace(/<svg([\s\S]*?)>/, '');
}

function appendIndexTSX(fileName) {
  if (currentTSXFiles.includes(`${fileName}.tsx`)) return;
  fs.appendFile(
    path.join(__dirname, '../src/index.tsx'),
    indexExport({ svgName: fileName }),
    () => {},
  );
}
readFileDir(fileDirRootPath);
