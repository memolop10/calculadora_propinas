import { formatCurrency } from "../helpers"
import type { MenuItemInterface, OrderItemInterface } from "../types"


type OrderContentsProps = {
    order: OrderItemInterface[]
    removeItem: (itemId: MenuItemInterface["id"]) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
        <h2 className="text-4xl font-black">Consumo</h2>
        <div className="space-y-3 mt-5">
            {
                order.length === 0 ? 
                <p className="text-center text-slate-500">No hay items en el consumo</p> :
                (
                    order.map((item) => (
                        <div key={item.id} className="flex justify-between p-3 border border-slate-300 rounded-lg">
                            <div className="">
                                <p className="text-lg font-bold">{item.name} - {formatCurrency(item.price)}</p>
                                <p className="font-black text-sm text-slate-500">
                                    Cantidad: {item.quantity} - 
                                    Total: {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                          
                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold 
                                py-2 px-4 rounded"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                )}
        </div>
    </div>
  )
}

export default OrderContents