import { Link, useRouteError } from "react-router-dom";
import React from "react";

const Error404 = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>
        {err.status} - {err.data}
      </h2>
      <Link to="/" className="noDecoration">
        <button className="filter-btn">Go back to homepage</button>
      </Link>
    </div>
  );
};

export default Error404;
