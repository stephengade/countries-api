import { countryData } from "@/data/country-list"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const acronym = searchParams.get("acronym")

  if (acronym) {
    const country = countryData.find((c) => c.value === acronym.toUpperCase())
    if (country) {
      return NextResponse.json(country)
    } else {
      return NextResponse.json({ error: "Country not found" }, { status: 404 })
    }
  }

  return NextResponse.json(countryData)
}
