import fs from 'fs';
import { Readable } from 'stream';

function convertFileByImgPath(imgPath: string) {
  return fs.createReadStream(imgPath);
}

function convertFileFromImgBase64(imgBase: string) {
  const readStream = new Readable();
  readStream.push(Buffer.from(imgBase, 'base64'));
  readStream.push(null);
  return readStream;
}

function convertFileToImgBase64(imgPath: string) {
  return fs.readFileSync(imgPath, 'base64');
}

const isBase64 = (str: string) => {
  const base64Regex = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}==|[A-Za-z\d+/]{3}=)?$/;
  return base64Regex.test(str);
};

function convertFile(file: string | object) {
  if (!isBase64(file as string) && typeof file === 'string') {
    return convertFileByImgPath(file);
  } else if (isBase64(file as string)) {
    return convertFileFromImgBase64(file as string);
  } else if (file instanceof fs.ReadStream || file instanceof Readable) {
    return file;
  } else {
    return file;
  }
}

export const utils = {
  convertFileByImgPath,
  convertFileFromImgBase64,
  convertFileToImgBase64,
  isBase64,
  convertFile,
};
