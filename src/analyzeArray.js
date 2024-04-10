export function analyzeArray(array) {
  if (array.length === 0) {
    return "invalid array";
  }
  const average = calculateAverage(array);
  const [min, max] = calculateMinMax(array);
  const length = array.length;

  const obj = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return obj;
}

function calculateAverage(array) {
  const sum = array.reduce((acc, current) => acc + current, 0);
  const average = sum / array.length;
  return average;
}

function calculateMinMax(array) {
  const sorted = array.sort((a, b) => a - b);
  const maxIndex = sorted.length - 1;
  const max = sorted[maxIndex];
  const min = sorted[0];

  return [min, max];
}
