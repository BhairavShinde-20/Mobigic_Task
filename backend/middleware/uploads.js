const util = require("util");
const multer = require("multer");
const maxSize = 10 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let _path = __dirname;
    _path = _path.replace("middleware", "");
    cb(null, _path + "/public/profileImages");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    let fileName = file.originalname.replace(/ +/g, "");
    fileName.replace(/[^a-zA-Z0-9 ]/g, "");
    let _fileName = `${Date.now()}-humanize-${fileName}`;
    cb(null, _fileName);
  },
});
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;