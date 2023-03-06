//=================================

//Utility
export function shorten(words) {
  const wordList = words.split(" ");
  return wordList.map((word) => word[0].toUpperCase()).join("");
}

export function roundOf(n, p) {
  const n1 = n * Math.pow(10, p + 1);
  const n2 = Math.floor(n1 / 10);
  if (n1 >= n2 * 10 + 5) {
    return (n2 + 1) / Math.pow(10, p);
  }
  return n2 / Math.pow(10, p);
}

export function tilteCapitalize(str) {
  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(" ");

  return str2;
}

export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function getRanges(
  min,
  max,
  step,
  reverse = false,
  includeF = true,
  includeL = true
) {
  const values: Record<string, unknown>[] = [];
  if (includeF) {
    values.push({
      value: null,
      label: "Select range",
    });
  }

  if (reverse) {
    for (let i = max; i >= min; i -= step) {
      values.push({
        value: i,
        label: i.toString(),
      });
    }
  } else {
    for (let i = min; i <= max; i += step) {
      values.push({
        value: i,
        label: i.toString(),
      });
    }
  }

  if (includeL) {
    values.push({
      value: "custom",
      label: "Custom input",
    });
  }

  return [values];
}
