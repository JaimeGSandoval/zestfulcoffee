export const drinkTypes = {
  id: 'drinkType',
  question: 'How do you drink your coffee?',
  types: [
    {
      id: 'Capsule-0',
      optionTitle: 'Capsule',
      optionDescription:
        'Compatible with Nespresso systems and similar brewers',
      dataType: 'drinkType',
    },
    {
      id: 'Filter-1',
      optionTitle: 'Filter',
      optionDescription:
        'For pour over or drip methods like Aeropress, Chemex, and V60',
      dataType: 'drinkType',
    },
    {
      id: 'Espresso-2',
      optionTitle: 'Espresso',
      optionDescription:
        'Dense and finely ground beans for an intense, flavorful experience',
      dataType: 'drinkType',
    },
  ],
};

export const coffeeTypes = {
  id: 'coffeeType',
  question: 'What type of coffee?',
  types: [
    {
      id: 'Single Origin-0',
      optionTitle: 'Single Origin',
      optionDescription:
        'Distinct, high quality coffee from a specific family-owned farm',
      dataType: 'coffeeType',
    },
    {
      id: 'Decaf',
      optionTitle: 'Decaf',
      optionDescription:
        'Just like regular coffee, except the caffeine has been removed',
      dataType: 'coffeeType',
    },
    {
      id: 'Blended-2',
      optionTitle: 'Blended',
      optionDescription:
        'Combination of two or three dark roasted beans of organic coffees',
      dataType: 'coffeeType',
    },
  ],
};

export const coffeeAmounts = {
  id: 'coffeeAmount',
  question: 'How much would you like?',
  types: [
    {
      id: '250g-0',
      optionTitle: '250g',
      optionDescription:
        'Perfect for the solo drinker. Yields about 12 delicious cups.',
      dataType: 'coffeeAmount',
    },
    {
      id: '500g-1',
      optionTitle: '500g',
      optionDescription:
        'Perfect option for a couple. Yields about 40 delectable cups.',
      dataType: 'coffeeAmount',
    },
    {
      id: '1000g-2',
      optionTitle: '1000g',
      optionDescription:
        'Perfect for offices and events. Yields about 90 delightful cups.',
      dataType: 'coffeeAmount',
    },
  ],
};

export const grindTypes = {
  id: 'grindType',
  question: 'Want us to grind them?',
  types: [
    {
      id: 'Whole Bean-0',
      optionTitle: 'Whole Bean',
      optionDescription:
        'Best choice if you cherish the full sensory experience',
      dataType: 'grindType',
    },
    {
      id: 'Filter2-1',
      optionTitle: 'Filter',
      optionDescription:
        'For pour over or drip methods like Aeropress, Chemex, and V60',
      dataType: 'grindType',
    },
    {
      id: 'Cafetiére-2',
      optionTitle: 'Cafetiére',
      optionDescription:
        'Course ground beans specially suited for french press coffee',
      dataType: 'grindType',
    },
  ],
};

export const deliveryTypes = {
  id: 'deliveryType',
  question: 'How often should we deliver?',
  types: [
    {
      id: 'Every week-0',
      optionTitle: 'Every week',
      optionDescription:
        ' $14.00 per shipment. Includes free first-className shipping.',
      dataType: 'deliveryType',
    },
    {
      id: 'Every 2 weeks-1',
      optionTitle: 'Every 2 weeks',
      optionDescription:
        '$17.25 per shipment. Includes free priority shipping.',
      dataType: 'deliveryType',
    },
    {
      id: 'Every month-2',
      optionTitle: 'Every month',
      optionDescription:
        '$22.50 per shipment. Includes free priority shipping.',
      dataType: 'deliveryType',
    },
  ],
};
