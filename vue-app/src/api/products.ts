import type { Product } from '@/stores/products'

const mockedProducts: Product[] = [
  {
    title: 'Everyday Cotton T-Shirt',
    price: 18.99,
    rating: 4.5,
    sales: 1240,
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Canvas Weekend Tote',
    price: 34.5,
    rating: 4.8,
    sales: 980,
    imageUrl:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ceramic Pour-Over Set',
    price: 42,
    rating: 4.7,
    sales: 765,
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Minimal Desk Lamp',
    price: 56,
    rating: 4.3,
    sales: 612,
    imageUrl:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Linen Cushion Cover',
    price: 22.99,
    rating: 4.4,
    sales: 430,
    imageUrl:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Stainless Steel Bottle',
    price: 27.5,
    rating: 4.6,
    sales: 389,
    imageUrl:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
  },
]

const delay = (duration = 350) => new Promise((resolve) => window.setTimeout(resolve, duration))

export async function getProducts() {
  await delay()

  return mockedProducts
}
