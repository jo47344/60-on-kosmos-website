export function ReviewSchema() {
  const reviews = [
    {
      author: "William M.",
      rating: "5",
      date: "2024-12-15",
      text: "Perfect location for contractors working in Cape Town. The rooms are spotlessly clean, secure parking is a huge plus, and the WiFi works great. I've stayed here for 3 months and it's become my home away from home. The owner is very accommodating with monthly rates.",
    },
    {
      author: "Zanele K.",
      rating: "5",
      date: "2024-12-10",
      text: "Stayed here while visiting my daughter at UWC. Only 5km away which is so convenient! The guesthouse is safe, clean, and very affordable compared to other options. The host was welcoming and gave us great local tips. Highly recommend for UWC parents!",
    },
    {
      author: "Dr. Lerato P.",
      rating: "5",
      date: "2024-11-28",
      text: "As a locum doctor at Tygerberg Hospital, I needed affordable monthly accommodation. 60 on Kosmos is perfect - only 8km from the hospital, secure parking for my car, and reliable WiFi for video calls. Much better value than the hotels near the hospital.",
    },
    {
      author: "Thabo N.",
      rating: "5",
      date: "2024-11-20",
      text: "Great student accommodation near UWC! Much more comfortable than residence and not much more expensive. The triple room was perfect for me and my two roommates. Free WiFi is fast enough for online classes. Definitely recommending to other students.",
    },
    {
      author: "Sarah V.",
      rating: "5",
      date: "2024-10-25",
      text: "We stayed here for a family wedding in Cape Town. The double room was spacious and comfortable. The location made it easy to get to the wedding venue and explore Cape Town. Much more affordable than CBD hotels but still close to everything.",
    },
  ]

  const reviewsSchema = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LodgingBusiness",
      name: "60 on Kosmos",
      image: "https://60onkosmos.co.za/images/exterior-building.png",
      telephone: "+27745245703",
      address: {
        "@type": "PostalAddress",
        streetAddress: "60 Kosmos Street",
        addressLocality: "Bellville South",
        addressRegion: "Western Cape",
        postalCode: "7530",
        addressCountry: "ZA",
      },
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.text,
    datePublished: review.date,
  }))

  return (
    <>
      {reviewsSchema.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
