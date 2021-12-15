const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const calculateTotal = (amount, delivery) => {
  let total = null;
  const weeklyCost = 14;
  const biWeeklyCost = 17.25;
  const monthlyCost = 22.5;

  if (delivery === 'Every week' && amount === '250g') {
    total = 7.2 * 4 + weeklyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every 2 weeks' && amount === '250g') {
    total = 9.6 * 2 + biWeeklyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every month' && amount === '250g') {
    total = 12.0 + monthlyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every week' && amount === '500g') {
    total = 13 * 4 + weeklyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every 2 weeks' && amount === '500g') {
    total = 17.5 * 2 + biWeeklyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every month' && amount === '500g') {
    total = 22.0 + monthlyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every week' && amount === '1000g') {
    total = 22.0 * 4 + weeklyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every 2 weeks' && amount === '1000g') {
    total = 32 * 2 + biWeeklyCost;
    return currencyFormatter.format(total).toString();
  }

  if (delivery === 'Every month' && amount === '1000g') {
    total = 42.0 + monthlyCost;
    return currencyFormatter.format(total).toString();
  }
};

export default calculateTotal;
