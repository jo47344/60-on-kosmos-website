import Link from "next/link"
import { EstimateLink } from "@/components/estimate-link"
import { FAQSchema } from "@/components/faq-schema"
import { RateTable } from "@/components/rate-table"

export function TeamAnswerPage({ title, answer, sections, faqs, rates = false }: {
  title: string; answer: string; sections: {heading: string; text: string}[];
  faqs: {question: string; answer: string}[]; rates?: boolean
}) {
  return <article className="max-w-5xl mx-auto px-5 py-12 text-gray-900">
    <FAQSchema faqs={faqs} />
    <p className="text-sm mb-5"><Link href="/contractor-accommodation" className="underline">Contractor accommodation</Link> · Bellville South, Cape Town</p>
    <h1 className="text-3xl sm:text-4xl font-bold mb-5">{title}</h1>
    <p className="text-lg leading-relaxed">{answer}</p>
    <EstimateLink />
    {rates && <RateTable />}
    {sections.map(section => <section key={section.heading} className="my-8"><h2 className="text-2xl font-semibold mb-3">{section.heading}</h2><p className="leading-relaxed">{section.text}</p></section>)}
    <section className="my-8"><h2 className="text-2xl font-semibold mb-4">Questions before you book</h2>{faqs.map(faq => <div key={faq.question} className="border-b py-4"><h3 className="font-semibold mb-2">{faq.question}</h3><p>{faq.answer}</p></div>)}</section>
    <p className="my-8">Explore <Link className="underline" href="/rooms">the rooms</Link>, <Link className="underline" href="/group-accommodation">all four guest rooms for a group</Link>, and <Link className="underline" href="/terms">booking terms</Link>. The calculator estimates accommodation; room and vehicle availability require written confirmation.</p>
  </article>
}
