import { useMemo } from "react"
import type { OrderItemInterface } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItemInterface[]
    tip: number
    placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {

    const subTotal = useMemo(() => order.reduce((total, item) => total + item.quantity * item.price, 0), [order])
    const tipAmount = useMemo(() => subTotal * tip, [tip, order])
    const totalToPay = useMemo(() => subTotal + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3 mt-5">
            <h2 className="text-2xl font-black">Totales y propina:</h2>
            <p> SubTotal:  
                <span className="font-bold"> {formatCurrency(subTotal)}</span>
            </p>
             <p> Propina:  
                <span className="font-bold"> {formatCurrency(tipAmount)}</span>
            </p>
             <p> Total a Pagar:  
                <span className="font-bold"> {formatCurrency(totalToPay)}</span>
            </p>
        </div>
        <button
            className="w-full bg-black text-white font-bold p-3 px-4 mt-10 rounded 
            disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={totalToPay === 0}
            onClick={placeOrder}
        >
          Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals