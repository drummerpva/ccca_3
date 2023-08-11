import { Coupon } from './Coupon'
import { Cpf } from './Cpf'
import { Item } from './Item'
import { OrderItem } from './OrderItem'

export class Order {
  cpf: Cpf
  orderItems: OrderItem[]
  coupon?: Coupon
  constructor(cpf: string) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }

  getTotal(): number {
    let total = this.orderItems.reduce(
      (total, orderItem) => total + orderItem.getTotal(),
      0,
    )
    if (this.coupon) {
      total -= this.coupon.getDiscount(total)
    }
    return total
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }
}
