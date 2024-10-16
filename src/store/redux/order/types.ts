// export type OrderStatusType =
//   | "PENDING"
//   | "PAID"
//   | "PROCESSING"
//   | "SHIPPED"
//   | "DELIVERED"
//   | "CANCELLED"
//   | "REFUNDED"
// export type PaymentMethod = "CREDIT_CARD" | "PAYPAL" | "BANK_TRANSFER"

export interface OrderSliceState {
  currentOrder: OrderObject | undefined
  orders: OrderObject[]
  ordersAdmin: OrderObject[]
  error: string | undefined
  isPending: boolean
}

export interface OrderObject {
  id: number
  userId: number
  orderTime: string
  address: string
  deliveryTime: string
  orderProducts: orderProduct[]
  orderStatus: OrderStatus
  paymentMethod: string
  totalSum: number
}

export interface confirmOrder {
  id: number
  address: string
  deliveryTime: string | Date
  paymentMethod: string
}

export interface updateOrder {
  orderId: number
  orderStatus: OrderStatus
}

export interface orderProduct {
  orderId: number
  productId: number
  productQuantity: number
  sum: number
}

export enum PaymentMethod {
  CREDIT_CARD,
  PAYPAL,
  BANK_TRANSFER,
}

export enum OrderStatus {
  PENDING, //ожидает оплаты или подтверждения.
  PAID, //  оплачен.
  PROCESSING, //в процессе обработки.
  SHIPPED, // отправлен.
  DELIVERED, // доставлен клиенту.
  CANCELLED, // отменён.
  REFUNDED, // средства за заказ возвращены.
}
