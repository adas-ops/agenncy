// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Here you would typically:
    // 1. Validate the form data
    // 2. Save to a database (like Sanity)
    // 3. Send an email notification
    
    console.log('Contact form submission:', body);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form' },
      { status: 500 }
    );
  }
}