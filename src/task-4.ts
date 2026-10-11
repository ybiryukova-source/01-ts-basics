function printUserInfo(name: string, age: number, email?: string): void {
  if (email !== undefined) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
  } else {
    console.log(`Name: ${name}, Age: ${age}`);
  }
}

printUserInfo("Alice", 30, "alice@example.com");
printUserInfo("Bob", 25);