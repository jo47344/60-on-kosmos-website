import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      phone,
      guestCount,
      companyName,
      checkinDate,
      checkoutDate,
      notes,
      // Company enquiry form fields (from the contractor accommodation page)
      contactPerson,
      email,
      workLocation,
      requestType,
    } = body

    const isCompanyEnquiry = requestType === "company-enquiry"

    // Format the email content
    const emailContent = isCompanyEnquiry
      ? `
New Company Accommodation Enquiry - 60 on Kosmos Guesthouse

Company Details:
- Company: ${companyName || "Not provided"}
- Contact person: ${contactPerson || name}
- Phone / WhatsApp: ${phone}
- Email: ${email || "Not provided"}

Stay Details:
- Number of guests: ${guestCount}
- Arrival date: ${checkinDate}
- Departure date: ${checkoutDate}
- Work/project location: ${workLocation || "Not provided"}
- Special requirements: ${notes || "None"}

Please contact this company to confirm room availability and provide a company rate.

Sent from: 60onkosmos.co.za contractor accommodation company enquiry form
      `.trim()
      : `
New Booking Request - 60 on Kosmos Guesthouse

Guest Details:
- Name: ${name}
- Phone: ${phone}
- Check-in: ${checkinDate}
- Check-out: ${checkoutDate}
- Guests/team members: ${guestCount}
- Company: ${companyName || "Not provided"}
- Special Requests: ${notes || "None"}

Please contact the guest to confirm availability and finalize the booking.

Sent from: 60onkosmos.co.za booking form
    `.trim()

    // In a real implementation, you would use a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - Vercel's email service

    // For now, we'll simulate the email sending
    console.log(isCompanyEnquiry ? "Company enquiry received:" : "Booking request received:", {
      name,
      phone,
      email,
      checkinDate,
      checkoutDate,
      guestCount,
      companyName,
      contactPerson,
      workLocation,
      notes,
    })

    // You would replace this with actual email sending logic:
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'bookings@60onkosmos.co.za',
        to: 'info@60onkosmos.co.za',
        subject: `New Booking Request - ${name}`,
        text: emailContent,
      }),
    })
    */

    return NextResponse.json({ success: true, message: "Booking request sent successfully" })
  } catch (error) {
    console.error("Error processing booking request:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking request" }, { status: 500 })
  }
}
