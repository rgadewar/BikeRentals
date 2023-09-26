import "./App.css";
import BikeList from "./BikeList";
const bikes = [
  {
    "id": 1,
    "name": "Mountain Bike 1",
    "rating": 4.9,
    "price": 150,
    "image": "2-Wheel-Bike-Comfort-Hybrid.png", // Updated image filename
    "details": {
      "capacity": "1 Person",
      "productInfo": "A rugged mountain bike for off-road adventures."
    }
  },
  {
    "id": 2,
    "name": "Road Bike 1",
    "rating": 4.8,
    "price": 250,
    "image": "2-Wheel-Bike-Roubaix-Road-Bike.png", // Updated image filename
    "details": {
      "capacity": "1 Person",
      "productInfo": "A high-speed road bike for enthusiasts."
    }
  },
  {
    id: 3,
    name: "City Bike 1",
    rating: 4.75,
    price: 300,
    image: "Electric-Bike.png", // Updated image filename
    "details": {
      "capacity": "1 Person",
      "productInfo": "A high-speed road bike for enthusiasts."
    }
  },
  {
    id: 4,
    name: "Electric Bike 1",
    rating: 4.9,
    price: 120,
    image: "Surrey-Single-Surrey-Green-1.png", // Updated image filename
    "details": {
      "capacity": "1 Person",
      "productInfo": "A high-speed road bike for enthusiasts."
    }
  },
  {
    id: 5,
    name: "Hybrid Bike 1",
    rating: 4.7,
    price: 140,
    image: "e-bike-w-child-seat-SB.png", // Updated image filename
    "details": {
      "capacity": "1 Person",
      "productInfo": "A high-speed road bike for enthusiasts."
    }
  },
  {
    id: 6,
    name: "Cruiser Bike 1",
    rating: 4.69,
    price: 96,
    image: "Surrey-Triple-Surrey-Red.png", // Updated image filename
    "details": {
      "capacity": "1 Person",
      "productInfo": "A high-speed road bike for enthusiasts."
    }
  },
];





function App() {
  return (
    <div>
      <BikeList properties={bikes} />
    </div>
  );
}

export default App;
