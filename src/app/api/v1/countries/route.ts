import { countryData } from "@/data/country-list"
import { NextResponse } from "next/server"

// Define CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Allow all origins
  "Access-Control-Allow-Methods": "GET, OPTIONS", // Allow GET and OPTIONS methods
  "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow these headers
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const acronym = searchParams.get("acronym")

  if (acronym) {
    const country = countryData.find((c) => c.value === acronym.toUpperCase())
    if (country) {
      return NextResponse.json(country, { headers: corsHeaders })
    } else {
      return NextResponse.json({ error: "Country not found" }, { status: 404, headers: corsHeaders })
    }
  }

  return NextResponse.json(countryData, { headers: corsHeaders })
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

