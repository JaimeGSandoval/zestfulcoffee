const calculateButtonState = (data) => {
  let btnState = null;
  if (
    (data.drinkType === 'Capsule' &&
      data.coffeeType &&
      data.coffeeAmount &&
      data.deliveryType) ||
    (data.drinkType &&
      data.coffeeType &&
      data.coffeeAmount &&
      data.grindType &&
      data.deliveryType)
  ) {
    btnState = false;
  } else {
    btnState = true;
  }

  return btnState;
};

export default calculateButtonState;
