import type { MenuItemInterface } from "../types"

interface MenuItemProps  {
  item: MenuItemInterface,
  addItem: (item: MenuItemInterface) => void
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button 
        className="w-full flex items-center justify-between p-3 border-teal-400 hover:bg-teal-200 border-2"
        onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
