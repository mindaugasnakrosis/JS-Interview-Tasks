function pascal(depth, base = 1) {
  let triangle = [[base]];
  for (let i = 1; i < depth; i++) {
    const prevRow = triangle[i-1];
    const newRow = [base];
    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j-1] + prevRow[j]);
    }
    newRow.push(base);
    triangle.push(newRow);
  }
  return triangle;
}

console.log(pascal(5));
console.log(pascal(5,5)); // Can use with base