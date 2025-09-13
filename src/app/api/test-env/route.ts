import { NextResponse } from 'next/server';

export async function GET() {
  const envCheck = {
    supabase: {
      url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      serviceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    cloudinary: {
      cloudName: !!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      apiKey: !!process.env.CLOUDINARY_API_KEY,
      apiSecret: !!process.env.CLOUDINARY_API_SECRET,
    }
  };

  return NextResponse.json({
    message: 'Environment variables check',
    config: envCheck,
    cloudinaryConfigured: envCheck.cloudinary.cloudName && envCheck.cloudinary.apiKey && envCheck.cloudinary.apiSecret,
    supabaseConfigured: envCheck.supabase.url && envCheck.supabase.anonKey && envCheck.supabase.serviceKey
  });
}
