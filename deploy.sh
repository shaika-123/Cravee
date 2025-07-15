#!/bin/bash
# Render deployment script for Cravee backend

echo "🚀 Starting Cravee Backend Deployment..."

# Navigate to backend directory
cd backend

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Check if all required environment variables are set
echo "🔍 Checking environment variables..."
if [ -z "$MONGO_URL" ]; then
  echo "❌ Error: MONGO_URL environment variable is not set"
  exit 1
fi

if [ -z "$CLOUDINARY_CLOUD_NAME" ]; then
  echo "❌ Error: CLOUDINARY_CLOUD_NAME environment variable is not set"
  exit 1
fi

if [ -z "$CLOUDINARY_API_KEY" ]; then
  echo "❌ Error: CLOUDINARY_API_KEY environment variable is not set"
  exit 1
fi

if [ -z "$CLOUDINARY_API_SECRET" ]; then
  echo "❌ Error: CLOUDINARY_API_SECRET environment variable is not set"
  exit 1
fi

if [ -z "$JWT_SECRET" ]; then
  echo "❌ Error: JWT_SECRET environment variable is not set"
  exit 1
fi

echo "✅ All environment variables are set"

# Start the server
echo "🎯 Starting server..."
npm start
