import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { getAllProducts } from "@/lib/products/product-select";
import ProductCard from "./product-card";

export default async function ProductExplorer() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <TrendingUpIcon className="size-4" /> Trending
          </Button>
          <Button>
            <ClockIcon className="size-4" /> Recent
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {products.length} products
        </p>
      </div>{" "}
      <div className="grid-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
