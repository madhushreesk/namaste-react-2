import { useRouteError } from "react-router-dom";
import React from "react";

const Error404 = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>
        {err.status} - {err.data}
      </h2>
      <button>Go back to homepage</button>
    </div>
  );
};

export default Error404;
