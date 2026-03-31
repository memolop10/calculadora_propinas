import { useState } from "react"
import type { MenuItemInterface, OrderItemInterface } from "../types"

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItemInterface[]>([])

  const addItem = (item: MenuItemInterface) => {
    console.log("Agregando item al pedido", item)
  }

  return {
    order,
    setOrder,
    addItem,
  }
}