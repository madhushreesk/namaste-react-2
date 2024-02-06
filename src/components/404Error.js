import { Link, useRouteError } from "react-router-dom";
import React from "react";

const Error404 = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2> Something went wrong!!</h2>
    </div>
  );
};

export default Error404;
