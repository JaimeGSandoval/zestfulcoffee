/* eslint-disable no-duplicate-case */
const calculateTotal = (amount, delivery) => {
  switch ((amount, delivery)) {
    case '250g':
    case 'Every week':
      return '7.20';

    case '250g':
    case 'Every 2 weeks':
      return '9.60';

    case '250g':
    case 'Every month':
      return '12.60';

    case '500g':
    case 'Every week':
      return '13.00';

    case '500g':
    case 'Every 2 weeks':
      return '17.50';

    case '500g':
    case 'Every month':
      return '22.00';

    case '1000g':
    case 'Every week':
      return '22.50';

    case '1000g':
    case 'Every 2 weeks':
      return '32.00';

    case '1000g':
    case 'Every month':
      return '42.00';

    default:
      return '';
  }
};

export default calculateTotal;
