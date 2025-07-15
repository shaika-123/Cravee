// test-request.js - Test the actual API endpoint
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

async function testFoodAPI() {
  try {
    console.log('Testing /api/food/add endpoint...');
    
    const formData = new FormData();
    formData.append('name', 'Test Food Item');
    formData.append('description', 'This is a test description');
    formData.append('price', '15.99');
    formData.append('category', 'Salad');
    
    // Create a proper test image (1x1 pixel PNG)
    const testImageData = Buffer.from([
      0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
      0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
      0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
      0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53,
      0xDE, 0x00, 0x00, 0x00, 0x0C, 0x49, 0x44, 0x41,
      0x54, 0x08, 0xD7, 0x63, 0xF8, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x01, 0x5C, 0xC9, 0x6A, 0x8A,
      0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44,
      0xAE, 0x42, 0x60, 0x82
    ]);
    
    formData.append('image', testImageData, {
      filename: 'test.png',
      contentType: 'image/png'
    });
    
    console.log('Form data prepared, sending request...');
    
    const response = await axios.post('http://localhost:4000/api/food/add', formData, {
      headers: {
        ...formData.getHeaders()
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('✅ Success:', response.data);
    
  } catch (error) {
    console.error('❌ Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure the backend server is running on port 4000');
    }
  }
}

testFoodAPI();
