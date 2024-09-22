export function calc(data) {
  let total = data.reduce((sum, item) => {
    if (typeof item.amount === 'number') {
      return sum + item.amount;
    }
    return sum;
  }, 0);
  return total;
}

export function remaining(incomeData, outgoingData) {
  let incomeTotal = calc(incomeData);
  let outgoingTotal = calc(outgoingData);
  let remaining = incomeTotal - outgoingTotal;
  return remaining;
}


export function salary(data) {
  let total = data.reduce((sum, item) => {
    if (item.source === 'salary') {
      return sum + item.amount;
    }
    return sum;
  }, 0);
  return total;
}

export function other(data) {
  let total = data.reduce((sum, item) => {
    if (item.source === 'other') {
      return sum + item.amount;
    }
    return sum;
  }, 0);
  return total;
}

export function payment(data) {
  let total = data.reduce((sum, item) => {
    if (item.type === 'payment') {
      return sum + item.amount;
    }
    return sum;
  }, 0);
  return total;
}

export function purchase(data) {
  let total = data.reduce((sum, item) => {
    if (item.type === 'purchase') {
      return sum + item.amount;
    }
    return sum;
  }, 0);
  return total;
}