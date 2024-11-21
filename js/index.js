function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function multi(a, b) {
  return a * b
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Деление на ноль не разрешено')
  }

  return a / b
}

function mod(a, b) {
  return a % b
}

function exp(a, b) {
  return a ** b
}

function perc(a, b) {
  return (a / 100) * b
}
