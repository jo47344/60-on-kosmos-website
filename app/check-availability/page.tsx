import type { Metadata } from "next"
import CheckAvailabilityClientPage from "./CheckAvailabilityClientPage"

export const metadata: Metadata = {
  title: "Check Availability | 60 on Kosmos",
  description:
    "Tell us what brings you to Cape Town, how many people and nights, and how to reach you. We'll get back to you with availability.",
  alternates: { canonical: "https://www.60onkosmos.co.za/check-availability" },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CheckAvailabilityPage() {
  return <CheckAvailabilityClientPage />
}
