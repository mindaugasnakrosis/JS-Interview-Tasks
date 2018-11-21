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
/*[ [ 1 ],
  [ 1, 1 ],
  [ 1, 2, 1 ],
  [ 1, 3, 3, 1 ],
  [ 1, 4, 6, 4, 1 ] ]*/

console.log(pascal(5,5));
/*[ [ 5 ],
  [ 5, 5 ],
  [ 5, 10, 5 ],
  [ 5, 15, 15, 5 ],
  [ 5, 20, 30, 20, 5 ] ]*/