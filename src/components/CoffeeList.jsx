import { Link } from "react-router-dom";
import CoffeeItem from "./CoffeeItem";
import { useEffect, useState } from "react";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/coffees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (loading) {
    return <p>Loading...........</p>;
  }

  return (
    <div>
      <div className="text-center py-4">
        <h2 className="text-3xl">Our Popular Products</h2>
        <Link to="/coffees/add">
          <button className="btn btn-xs btn-primary">Add Coffee</button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {coffees?.map((coffee) => (
          <CoffeeItem key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeItem>
        ))}
      </div>
    </div>
  );
};

export default CoffeeList;
