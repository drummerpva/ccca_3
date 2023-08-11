export class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
  ) {}

  getDiscount(value: number): number {
    return (value * this.percentage) / 100
  }
}
