function calc(a, b, op) {
  switch (op) {
    case 'add':
      return add(a, b)
    case 'sub':
      return sub(a, b)
    case 'multi':
      return multi(a, b)
    case 'div':
      return div(a, b)
    case 'mod':
      return mod(a, b)
    case 'exp':
      return exp(a, b)
    case 'perc':
      return perc(a, b)
    default:
      throw new Error(`Неподдерживаемая операция: ${op}`)
  }
}

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

console.log(calc(10, 5, 'add'))
console.log(calc(10, 5, 'sub'))
console.log(calc(10, 5, 'multi'))
console.log(calc(10, 5, 'div'))
console.log(calc(10, 5, 'mod'))
console.log(calc(2, 3, 'exp'))
console.log(calc(200, 10, 'perc'))
