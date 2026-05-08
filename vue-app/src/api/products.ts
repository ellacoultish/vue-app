import type { Product } from '@/stores/products'
// Used AI to generate this file, and fill it with mock data to simulate an API response.
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
  {
    title: 'Walnut Phone Stand',
    price: 16,
    rating: 4.2,
    sales: 342,
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Recycled Paper Notebook',
    price: 12.5,
    rating: 4.7,
    sales: 318,
    imageUrl:
      'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Matte Black Cutlery Set',
    price: 38.99,
    rating: 4.5,
    sales: 296,
    imageUrl:
      'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Woven Storage Basket',
    price: 29,
    rating: 4.4,
    sales: 284,
    imageUrl:
      'https://images.unsplash.com/photo-1616627451515-cbc80e4ece35?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Glass Scented Candle',
    price: 19.75,
    rating: 4.8,
    sales: 270,
    imageUrl:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Soft Wool Throw Blanket',
    price: 64,
    rating: 4.6,
    sales: 251,
    imageUrl:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Travel Cable Organiser',
    price: 14.99,
    rating: 4.1,
    sales: 236,
    imageUrl:
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Stoneware Dinner Bowl',
    price: 21,
    rating: 4.5,
    sales: 214,
    imageUrl:
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Adjustable Yoga Strap',
    price: 11.99,
    rating: 4.3,
    sales: 198,
    imageUrl:
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Brass Wall Hook Set',
    price: 24.5,
    rating: 4.4,
    sales: 176,
    imageUrl:
      'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=800&q=80',
  },
]

const delay = (duration = 500) =>
  new Promise((resolve) => window.setTimeout(resolve, duration))

export async function getProducts() {
  await delay()

  return mockedProducts
}
