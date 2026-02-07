import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, MapPin, Bed, Bath, Wifi, Car, Shield, Coffee, Eye, Play } from "lucide-react"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Virtual Tour - See 60 on Kosmos Bellville South Before You Book",
  description:
    "Take a virtual tour of 60 on Kosmos guesthouse in Bellville South. View our ensuite rooms, parking, outdoor areas, and facilities. See why guests love staying with us.",
  keywords: "virtual tour Bellville South, 60 on Kosmos photos, guesthouse tour, accommodation near UWC photos",
  alternates: { canonical: "https://60onkosmos.co.za/virtual-tour" },
}

export default function VirtualTourPage() {
  const tourSections = [
    {
      title: "Welcome Video Tour",
      description: "Watch a guided tour of our guesthouse facilities and rooms",
      features: ["Full Property Tour", "Room Walkthroughs", "Amenities Showcase", "Neighbourhood Overview"],
      videos: [
        {
          type: "youtube",
          embedId: "YOUR_YOUTUBE_VIDEO_ID", // Replace with your actual YouTube video ID
          thumbnail: "/images/exterior-building.png",
          caption: "Complete property walkthrough",
        },
      ],
      images: [],
    },
    {
      title: "Standard Twin Room",
      description: "Comfortable twin beds with ensuite bathroom. Perfect for contractors and budget travelers.",
      features: ["2 Single Beds", "Ensuite Bathroom", "Bar Fridge", "Free WiFi", "Work Desk"],
      images: [
        {
          src: "/images/twin-room-yellow.png",
          alt: "Standard twin room at 60 on Kosmos Bellville South with two single beds and yellow accents",
          caption: "Twin room with comfortable beds and modern decor",
        },
        {
          src: "/images/twin-room-yellow-2.png",
          alt: "Standard twin room bathroom at 60 on Kosmos with ensuite shower",
          caption: "Private ensuite bathroom with hot water",
        },
      ],
    },
    {
      title: "Double Room",
      description: "Spacious double room with sage green decor. Ideal for couples and solo travelers.",
      features: ["Double Bed", "Ensuite Bathroom", "Bar Fridge", "Free WiFi", "Wardrobe"],
      images: [
        {
          src: "/images/sage-double-room.png",
          alt: "Double room at 60 on Kosmos Bellville South with sage green decor and double bed",
          caption: "Double room with modern sage green styling",
        },
        {
          src: "/images/double-room.png",
          alt: "Double room ensuite bathroom at 60 on Kosmos guesthouse",
          caption: "Clean, modern ensuite bathroom",
        },
      ],
    },
    {
      title: "Deluxe Twin Room",
      description: "Premium twin room with navy blue headboards and upgraded furnishings.",
      features: ["2 Single Beds", "Premium Bedding", "Ensuite Bathroom", "Modern Decor", "Free WiFi"],
      images: [
        {
          src: "/images/deluxe-twin-navy.jpg",
          alt: "Deluxe twin room at 60 on Kosmos with navy blue headboards and premium bedding",
          caption: "Deluxe twin with navy blue accents",
        },
        {
          src: "/images/twin-room-black.png",
          alt: "Deluxe twin room alternative view showing workspace and amenities",
          caption: "Spacious layout with work area",
        },
      ],
    },
    {
      title: "Triple Family Room",
      description: "Perfect for families or groups. Three single beds with kettle and workspace.",
      features: ["3 Single Beds", "Ensuite Bathroom", "Kettle & Cups", "Work Desk", "Free WiFi"],
      images: [
        {
          src: "/images/triple-room-full.jpg",
          alt: "Triple room at 60 on Kosmos Bellville South with three single beds for families",
          caption: "Triple room perfect for families",
        },
        {
          src: "/images/triple-room-desk.jpg",
          alt: "Triple room workspace with kettle and amenities",
          caption: "Work desk and tea/coffee station",
        },
        {
          src: "/images/triple-room-bathroom.jpg",
          alt: "Triple room ensuite bathroom with shower and modern fixtures",
          caption: "Modern ensuite bathroom",
        },
      ],
    },
    {
      title: "Outdoor & Common Areas",
      description: "Relax in our covered outdoor seating area and secure courtyard parking.",
      features: ["Outdoor Seating", "BBQ Area", "Secure Parking", "24/7 CCTV", "Gardens"],
      images: [
        {
          src: "/images/outdoor-seating.png",
          alt: "Covered outdoor seating area at 60 on Kosmos Bellville South for guest relaxation",
          caption: "Covered outdoor dining and seating area",
        },
        {
          src: "/images/outdoor-area.png",
          alt: "Additional outdoor space at 60 on Kosmos guesthouse with seating",
          caption: "Outdoor relaxation space",
        },
        {
          src: "/images/exterior-courtyard.png",
          alt: "Secure parking courtyard at 60 on Kosmos with CCTV monitoring",
          caption: "Secure parking behind locked gates",
        },
      ],
    },
    {
      title: "Property Exterior & Entrance",
      description: "Modern guesthouse building in safe Bellville South neighborhood.",
      features: ["Main Entrance", "Secure Perimeter", "Well-lit Exterior", "Easy Access", "CCTV Cameras"],
      images: [
        {
          src: "/images/exterior-building.png",
          alt: "60 on Kosmos guesthouse exterior building in Bellville South Cape Town",
          caption: "60 on Kosmos guesthouse exterior",
        },
        {
          src: "/images/main-entrance.png",
          alt: "Main entrance to 60 on Kosmos with secure access",
          caption: "Secure main entrance with intercom",
        },
      ],
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "" },
    { name: "Virtual Tour", url: "/virtual-tour" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-600 to-sage-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Camera className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Virtual Tour of 60 on Kosmos</h1>
            <p className="text-xl mb-6 opacity-90">
              Explore our Bellville South guesthouse from the comfort of your home
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Watch our video tour and browse photos of our comfortable rooms, secure facilities, and outdoor spaces.
              Book with confidence knowing exactly what to expect when you arrive.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Eye className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">See Before You Book</h2>
            <p className="text-gray-600 mb-6">
              We believe in transparency. Our virtual tour shows you exactly what our rooms and facilities look like. No
              surprises, just honest photos and videos of our clean, comfortable accommodation in Bellville South.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Bed className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                <p className="font-semibold">4 Room Types</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Bath className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                <p className="font-semibold">Ensuite Bathrooms</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Car className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                <p className="font-semibold">Secure Parking</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Shield className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                <p className="font-semibold">24/7 Security</p>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {tourSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{section.description}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {section.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video Section */}
                  {section.videos && section.videos.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                      {section.videos.map((video, videoIndex) => (
                        <Card key={videoIndex} className="overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="relative aspect-video bg-gray-900">
                            {video.type === "youtube" ? (
                              <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${video.embedId}`}
                                title={video.caption}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <div className="text-center text-white">
                                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                  <p className="text-lg">Video coming soon</p>
                                </div>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-600 text-center">{video.caption}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Images Section */}
                  {section.images && section.images.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.images.map((image, imageIndex) => (
                        <Card key={imageIndex} className="overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="relative h-64">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Included in Every Room</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <Bath className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Ensuite Bathroom</h3>
                <p className="text-sm text-gray-600">Private bathroom with hot shower, toilet, and basin</p>
              </Card>
              <Card className="text-center p-6">
                <Wifi className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Free High-Speed WiFi</h3>
                <p className="text-sm text-gray-600">Fast internet for work, streaming, and browsing</p>
              </Card>
              <Card className="text-center p-6">
                <Car className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Secure Parking</h3>
                <p className="text-sm text-gray-600">Free parking behind locked gates with CCTV</p>
              </Card>
              <Card className="text-center p-6">
                <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Welcome Kit</h3>
                <p className="text-sm text-gray-600">Tea, coffee, rusks, milk, and sugar provided</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <MapPin className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Location in Bellville South</h2>
              <p className="text-lg text-gray-600">60 Kosmos Street, Bellville South, Cape Town, 7530</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-sage-600 mb-2">5km</p>
                  <p className="text-gray-700 font-medium">to UWC Campus</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sage-600 mb-2">8km</p>
                  <p className="text-gray-700 font-medium">to Tygerberg Hospital</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sage-600 mb-2">2km</p>
                  <p className="text-gray-700 font-medium">to SPAR Centre</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sage-600 mb-2">3km</p>
                  <p className="text-gray-700 font-medium">to N1 Highway</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sage-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg mb-8 opacity-90">
              Now that you've seen our rooms and facilities, book with confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <a href="/book-now">Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-sage-700 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <a
                  href="https://wa.me/27745245703?text=Hi, I just saw the virtual tour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 074 524 5703
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
