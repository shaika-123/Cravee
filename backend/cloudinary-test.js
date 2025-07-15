// cloudinary-test.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the backend root directory
dotenv.config({ path: path.join(__dirname, '.env') });

console.log('Testing Cloudinary configuration...');
console.log('Environment variables:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Missing',
  api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Missing'
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Test simple image upload
const testImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

try {
  const result = await cloudinary.uploader.upload(testImage, {
    folder: "cravee-test",
    resource_type: "image"
  });
  
  console.log('✅ Cloudinary test successful!');
  console.log('Upload result:', result.secure_url);
  
  // Clean up test image
  await cloudinary.uploader.destroy(result.public_id);
  console.log('✅ Test image cleaned up');
  
} catch (error) {
  console.error('❌ Cloudinary test failed:', error);
}
