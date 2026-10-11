const usernames: string[] = ["Alice", "Bob", "Charlie"];
const ratings: number[] = [4.5, 3.8, 5.0];

interface Product {
  id: number;
  title: string;
  price: number;
}

const products: Product[] = [
  { id: 1, title: "Keyboard", price: 29.99 },
  { id: 2, title: "Monitor", price: 199.99 },
];

console.log(usernames, ratings, products);