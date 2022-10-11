export class Book {
  name: string;
  private rating: number = 0;

  constructor(name: string, rating: number) {
    this.name = name;
    this.setRating(rating);
  }

  getRating(): number {
    return this.rating;
  }

  setRating(value: number): void {
    if (value >= 1 && value <= 10) {
      this.rating = value;
    } else if (value > 10) {
      this.rating = 10;
    } else if (value < 1) {
      this.rating = 1;
    }
  }

  toString(): string {
    return `cím: ${this.name} | értékelés: ${this.rating}/10`;
  }

}
