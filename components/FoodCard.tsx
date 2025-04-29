import { FoodItem } from "../utils/data";
import { useState } from "react";

type Props = {
  item: FoodItem;
  onAdd: (item: FoodItem, quantity: number) => void;
};

export default function FoodCard({ item, onAdd }: Props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
      <div className="mt-2 font-semibold">{item.name}</div>
      <div className="text-gray-500">₹{item.price}</div>
      <div className="flex items-center mt-2 space-x-2">
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border w-16 text-center rounded"
        />
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => onAdd(item, quantity)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
