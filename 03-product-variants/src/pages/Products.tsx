// 03-product-variants/src/pages/Products.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useProductsWithVariants } from '@/hooks/useProductsWithVariants';

function Products() {
  const { data, isPending } = useProductsWithVariants();

  return (
    <main className="min-h-screen px-6 py-10 max-w-7xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          🛍️ Our Products
        </h1>
        <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Discover our curated collection of quality items, each with available
          variants and real-time stock updates.
        </p>
      </header>

      {isPending ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Card key={idx} className="p-4 space-y-4">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </Card>
          ))}
        </section>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(data ?? []).map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">
                    ${product.price}
                  </span>
                  <span>{product.stock} in stock</span>
                </div>
              </CardContent>
              {product.variants.length > 0 && (
                <CardFooter>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Variants:
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => (
                        <Badge key={variant.id} variant="outline">
                          {variant.name} x {variant.stock}
                        </Badge>
                      ))}
                    </ul>
                  </div>
                </CardFooter>
              )}
            </Card>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Products;
