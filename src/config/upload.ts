import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tempFolder,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const filehash = crypto.randomBytes(10).toString('HEX');
      const filename = `${filehash}-${file.originalname}`;
      return callback(null, filename);
    },
  }),
};
