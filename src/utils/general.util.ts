export const toRomanNumeral = (numStr: string | number): string => {
  const num = typeof numStr === "string" ? parseInt(numStr, 10) : numStr;
  if (isNaN(num) || num <= 0 || num > 3999) {
    throw new Error("Input must be a valid number between 1 and 3999.");
  }

  const romanMap: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";
  let remaining = num;

  for (const [value, numeral] of Object.entries(romanMap).reverse()) {
    const intValue = parseInt(value, 10);
    while (remaining >= intValue) {
      result += numeral;
      remaining -= intValue;
    }
  }

  return result;
};
