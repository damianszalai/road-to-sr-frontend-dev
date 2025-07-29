// 03-product-variants/src/types/product.ts

export interface ProductType {
  name: string;
  id: string;
  description: string;
  price: number;
  stock: number;
  created_at: string;
}

export interface VariantsType {
  id: string;
  product_id: string;
  name: string;
  stock: number;
  created_at: string;
}

export interface ProductWithVariantType extends ProductType {
  variants: VariantsType[];
}
