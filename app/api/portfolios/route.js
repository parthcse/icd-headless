import { NextResponse } from "next/server";
import { getPortfolioPage, PORTFOLIO_PAGE_SIZE } from "@/lib/portfolio";

export const runtime = "nodejs";

// GET /api/portfolios?category=<slug|all>&after=<cursor>
// Returns one page: { items, endCursor, hasNextPage } — used by the gallery's
// category tabs and "Load More" button.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";
  const after = searchParams.get("after") || null;

  const page = await getPortfolioPage({ category, after, first: PORTFOLIO_PAGE_SIZE });
  return NextResponse.json(page);
}
