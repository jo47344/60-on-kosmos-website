import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.url || "home"} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />}
              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url || "/"} className="hover:text-sage-600 transition-colors flex items-center gap-1">
                  {index === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
