function double(x) {
  return x * 2;
}

function numTen(x) {
  return x + 10;
}

function numTriple(x) {
return x * 3;
}

window.onload=console.log(double(numTen(numTriple(10))));
