export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  brand: string;
  category: string;
  subCategory: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
}
