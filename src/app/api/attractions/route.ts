// app/api/attractions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import getRecommendations from "@/database/controllers/getRecommendations";

export async function GET(req: NextRequest) {
    const data = await getRecommendations(10);
    // Return a JSON response
    return NextResponse.json(data);
}
