// Test script to check the food API
import fs from 'fs';
import path from 'path';

// Test data - you can modify this as needed
const testFoodData = {
  name: "Test Food Item",
  description: "This is a test food item description",
  price: "15.99",
  category: "Salad"
};

console.log("Testing food API endpoint...");
console.log("Test data:", testFoodData);

// You can use this data to test your frontend form
// Make sure all these fields are being sent from your frontend:
// - name (string, required)
// - description (string, required)  
// - price (number/string, required)
// - category (string, required)
// - image (file, required)

console.log("\n✅ Required fields for /api/food/add:");
console.log("- name:", testFoodData.name);
console.log("- description:", testFoodData.description);
console.log("- price:", testFoodData.price);
console.log("- category:", testFoodData.category);
console.log("- image: (multipart file upload)");

console.log("\n🔍 Make sure your frontend is sending:");
console.log("1. Content-Type: multipart/form-data");
console.log("2. All required fields as form data");
console.log("3. Image file with field name 'image'");
