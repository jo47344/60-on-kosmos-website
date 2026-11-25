import { NextRequest, NextResponse } from "next/server"

// Same room allocation and rate source used by the customer calculator.
const { estimate } = require("@/public/stay-estimate/model.js")
const { buildPdf } = require("@/public/stay-estimate/estimate-pdf.js")
const rand = (n: number) => `R${n.toFixed(2)}`

export async function GET(request: NextRequest) {
  const p = request.nextUrl.searchParams
  const arrival = p.get("arrival") || "", departure = p.get("departure") || ""
  const validDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && new Date(s + "T00:00:00Z").toISOString().slice(0, 10) === s
  try {
    if (!validDate(arrival) || !validDate(departure)) throw new Error("Invalid dates")
    const nights = (Date.parse(departure + "T00:00:00Z") - Date.parse(arrival + "T00:00:00Z")) / 86400000
    const mode = p.get("mode") || "separate"
    if (!["separate", "private", "couple", "supervisor"].includes(mode)) throw new Error("Invalid arrangement")
    const result = estimate({ adults: Number(p.get("adults")), nights, mode,
      doubleShare: p.get("doubleShare") === "true", allRooms: p.get("allRooms") === "true" })
    if (result.error) throw new Error(result.error)
    const x = result.best
    const enquiry = p.get("enquiry") || "Contractor team"
    if (!["Contractor team", "Company / business stay", "Adult group"].includes(enquiry)) throw new Error("Invalid enquiry type")
    const lines = ["60 ON KOSMOS - ACCOMMODATION ESTIMATE", "Not an invoice or confirmed booking",
      "60 Kosmos Street, Bellville South, Cape Town", `Enquiry: ${enquiry}`,
      `${arrival} to ${departure} | ${nights} nights | ${x.adults} adults`,
      `${x.rows.length} guest rooms${x.allRooms ? ' - all four reserved for your group' : ''}`, "",
      ...x.rows.flatMap((r: any) => [`${r.name}${r.supervisor ? ' - supervisor privately' : ''}: ${r.guests} adults; ${r.beds}`,
        `${rand(r.rate)} per room/night${r.pp === null ? '; reserved unused' : '; ' + rand(r.pp) + ' per person/night'}`]),
      ...(x.groupDiscount ? [`All-room discount: ${rand(x.groupDiscount)} per night`] : []), "",
      `ACCOMMODATION TOTAL: ${rand(x.total)}`, `Per night, all rooms: ${rand(x.nightly)}`,
      `Average per adult/night: ${rand(x.pp)}`, "Any applicable refundable security deposit is additional; confirmed in writing.", "",
      "Includes en-suite bathrooms, furnished rooms, beds, bedding and fridges.",
      "Wi-Fi, water/electricity for normal use, shared kitchenette access,",
      "weekly cleaning and linen refresh included. No meals or daily housekeeping.",
      "Gated parking subject to space. Confirm vehicles and trailers before booking.",
      "Caretaker lives onsite and assists with arrival and property upkeep.",
      "Shared facilities and house rules apply. Adults only.", "",
      "Subject to room availability and a written quote. No rooms are reserved.",
      "Payment and cancellation terms are confirmed with your written quote.",
      "Extensions and changes require availability and written confirmation.",
      "WhatsApp 074 524 5703 | info@60onkosmos.co.za"]
    const pdf = buildPdf(lines)
    return new NextResponse(new Uint8Array(pdf), { headers: {
      "Content-Type": "application/pdf", "Cache-Control": "no-store",
      "Content-Disposition": `${p.get("download") === "1" ? "attachment" : "inline"}; filename="60-on-Kosmos-Estimate-${arrival}.pdf"`,
      "X-Robots-Tag": "noindex, nofollow",
    } })
  } catch {
    return NextResponse.json({ error: "Enter valid dates, 1–9 adults and a supported room arrangement." }, { status: 400 })
  }
}
