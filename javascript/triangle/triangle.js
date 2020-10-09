//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  isEquilateral() {
    return this.isTriangle() && this.x == this.y && this.x == this.z;
  }

  isIsosceles() {
    return this.isTriangle() && 
      ((this.x == this.y || this.x == this.z) ||
      this.y == this.z)
  }

  isScalene() {
    return this.isTriangle() && !this.isEquilateral() && !this.isIsosceles();
  }

  isTriangle() {
    return Math.abs(this.x - this.y) < this.z && this.z < this.x + this.y;
  }
}
