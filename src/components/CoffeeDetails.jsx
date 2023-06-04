import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const { name, chef, supplier, taste, category, details, photo } = useLoaderData();
  return (
    <div>
      <div className="py-6">
        <Link to="/" className="hover:underline">
          Back to home
        </Link>
      </div>

      <div className="flex bg-gray-300 p-10 gap-x-20 items-center rounded">
        <div className="">
          <img className="" src={photo} alt="coffee" />
        </div>

        <div className=" space-y-4">
          <h4 className="text-3xl">Niceties</h4>
          <ul>
            <li>
              <strong>Name : </strong>
              <span> {name}</span>
            </li>
            <li>
              <strong>Chef: </strong>
              <span>{chef}</span>
            </li>
            <li>
              <strong>Supplier : </strong>
              <span> {supplier}</span>
            </li>
            <li>
              <strong>Taste : </strong>
              <span> {taste}</span>
            </li>
            <li>
              <strong>Category : </strong>
              <span> {category}</span>
            </li>
            <li>
              <strong>Details : </strong>
              <span> {details}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
