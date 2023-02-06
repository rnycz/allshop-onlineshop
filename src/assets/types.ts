export type Product = {
  [x: string]: any;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  quantity: number;
};
export type Category = {
  [x: string]: any;
};
export type FetchProps = {
  data: Product | Category | null;
  loading: boolean;
  error: string;
};
export type FetchToProducts = {
  productsData?: Product | null | Category;
  productsLoading?: boolean;
  productsError?: string;
  categoriesData?: Category | null;
  categoriesLoading?: boolean;
  categoriesError?: string;
};
