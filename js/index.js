function calc(a, b, op) {
  if (op === 'add') {
    return add(a, b)
  } else if (op === 'sub') {
    return sub(a, b)
  } else if (op === 'multi') {
    return multi(a, b)
  } else if (op === 'div') {
    return div(a, b)
  } else if (op === 'mod') {
    return mod(a, b)
  } else if (op === 'exp') {
    return exp(a, b)
  } else if (op === 'perc') {
    return perc(a, b)
  } else {
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
