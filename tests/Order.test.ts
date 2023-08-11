import { describe, test, expect } from 'vitest'
import { Order } from '../src/Order'
import { Item } from '../src/Item'
import { Coupon } from '../src/Coupon'

describe('Order', () => {
  test('Should create an empty order', async () => {
    const sut = new Order('98765432100')
    const total = sut.getTotal()
    expect(total).toBe(0)
  })
  test('should not create an order with invalid Cpf', () => {
    expect(() => new Order('98765432111')).toThrow(new Error('Invalid cpf'))
  })
  test('Should create an order with 3 items', async () => {
    const sut = new Order('98765432100')
    sut.addItem(new Item(1, 'Guitarra', 1000), 1)
    sut.addItem(new Item(2, 'Amplificador', 5000), 1)
    sut.addItem(new Item(3, 'Cabo', 30), 3)
    const total = sut.getTotal()
    expect(total).toBe(6090)
  })
  test('Should create an order with 3 items and apply discount coupon', async () => {
    const sut = new Order('98765432100')
    sut.addItem(new Item(1, 'Guitarra', 1000), 1)
    sut.addItem(new Item(2, 'Amplificador', 5000), 1)
    sut.addItem(new Item(3, 'Cabo', 30), 3)
    sut.addCoupon(new Coupon('VALE20', 20))
    const total = sut.getTotal()
    expect(total).toBe(4872)
  })
})
