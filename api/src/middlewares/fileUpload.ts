import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config()


const storage = multer.memoryStorage()
const upload = multer({storage: storage})

const imageUpload = upload.array('images',4)

//cloudinary configuration
cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export { imageUpload }