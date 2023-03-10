const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './backend/uploads/')
    },
    filename: (req, file, cb) =>{
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
    
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) =>{
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ){
            callback(null, true)
        }else{
            callback(new Error('only jpg, jpeg & png files are supported'), false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

module.exports = upload;
