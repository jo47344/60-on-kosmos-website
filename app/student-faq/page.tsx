import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Visitor FAQ | Graduations, Block Week & Short-Stay Near UWC & CPUT",
  description:
    "FAQ for parents, visiting professors and short-term visitors near UWC and CPUT. Block week, graduation accommodation, and campus visitor info. No long-term student housing.",
  alternates: {
    canonical: "https://60onkosmos.co.za/student-faq",
  },
}

export default function StudentFAQPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-sage-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/faq" className="hover:text-sage-600">
              FAQ
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Student FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Short-Stay Visitor FAQ</h1>
          <p className="text-xl text-gray-600">
            Info for parents, visiting professors, and short-term visitors near UWC & CPUT
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Questions */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Booking & Availability</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Can I book for just one week during exam period?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! We offer flexible booking periods. You can book for as little as 1 night or for several
                  weeks/months. Exam week bookings are popular, so we recommend booking in advance. WhatsApp us to check
                  availability for your specific dates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">How far in advance should I book?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We recommend booking at least 1-2 weeks in advance, especially for busy periods like exam weeks,
                  orientation weekends, and graduation ceremonies. For monthly stays, booking 2-4 weeks ahead is ideal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">What's the check-in/check-out time?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Standard check-in is from 14:00 and check-out is by 10:00. However, we understand students have
                  different schedules. Contact us via WhatsApp to arrange flexible check-in/out times if needed - we'll
                  do our best to accommodate you!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Do you offer student discounts?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer discounted rates for monthly bookings, which work out much cheaper than nightly rates. For
                  semester-long stays, WhatsApp us for a custom quote. We also occasionally have special offers - follow
                  us or check our special offers page!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Can I extend my stay if needed?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, if we have availability. Let us know as soon as you realize you need to extend, and we'll do our
                  best to accommodate you. This is especially common during exam periods when students need extra study
                  time!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Room Amenities */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏠 Rooms & Amenities</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Is there WiFi for online assignments?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! All rooms include free high-speed WiFi perfect for streaming lectures, doing research, submitting
                  assignments, and video calls home. The connection is reliable and fast enough for engineering students
                  uploading large project files.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">Can I cook my own meals?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We have a communal kitchenette where you can prepare meals. Each room also has a bar fridge to store
                  your food and drinks. This is perfect for students on a budget who want to save money by cooking
                  instead of eating out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">Do rooms have their own bathroom?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! All our rooms have private ensuite bathrooms. No sharing with other students - you have complete
                  privacy. Each bathroom includes a shower, toilet, and basin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">Is there a workspace for studying?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Our Double and Triple rooms include desk space perfect for studying and working on assignments.
                  The Triple rooms have extra desk space great for group project work. All rooms are quiet and conducive
                  to studying.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">Do you provide bedding and towels?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Fresh linen and towels are provided, and they're changed weekly with our professional cleaning
                  service. You don't need to bring bedding or towels from home - we've got you covered.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Transport & Location */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🚗 Transport & Location</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">How do I get to CPUT/UWC campus?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We're just 4.5km from CPUT and 5.5km from UWC - about 8-10 minutes by car. Options include:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Uber/Bolt: R30-R50 per trip</li>
                    <li>Own vehicle: Free secure parking available</li>
                    <li>Golden Arrow buses from nearby Bellville Station</li>
                    <li>Shared taxis along main routes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">Is there parking if I have my own car?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! We have secure, enclosed parking with 24/7 CCTV monitoring. Perfect for students who drive from
                  other provinces or have their own vehicles. Parking is included at no extra cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">Are there shops and restaurants nearby?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Bellville CBD is just a few kilometers away with shopping malls (Tyger Valley, Bellville
                  Velodrome), supermarkets (Pick n Pay, Checkers, Woolworths), restaurants, fast food, and banks. You
                  can Uber there in under 10 minutes or take a short bus ride.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Safety & Security */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Safety & Security</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left">Is it safe for students?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! We take security very seriously. We have:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>24/7 CCTV surveillance throughout the property</li>
                    <li>Secure entrance with access control</li>
                    <li>Enclosed parking area</li>
                    <li>Well-lit premises</li>
                    <li>Safe, quiet residential neighborhood</li>
                  </ul>
                  Parents can have peace of mind knowing their students are in a secure environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left">Can parents visit my room?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, visitors are allowed during reasonable hours (daytime). We understand parents may want to check
                  in on their students. For overnight guests, please let us know in advance. We want to balance your
                  privacy with the comfort of all our guests.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Payment & Costs */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💳 Payment & Costs</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-16">
                <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We accept bank transfers (EFT), instant EFT, and cash. For monthly bookings, we can arrange payment
                  plans. Contact us via WhatsApp to discuss payment options that work for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17">
                <AccordionTrigger className="text-left">Do I need to pay a deposit?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we require a deposit to secure your booking. The deposit amount varies depending on length of
                  stay. The deposit is fully refundable if you leave the room in good condition at check-out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-18">
                <AccordionTrigger className="text-left">Are utilities included in the price?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! WiFi, water, and electricity are all included in your room rate. There are no hidden costs or
                  extra bills. The price we quote is what you pay.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-19">
                <AccordionTrigger className="text-left">How much does monthly accommodation cost?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Monthly rates vary by room type but are significantly discounted compared to nightly rates. For
                  example:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Twin Room: From R12,000/month</li>
                    <li>Double Room: From R15,000/month</li>
                    <li>Triple Room: From R18,000/month</li>
                  </ul>
                  Contact us for the most current monthly rates and semester-long discounts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Special Situations */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Other Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-20">
                <AccordionTrigger className="text-left">
                  Can international students book accommodation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We welcome international students from all countries. Many international UWC and CPUT students stay
                  with us during semester breaks when campus residences are closed. We can provide any documentation you
                  need for visa purposes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-21">
                <AccordionTrigger className="text-left">Can I share a room with a friend?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Our Twin and Triple rooms are perfect for sharing with friends or classmates. Sharing helps split
                  costs and makes studying together easier. Just let us know when booking that you're coming as a group.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-22">
                <AccordionTrigger className="text-left">What if I have a medical emergency?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We're close to Tygerberg Hospital (7.5km) and there are several medical facilities in Bellville. In
                  case of emergency, dial 10177 for an ambulance or 112 from your cell phone. We can also assist in
                  contacting emergency services if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-23">
                <AccordionTrigger className="text-left">
                  Is the accommodation quiet enough for studying?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! We're in a quiet residential area away from nightlife and busy streets. We maintain a peaceful
                  environment especially during exam periods. If you need to study late or have early morning classes,
                  you'll find it's an ideal study environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-24">
                <AccordionTrigger className="text-left">
                  Can my parents book a room when they visit me?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Definitely! Many parents book rooms when visiting their students for orientation, graduation, or just
                  to check in. It's convenient because you're close to campus and can easily meet up with your student.
                  We offer parent-friendly rooms with comfortable double beds.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              WhatsApp us anytime! We're here to help students and parents with any questions about accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <a
                  href="https://wa.me/27745245703?text=Hi%2C%20I%20have%20questions%20about%20student%20accommodation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/rooms">View Rooms & Rates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
