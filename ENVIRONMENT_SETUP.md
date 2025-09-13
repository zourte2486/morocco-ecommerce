# Environment Setup Instructions

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

### Supabase Configuration

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Cloudinary Configuration (Optional - will fallback to Supabase Storage)

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## How to Get These Values

### Supabase

1. Go to [supabase.com](https://supabase.com)
2. Create a new project or select existing one
3. Go to Settings > API
4. Copy the Project URL and anon/public key
5. Copy the service_role key (keep this secret!)

### Cloudinary (Optional)

1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Go to Dashboard
4. Copy your Cloud Name, API Key, and API Secret

## Fallback System

The application now has a fallback system:

1. **First**: Tries to upload images to Cloudinary
2. **If Cloudinary fails**: Automatically falls back to Supabase Storage
3. **If both fail**: Shows a clear error message

This means your app will work even if Cloudinary is not configured!

## Testing

After setting up your environment variables:

1. Restart your development server: `npm run dev`
2. Try creating a product with images
3. Check the console logs to see which storage system is being used
