import { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const [coffee, setCoffee] = useState(data);
  const { name, chef, supplier, taste, category, details, photo, _id } = data;
  const navigation = useNavigation();

  const changeHandler = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newCoffee = { ...coffee };
    newCoffee[field] = value;
    setCoffee(newCoffee);
  };

  const updateCoffeeHandler = (event) => {
    event.preventDefault();

    fetch(`https://espresso-emporium-server-xi.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Coffee updated successfully!", {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (navigation.state === "loading") {
    return <p>Loading.......</p>;
  }

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="hover:underline">
          Back to home
        </Link>
      </div>

      <div className="bg-gray-300 p-6 rounded">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl">Update Existing Coffee Details</h2>
          <p>
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="mt-4">
          <form onSubmit={updateCoffeeHandler}>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter coffee name"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="text "
                    name="chef"
                    defaultValue={chef}
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
                    onChange={changeHandler}
                    type="text "
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter coffee supplier"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="text "
                    name="taste"
                    defaultValue={taste}
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
                    onChange={changeHandler}
                    type="text "
                    name="category"
                    defaultValue={category}
                    placeholder="Enter coffee category"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="text "
                    name="details"
                    defaultValue={details}
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
                    onChange={changeHandler}
                    type="url"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full input-primary"
                  />
                </div>
              </div>

              <div className="">
                <div className="form-control w-full ">
                  <input type="submit" value="Update Coffee Details" className="btn btn-primary" />
                </div>
                <ToastContainer></ToastContainer>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
