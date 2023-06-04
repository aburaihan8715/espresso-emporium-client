import { Link, useRouteError } from "react-router-dom";
import notFoundImg from "../assets/images/404/404.gif";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="hover:underline">
          Back to home
        </Link>
      </div>
      <div>
        <img className="rounded" src={notFoundImg} alt="not found" />
      </div>

      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
