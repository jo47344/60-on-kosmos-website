import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission - 60 on Kosmos Guesthouse

Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Message:
${message}

---
Sent from: 60onkosmos.co.za contact form
    `.trim()

    // Log the contact request (in production, you would send an email)
    console.log("Contact form submission received:", {
      name,
      email,
      phone,
      message,
    })

    // In a real implementation, you would use a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // 
    // Example with Resend:
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'contact@60onkosmos.co.za',
    //     to: 'info@60onkosmos.co.za',
    //     subject: `New Contact: ${name}`,
    //     text: emailContent,
    //     reply_to: email,
    //   }),
    // })

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully" 
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process contact form" },
      { status: 500 }
    )
  }
}
