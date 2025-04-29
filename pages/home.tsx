import { useState } from "react";
import { foodItems, FoodItem } from "../utils/data";
import FoodCard from "../components/FoodCard";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import { useRouter } from "next/router";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<{ item: FoodItem; quantity: number }[]>([]);
  const router = useRouter();

  const handleAdd = (item: FoodItem, quantity: number) => {
    setCart([...cart, { item, quantity }]);
  };

  const filteredItems = foodItems.filter(
    (f) =>
      (category === "all" || f.category === category) &&
      f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar selected={category} onSelect={setCategory} />
      <div className="flex-1 p-4">
        <SearchBar query={search} onChange={setSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onAdd={handleAdd} />
          ))}
        </div>
        <button
          onClick={() => {
            localStorage.setItem("cart", JSON.stringify(cart));
            router.push("/checkout");
          }}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
