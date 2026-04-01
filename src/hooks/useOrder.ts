import { useState } from "react"
import type { MenuItemInterface, OrderItemInterface } from "../types"

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItemInterface[]>([])

  const addItem = (item: MenuItemInterface) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id)
    if (existingItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setOrder(updatedOrder)
    } else {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }
  console.log(order)

  return {
    order,
    setOrder,
    addItem,
  }
}