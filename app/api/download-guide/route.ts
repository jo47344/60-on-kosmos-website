import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    // Validate inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide your name" }, { status: 400 })
    }

    // Log the download request
    console.log("Guide download request:", {
      name,
      email,
      timestamp: new Date().toISOString(),
      guide: "bellville-south-complete-guide",
    })

    // Here you would:
    // 1. Add the email to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 2. Send an email with the PDF attached or a download link
    // 3. Track the conversion in your CRM

    // For now, we'll return a mock download URL
    // In production, you would generate or retrieve the actual PDF URL
    const downloadUrl = "/guides/bellville-south-guide.pdf"

    // Example integration with email service:
    /*
    await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email: email,
        first_name: name,
        tags: ['guide_download']
      })
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: "Guide download link sent to your email",
        downloadUrl: downloadUrl,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Guide download error:", error)
    return NextResponse.json({ error: "Failed to process download. Please try again later." }, { status: 500 })
  }
}
