import { Injectable, computed, signal } from '@angular/core';

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList = signal<Product[]>([
    {
      id: 1,
      name: 'Green Sneakers',
      description: 'Eco-friendly running shoes',
      image: 'https://via.placeholder.com/150',
      quantity: 10
    },
    {
      id: 2,
      name: 'Wooden Chair',
      description: 'Comfortable handmade wooden chair',
      image: 'https://via.placeholder.com/150',
      quantity: 8
    },
  {
      id: 3,
      name: 'Glass Bottle',
      description: 'Reusable glass water bottle',
      image: 'https://via.placeholder.com/150',
      quantity: 12
    },
    {
      id: 4,
      name: 'Canvas Tote',
      description: 'Stylish and sturdy canvas tote bag',
      image: 'https://via.placeholder.com/150',
      quantity: 15
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with high-quality sound',
      image: 'https://via.placeholder.com/150',
      quantity: 7
    },
    {
      id: 6,
      name: 'Ceramic Mug',
      description: 'Handmade ceramic mug for your coffee needs',
      image: 'https://via.placeholder.com/150',
      quantity: 20
    },
    {
      id: 7,
      name: 'Desk Lamp',
      description: 'Adjustable desk lamp with LED lighting',
      image: 'https://via.placeholder.com/150',
      quantity: 9
    },
    {
      id: 8,
      name: 'Notebook Set',
      description: 'Set of 3 eco-friendly notebooks',
      image: 'https://via.placeholder.com/150',
      quantity: 25
    },
    {
      id: 9,
      name: 'Yoga Mat',
      description: 'Non-slip, eco-conscious yoga mat',
      image: 'https://via.placeholder.com/150',
      quantity: 5
    },
    {
      id: 10,
      name: 'Wireless Earbuds',
      description: 'Noise-cancelling, long battery life earbuds',
      image: 'https://via.placeholder.com/150',
      quantity: 6
    }
  ]);

  products = computed(() => this.productList());

  getProductById(id: number): Product | undefined {
    return this.productList().find(p => p.id === id);
  }

    addProduct(product: Product) {
    this.productList.update(current => [...current, product]);
  }
}
