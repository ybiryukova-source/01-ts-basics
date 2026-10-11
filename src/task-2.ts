interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "Gaming Mouse",
  price: 49.99,
  description: "Ergonomic wireless gaming mouse",
};

console.log(product);