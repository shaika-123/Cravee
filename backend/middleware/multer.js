// middleware/multer.js
import multer from 'multer';

const storage = multer.memoryStorage(); // Use memory storage for Cloudinary stream

const fileFilter = (req, file, cb) => {
  console.log('Multer fileFilter - File info:', {
    originalname: file.originalname,
    mimetype: file.mimetype,
    fieldname: file.fieldname
  });
  
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    console.log('❌ Invalid file type:', file.mimetype);
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  }
});

export default upload;
