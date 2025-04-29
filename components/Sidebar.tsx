type Props = {
    selected: string;
    onSelect: (category: string) => void;
  };
  
  const categories = ["all", "breakfast", "starters", "beverages"];
  
  export default function Sidebar({ selected, onSelect }: Props) {
    return (
      <div className="w-40 p-4 bg-gray-100 h-full">
        {categories.map(cat => (
          <div
            key={cat}
            className={`p-2 cursor-pointer rounded hover:bg-gray-300 ${selected === cat ? "bg-gray-300" : ""}`}
            onClick={() => onSelect(cat)}
          >
            {cat.toUpperCase()}
          </div>
        ))}
      </div>
    );
  }
  