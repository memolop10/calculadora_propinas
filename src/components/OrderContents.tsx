import type { OrderItemInterface } from "../types"

type OrderContentsProps = {
  order: OrderItemInterface[]
}

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
        <h2 className="text-4xl font-black">Consumo</h2>
        <div className="space-y-3 mt-5">
            {
                order.length === 0 ? 
                <p className="text-center text-slate-500">No hay items en el consumo</p> :
                (
                    order.map((item) => (
                        <div key={item.id} className="p-3 border border-slate-300 rounded-lg">
                            <p className="text-xl font-bold">{item.name}</p>
                        </div>
                    ))
                )}
        </div>
    </div>
  )
}

export default OrderContents