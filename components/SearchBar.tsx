type Props = {
    query: string;
    onChange: (value: string) => void;
  };
  
  export default function SearchBar({ query, onChange }: Props) {
    return (
      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded my-4"
      />
    );
  }
  