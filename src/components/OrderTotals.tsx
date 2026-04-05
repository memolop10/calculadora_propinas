import { useMemo } from "react"
import type { OrderItemInterface } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItemInterface[]
}

const OrderTotals = ({ order }: OrderTotalsProps) => {

    const subTotal = useMemo(() => order.reduce((total, item) => total + item.quantity * item.price, 0), [order])
    const tip = useMemo(() => subTotal * 0.15, [subTotal])
    const total = useMemo(() => subTotal + tip, [subTotal, tip])

  return (
    <>
        <div className="space-y-3 mt-5">
            <h2 className="text-2xl font-black">Totales y propina:</h2>
            <p> SubTotal:  
                <span className="font-bold"> {formatCurrency(subTotal)}</span>
            </p>
             <p> Propina:  
                <span className="font-bold"> {formatCurrency(tip)}</span>
            </p>
             <p> Total a Pagar:  
                <span className="font-bold"> {formatCurrency(total)}</span>
            </p>
        </div>
        <button></button>
    </>
  )
}

export default OrderTotals