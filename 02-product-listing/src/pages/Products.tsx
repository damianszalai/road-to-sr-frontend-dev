// 02-product-listing/src/pages/Products.tsx
import { useProducts } from '@/hooks/useProducts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function Products() {
  const { data, isPending } = useProducts();

  return (
    <main className="min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          🛍️ Product Listing
        </h1>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          Browse our amazing selection of high-quality products.
        </p>
      </header>

      {isPending ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Card key={idx} className="p-4 space-y-4">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </Card>
          ))}
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(data ?? []).map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {product.name}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-end text-sm text-muted-foreground">
                <p className="font-medium text-primary">${product.price}</p>
                <p>{product.stock} in stock</p>
              </CardContent>
            </Card>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Products;
