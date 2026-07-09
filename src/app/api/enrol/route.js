import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { parentName, email, mobile, program, country, phoneCode, message, agreePolicy } = body;

    const errors = {};
    if (!parentName?.trim()) errors.parentName = 'Parent name is required';
    if (!email?.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email format';
    if (!mobile?.trim()) errors.mobile = 'Mobile number is required';
    if (!program) errors.program = 'Please select a program';
    if (!country) errors.country = 'Please select a country';
    if (!agreePolicy) errors.agreePolicy = 'You must agree to the Privacy Policy';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    console.log('Enrolment submission:', { parentName, email, mobile, phoneCode, program, country, message });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enrolment inquiry has been received. We will contact you soon.'
    });
  } catch (error) {
    console.error('Enrol API error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
