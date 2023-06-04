import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCoffee = () => {
  const [coffeeInfo, setCoffeeInfo] = useState();

  const blurHandler = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newCoffeeInfo = { ...coffeeInfo };
    newCoffeeInfo[field] = value;
    setCoffeeInfo(newCoffeeInfo);
  };

  const addCoffeeHandler = (event) => {
    event.preventDefault();
    // console.log(coffeeInfo);
    fetch("http://localhost:5001/coffees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Coffee added successfully!", {
            position: "top-center",
          });
          console.log(data);
          event.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="hover:underline">
          Back to home
        </Link>
      </div>

      <div className="bg-gray-300 p-6 rounded">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl">Add New Coffee</h2>
          <p>
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <div className="mt-4">
          <form onSubmit={addCoffeeHandler}>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="name"
                    type="text "
                    placeholder="Enter coffee name"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="chef"
                    type="text "
                    placeholder="Enter coffee chef"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="supplier"
                    type="text "
                    placeholder="Enter coffee supplier"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="taste"
                    type="text "
                    placeholder="Enter coffee taste"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="category"
                    type="text "
                    placeholder="Enter coffee category"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="details"
                    type="text "
                    placeholder="Enter coffee details"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
              </div>

              <div className="">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="photo"
                    type="url"
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
              </div>

              <div className="">
                <div className="form-control w-full ">
                  <input type="submit" value="Add Coffee" className="btn btn-primary" />
                </div>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
