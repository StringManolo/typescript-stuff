const printName = (obj: { first: string, last?: string }) => {
  console.log("Your name is " + obj.first + (obj.last && " " + obj.last || "") );
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
