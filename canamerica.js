const handleInput = require('./handleInput');


const CANADIAN_TO_AMERICAN_DOLLAR = .75;
const LITRE_TO_GALLON = 3.78541;

function canadianToAmerian(price) {
  return price * CANADIAN_TO_AMERICAN_DOLLAR * LITRE_TO_GALLON;
}

function canamerica(canadianPrice, americanPrice) {
  canadianPrice = +canadianPrice.slice(1);
  americanPrice = +americanPrice.slice(1);

  const canadianInAmerican = canadianToAmerian(canadianPrice);

  if (canadianInAmerican < americanPrice) {
    const difference = canadianInAmerican / americanPrice;
    return `Canadian gas is ${difference} times cheaper.`;

  } else {
    const difference = americanPrice / canadianInAmerican;
    return `American gas is ${difference} times cheaper.`;
  }
}



handleInput(lines => console.log(canamerica(...lines)));

