import { eq, desc } from "drizzle-orm";

import { db } from "@/db";
import { products } from "@/db/schema";

export async function getFeaturedProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productsData;
}
