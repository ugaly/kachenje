import { notFound } from "next/navigation"
import { practiceAreasData } from "@/lib/practice-areas-data"
import { PracticeAreaContent } from "@/components/practice-area-content"

export function generateStaticParams() {
  return practiceAreasData.map((area) => ({
    slug: area.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = practiceAreasData.find((a) => a.slug === slug)
  
  if (!area) {
    return {
      title: "Practice Area Not Found | Kachenje Advocate",
    }
  }

  return {
    title: `${area.title} | Kachenje Advocate`,
    description: area.shortDescription,
  }
}

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = practiceAreasData.find((a) => a.slug === slug)

  if (!area) {
    notFound()
  }

  return <PracticeAreaContent area={area} allAreas={practiceAreasData} />
}
