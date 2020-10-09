//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  if (n < 1) throw new Error('Only positive numbers are allowed');
  return iterate(n, 0);
};

const iterate = (n, curStep) => {
  if (n == 1) return curStep;
  else if (n % 2 == 0) return iterate(n / 2, curStep + 1);
  else return iterate(3*n + 1, curStep + 1);
}
