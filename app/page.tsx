"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedBookingForm } from "@/components/optimized-booking-form"
import {
  Phone,
  Star,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Wifi,
  Car,
  Shield,
  Coffee,
  X,
  Navigation2,
} from "lucide-react"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("home")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "rooms", "amenities", "location", "reviews", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const reviews = [
    {
      text: "Perfect location for contractors working in Cape Town. Clean rooms, secure parking, and great value for money in Bellville South.",
      author: "William M.",
      location: "Cape Town Contractor",
      rating: 5,
    },
    {
      text: "Stayed here while visiting my daughter at UWC. Only 5km away! Safe, clean, and affordable. Best guesthouse in Bellville South.",
      author: "Zanele K.",
      location: "East London",
      rating: 5,
    },
    {
      text: "Excellent accommodation near Tygerberg Hospital. Very convenient for medical staff. Will definitely book again!",
      author: "Lerato P.",
      location: "Johannesburg",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What time is check-in at 60 on Kosmos guesthouse Bellville South?",
      answer:
        "Check-in is from 2:00 PM and check-out is by 10:00 AM. We can arrange early or late check-in on request for your convenience. Call us at 074 524 5703 to arrange.",
    },
    {
      question: "Is there parking at the Bellville South guesthouse?",
      answer:
        "Yes, we provide secure on-site parking behind locked gates with 24/7 CCTV monitoring for all guests at no extra charge. Your vehicle will be safe throughout your stay.",
    },
    {
      question: "Do you allow contractors at 60 on Kosmos?",
      answer:
        "We welcome contractors and offer competitive long-term and monthly rates. Our Bellville South location is perfect for workers in the Cape Town area. Contact us for special contractor rates.",
    },
    {
      question: "How close is 60 on Kosmos to UWC?",
      answer:
        "We're just 5km (approximately 8 minutes drive) from the University of the Western Cape (UWC) campus, making us ideal for visiting students, parents, and university staff.",
    },
    {
      question: "What's included in the room rate at Bellville South guesthouse?",
      answer:
        "All rooms include free high-speed WiFi, ensuite bathroom, bar fridge, fresh linen, welcome refreshments (tea, coffee, rusks), secure parking, and 24/7 CCTV security.",
    },
    {
      question: "How far is 60 on Kosmos from Tygerberg Hospital?",
      answer:
        "We're approximately 8km from Tygerberg Hospital, about 12 minutes drive. Perfect for medical professionals, patients' families, and nursing students.",
    },
    {
      question: "Is there public transport near 60 on Kosmos Bellville South?",
      answer:
        "Yes, the taxi rank at SPAR Kasselsvlei Centre is 2km away (walkable), with regular services to Cape Town CBD, Bellville, and surrounding areas. Bellville train station is 6km away.",
    },
    {
      question: "Do you offer monthly rates for long-term stays in Bellville South?",
      answer:
        "Yes, we offer discounted monthly rates for contractors, students, and anyone needing long-term accommodation. Contact us at 074 524 5703 for monthly rate quotations.",
    },
  ]

  const rooms = [
    {
      title: "Standard Twin Room Bellville South",
      description:
        "Perfect for contractors working in Cape Town - comfortable twin beds with ensuite bathroom and essential amenities. Popular choice for workers and budget travelers.",
      features: ["Two Single Beds", "Ensuite Bathroom", "Bar Fridge", "Free WiFi", "Secure Parking"],
      image: "/images/twin-room-yellow.png",
      alt: "Standard twin room at 60 on Kosmos guesthouse Bellville South Cape Town - contractor accommodation near UWC with ensuite bathroom and bar fridge",
      price: "R530",
      period: "per night",
    },
    {
      title: "Double Room Near UWC",
      description:
        "Ideal for couples or solo travelers visiting Cape Town - spacious double bed with modern ensuite facilities in our Bellville South guesthouse. Perfect for UWC parents.",
      features: ["Double Bed", "Ensuite Bathroom", "Bar Fridge", "Free WiFi", "Modern Decor"],
      image: "/images/sage-double-room.png",
      alt: "Ensuite double room at 60 on Kosmos guesthouse Bellville South Cape Town near UWC with modern furnishings and sage green decor",
      price: "R620",
      period: "per night",
    },
    {
      title: "Deluxe Twin Bellville South",
      description:
        "Upgraded twin room with elegant navy blue headboards, premium bedding, and modern decor. Perfect for business travelers and medical professionals near Tygerberg Hospital.",
      features: ["Two Single Beds", "Navy Blue Headboards", "Ensuite Bathroom", "Premium Bedding"],
      image: "/images/deluxe-twin-navy.jpg",
      alt: "Deluxe twin room at 60 on Kosmos guesthouse Bellville South Cape Town - premium contractor accommodation with navy blue headboards and modern decor",
      price: "R580",
      period: "per night",
    },
    {
      title: "Triple Family Room Cape Town",
      description:
        "Spacious room perfect for families visiting Cape Town or UWC - three comfortable single beds with kettle, workspace, and modern ensuite bathroom in Bellville South.",
      features: ["Three Single Beds", "Ensuite Bathroom", "Kettle & Cups", "Free WiFi", "Work Desk"],
      image: "/images/triple-room-full.jpg",
      alt: "Triple room at 60 on Kosmos guesthouse Bellville South Cape Town - family accommodation near UWC with three single beds, workspace and ensuite bathroom",
      price: "R750",
      period: "per night",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const breadcrumbItems = [{ name: "Home", url: "" }]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Main Homepage Logo (above hero) */}
        <div className="py-8 bg-white">
          <Image
            src="/images/60-kosmos-elegant-logo.jpg"
            alt="60 on Kosmos Guesthouse Bellville South Cape Town - Affordable Ensuite Accommodation"
            width={280}
            height={80}
            className="mx-auto block"
            priority
          />
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-md w-full">
              <Button
                onClick={() => setShowBookingForm(false)}
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </Button>
              <OptimizedBookingForm />
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="relative bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Best Guesthouse in
                  <br />
                  <span className="text-sage-600">Bellville South</span>
                </h1>
                <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                  ★★★★★ Rated • Secure ensuite accommodation near UWC & Tygerberg Hospital
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Perfect for contractors, students, and families visiting Cape Town. 24/7 security, free WiFi, secure
                  parking. Book direct for best rates.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-sage-600" />
                    </div>
                    <span className="text-gray-700 font-medium">24/7 Security</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                      <Wifi className="w-5 h-5 text-sage-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Free WiFi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                      <Car className="w-5 h-5 text-sage-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Secure Parking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                      <Coffee className="w-5 h-5 text-sage-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Welcome Kit</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setShowBookingForm(true)}
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg"
                  >
                    Book Direct - Best Rates
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-sage-600 text-sage-600 hover:bg-sage-50 px-8 py-6 text-lg bg-transparent"
                  >
                    <a
                      href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%2060%20on%20Kosmos%20Bellville%20South%20from%20[insert%20dates]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      WhatsApp 074 524 5703
                    </a>
                  </Button>
                </div>

                <div className="flex items-center space-x-6 mt-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                    <span className="font-medium">4.8/5 Rating</span>
                  </div>
                  <span>•</span>
                  <span>From R530/night</span>
                  <span>•</span>
                  <span>5km to UWC</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/sage-double-room.png"
                    alt="Ensuite double room at 60 on Kosmos guesthouse Bellville South Cape Town - affordable accommodation near UWC"
                    fill
                    className="object-cover enhanced-image"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                  <div className="text-sm text-gray-600 font-medium">Starting from</div>
                  <div className="text-3xl font-bold text-sage-600">R530</div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-8 bg-white border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-sage-600">5km</div>
                <div className="text-sm text-gray-600">to UWC</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage-600">8km</div>
                <div className="text-sm text-gray-600">to Tygerberg Hospital</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage-600">24/7</div>
                <div className="text-sm text-gray-600">CCTV Security</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage-600">4.8★</div>
                <div className="text-sm text-gray-600">Guest Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Accommodation at 60 on Kosmos Bellville South</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Clean, comfortable ensuite rooms near UWC. All rooms include free WiFi, secure parking, and welcome
                refreshments. Perfect for contractors, students, and families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {rooms.map((room, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.alt}
                      fill
                      className="object-cover enhanced-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-xl font-bold text-sage-600">{room.price}</span>
                      <span className="text-sm text-gray-600 ml-1">/night</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{room.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>

                    <div className="space-y-2 mb-6">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-sage-600 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Button
                        onClick={() => setShowBookingForm(true)}
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                      >
                        Book This Room
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
                      >
                        <a
                          href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%2060%20on%20Kosmos%20Bellville%20South"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp to Book
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guesthouse Amenities Bellville South Cape Town</h2>
              <p className="text-lg text-gray-600">
                Everything you need for a comfortable stay near UWC and Tygerberg Hospital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 CCTV Security</h3>
                <p className="text-gray-600 text-sm">
                  CCTV monitoring and secure gate access for peace of mind at our Bellville South guesthouse
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Free High-Speed WiFi</h3>
                <p className="text-gray-600 text-sm">
                  High-speed internet throughout the property - perfect for remote workers and students
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Parking</h3>
                <p className="text-gray-600 text-sm">
                  Free on-site parking behind locked gates with CCTV - safe vehicle storage
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Welcome Kit</h3>
                <p className="text-gray-600 text-sm">Tea, coffee, and rusks provided in every room for all guests</p>
              </div>
            </div>

            {/* Property Images */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/outdoor-seating.png"
                  alt="Outdoor dining area at 60 on Kosmos guesthouse Bellville South Cape Town - guest relaxation space with covered seating near UWC"
                  fill
                  className="object-cover enhanced-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Outdoor Seating Area</h3>
                  <p className="text-sm opacity-90">Relax in our covered dining space</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/exterior-courtyard.png"
                  alt="Secure parking courtyard at 60 on Kosmos guesthouse Bellville South Cape Town with CCTV monitoring and locked gates near Tygerberg Hospital"
                  fill
                  className="object-cover enhanced-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Secure Parking</h3>
                  <p className="text-sm opacity-90">Fully enclosed courtyard with 24/7 CCTV</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Location in Bellville South Cape Town</h2>
              <p className="text-lg text-gray-600">
                60 Kosmos Street, Bellville South - Close to UWC, Tygerberg Hospital, and major Cape Town attractions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">5km to UWC</h3>
                <p className="text-gray-600 text-sm">
                  Perfect for students, parents, and staff visiting the University of the Western Cape
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">8km to Tygerberg Hospital</h3>
                <p className="text-gray-600 text-sm">
                  Convenient for medical professionals, nursing students, and patients' families
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">2km to SPAR Centre</h3>
                <p className="text-gray-600 text-sm">
                  SPAR Kasselsvlei Centre - shopping, restaurants, pharmacy, and banking services
                </p>
              </div>
            </div>

            <div className="bg-sage-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Choose Bellville South?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Navigation2 className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy Access to Cape Town CBD</h4>
                    <p className="text-sm text-gray-600">
                      20km to Cape Town CBD via N1. Regular public transport from Kasselsvlei Centre (2km) and Bellville
                      Station (6km)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Central to Key Locations</h4>
                    <p className="text-sm text-gray-600">
                      Close to UWC, Tygerberg Hospital, CPUT Bellville, and major shopping centers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Safe Residential Area</h4>
                    <p className="text-sm text-gray-600">
                      Established residential neighborhood with 24/7 on-site security and CCTV
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-sage-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Affordable Alternative</h4>
                    <p className="text-sm text-gray-600">
                      More affordable than Cape Town CBD while still offering easy access to all attractions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guest Reviews - 60 on Kosmos Bellville South</h2>
              <p className="text-lg text-gray-600">
                Real reviews from contractors, students, and families who stayed at our Bellville South guesthouse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">"{review.text}"</blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">– {review.author}</div>
                    <div className="text-gray-600">{review.location}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LatestBlogPosts />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions - Bellville South Accommodation
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about staying at 60 on Kosmos guesthouse
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-sage-600 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-sage-600 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t bg-gray-50">{faq.answer}</div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact 60 on Kosmos Guesthouse Bellville South</h2>
              <p className="text-lg text-gray-600">
                Ready to book your stay in Bellville South Cape Town? Contact us directly for best rates
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-sage-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <address className="text-gray-600 not-italic">
                        60 Kosmos Street
                        <br />
                        Bellville South
                        <br />
                        Cape Town, Western Cape
                        <br />
                        7530, South Africa
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-sage-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</h3>
                      <p className="text-lg font-semibold text-green-600">
                        <a href="tel:+27745245703" className="hover:text-green-700">
                          074 524 5703
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">Available 24/7 for bookings and enquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-sage-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@60onkosmos.co.za" className="hover:text-sage-600">
                          info@60onkosmos.co.za
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border">
                  <h3 className="font-semibold text-gray-900 mb-4">Check-in Information</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Check-in:</strong> From 2:00 PM
                    </p>
                    <p>
                      <strong>Check-out:</strong> By 10:00 AM
                    </p>
                    <p className="text-xs">Early/late arrangements available on request</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Booking</h3>
                <div className="space-y-4">
                  <Button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3"
                  >
                    Book Online Now
                  </Button>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                    <a
                      href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%2060%20on%20Kosmos%20Bellville%20South%20from%20[insert%20dates]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp 074 524 5703
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-sage-600 text-sage-600 hover:bg-sage-50 py-3 bg-transparent"
                  >
                    <a href="tel:+27745245703">📞 Call 074 524 5703</a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Book Direct with 60 on Kosmos?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Best rates guaranteed - no commission fees</li>
                    <li>✓ Direct communication with property</li>
                    <li>✓ Flexible check-in times available</li>
                    <li>✓ Special rates for contractors & monthly stays</li>
                    <li>✓ Immediate confirmation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-sage-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay in Bellville South?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book direct for the best rates on ensuite accommodation near UWC and Tygerberg Hospital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowBookingForm(true)}
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                Book Online Now
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-sage-700 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a href="tel:+27745245703" className="inline-flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
