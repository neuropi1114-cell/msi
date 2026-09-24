import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      organisationName,
      contactPerson,
      designation,
      email,
      phone,
      cityLocations,
      employeeStrength,
      childrenCount,
      ageGroups,
      shiftTimings,
      hasSpace,
      lookingFor,
      preferredDate,
      preferredTime,
      additionalNotes,
      actionType = 'proposal',
    } = body;

    const errors = {};
    if (!organisationName?.trim()) errors.organisationName = 'Organisation name is required';
    if (!contactPerson?.trim()) errors.contactPerson = 'Contact person name is required';
    if (!email?.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email format';
    if (!phone?.trim()) errors.phone = 'Phone number is required';

    if (actionType === 'meeting') {
      if (!preferredDate) errors.preferredDate = 'Preferred date is required';
      if (!preferredTime) errors.preferredTime = 'Preferred time is required';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const payload = {
      organisationName: organisationName.trim(),
      contactPerson: contactPerson.trim(),
      designation: designation?.trim() || '',
      email: email.trim(),
      phone: phone.trim(),
      cityLocations: cityLocations?.trim() || '',
      employeeStrength: employeeStrength?.trim() || '',
      childrenCount: childrenCount?.trim() || '',
      ageGroups: ageGroups?.trim() || '',
      shiftTimings: shiftTimings || '',
      hasSpace: hasSpace || '',
      lookingFor: Array.isArray(lookingFor) ? lookingFor : [],
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      additionalNotes: additionalNotes?.trim() || '',
      actionType,
      submittedAt: new Date().toISOString(),
    };

    console.log('Received Corporate Childcare inquiry:', payload);

    return NextResponse.json({
      success: true,
      message:
        actionType === 'meeting'
          ? 'Thank you! We will reach out to schedule a meeting with your team.'
          : 'Thank you! Your corporate childcare proposal request has been received.',
    });
  } catch (error) {
    console.error('Corporate API error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
