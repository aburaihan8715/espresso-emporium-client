import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CoffeeItem = ({ coffee, coffees, setCoffees }) => {
  const { name, photo, chef, _id } = coffee;

  const deleteHandler = (id) => {
    const agree = window.confirm("Are you want to delete?");
    if (agree) {
      fetch(`https://espresso-emporium-server-xi.vercel.app/coffees/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Coffee deleted successfully!", {
              position: "top-center",
              autoClose: 2000,
            });
          }
          const remainingCoffees = coffees.filter((coffee) => coffee._id !== id);
          setCoffees(remainingCoffees);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="flex border border-primary items-center p-2 gap-2 rounded-md">
      <div>
        <img src={photo} alt="coffee" />
      </div>

      <div>
        <div>
          <strong>Name : </strong>
          <span>{name}</span>
        </div>
        <div>
          <strong>Chef : </strong>
          <span>{chef}</span>
        </div>
        <div>
          <strong>Price : </strong>
          <span>890 Taka</span>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <Link to={`/coffees/details/${_id}`}>
          <button className="btn btn-square btn-outline">
            <EyeIcon className="h-6 w-6 text-info" />
          </button>
        </Link>

        <Link to={`/coffees/update/${_id}`}>
          <button className="btn btn-square btn-outline">
            <PencilIcon className="h-6 w-6 text-warning" />
          </button>
        </Link>

        <div>
          <button onClick={() => deleteHandler(_id)} className="btn btn-square btn-outline">
            <TrashIcon className="h-6 w-6 text-primary" />
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItem;
