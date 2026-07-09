import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'country', 'message'];
    const missing = required.filter((f) => !body[f]?.trim());
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    console.log('[Franchise Inquiry]', JSON.stringify(body, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest! Our team will contact you shortly.',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
