import { NextResponse } from "next/server";
import { getCaseStudyPage, CASE_STUDY_PAGE_SIZE } from "@/lib/case-studies";

export const runtime = "nodejs";

// GET /api/case-studies?category=<slug|all>&after=<cursor>
// Returns one page: { items, endCursor, hasNextPage } — used by the gallery's
// category tabs and "Load More" button.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";
  const after = searchParams.get("after") || null;

  const page = await getCaseStudyPage({ category, after, first: CASE_STUDY_PAGE_SIZE });
  return NextResponse.json(page);
}
