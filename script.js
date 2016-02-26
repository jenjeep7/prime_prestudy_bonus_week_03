function double(x) {
  x = x*2;
  return x;
}

function numTen(x) {
  x = x + 10;
  return x;
}

function numTriple(x) {
  x = x*3;
  return x;
}

window.onload=console.log(double(numTen(numTriple(10))));
