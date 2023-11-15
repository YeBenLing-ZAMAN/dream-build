export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};

export const getRandomItemsFromArray = (arr, numberOfItems) => {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfItems);
};

/* TO REMOVE UNNECESSARY VALUE AFTER AT 2 POINT  */
export const fixedFloatValue = (value) => {
  return parseFloat(value).toFixed(2);
};

export const getDiscountDependOnPercentage = (
  originalPrice,
  percentage
) => {
  const discountPrice = (originalPrice * percentage) / 100;
  return discountPrice.toFixed(2);
};
