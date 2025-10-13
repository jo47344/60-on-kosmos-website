export function ReviewSchema() {
  const reviews = [
    {
      author: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      text: "Excellent accommodation! Clean rooms, friendly staff, and perfect location near UWC. Highly recommend for students and families.",
    },
    {
      author: "David Molefe",
      rating: 5,
      date: "2024-01-10",
      text: "Great place for contractors. Monthly rates are affordable and the secure parking is a huge plus. Will definitely return.",
    },
    {
      author: "Emma van der Merwe",
      rating: 5,
      date: "2024-01-05",
      text: "Stayed here during my locum at Tygerberg Hospital. Close location and comfortable rooms made my stay perfect.",
    },
    {
      author: "Michael Chen",
      rating: 4,
      date: "2023-12-20",
      text: "Good value for money. WiFi is fast, rooms are clean. Only minor improvement would be breakfast option.",
    },
    {
      author: "Thandi Ntuli",
      rating: 5,
      date: "2023-12-15",
      text: "My son attends UWC and we always stay at 60 on Kosmos when visiting. Feels like a home away from home!",
    },
  ]

  const reviewSchemas = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LodgingBusiness",
      name: "60 on Kosmos",
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
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: review.date,
    reviewBody: review.text,
  }))

  return (
    <>
      {reviewSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
