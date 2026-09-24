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
    if (!agreePolicy) errors.agreePolicy = 'You must agree to the Privacy Policy';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const crmPayload = {
      parentGuardianName: parentName.trim(),
      emailId: email.trim(),
      countryCode: phoneCode || '+91',
      mobileNumber: mobile.trim(),
      programName: program || '',
      countryName: country || '',
      messageInquiry: message?.trim() || '',
      privacyPolicyAgreed: Boolean(agreePolicy),
      tenantId: 1,
      createdBy: 1,
    };

    console.log('Forwarding enrolment submission to CRM API:', crmPayload);

    const crmResponse = await fetch('https://neuropi-crm-api.azurewebsites.net/api/SchoolEnrollment', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crmPayload),
    });

    if (!crmResponse.ok) {
      const crmErrorText = await crmResponse.text();
      console.error('CRM API error response:', crmResponse.status, crmErrorText);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enrolment inquiry has been received. We will contact you soon.'
    });
  } catch (error) {
    console.error('Enrol API error details:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
