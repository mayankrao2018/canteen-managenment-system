export type FoodItem = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  };
  
  export const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Masala Dosa",
      category: "breakfast",
      price: 60,
      image: "/foods/masala-dosa.jpg",
    },
    {
      id: 2,
      name: "Cold Coffee",
      category: "beverages",
      price: 40,
      image: "/foods/cold-coffee.jpg",
    },
    {
      id: 3,
      name: "Paneer Tikka",
      category: "starters",
      price: 120,
      image: "/foods/paneer-tikka.jpg",
    },
    {
      id: 4,
      name: "Biryani",
      category: "breakfast",
      price: 120,
      image: "/foods/biryani.jpg",
    },
    // Add more...
  ];
  