//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = argv => {
  const colors = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];
  return argv
    .slice(0, 2)
    .reduce((accumulator, currentValue, idx, arr) => accumulator + (colors.indexOf(currentValue)) * Math.pow(10, arr.length - (idx + 1)), 0);
}
