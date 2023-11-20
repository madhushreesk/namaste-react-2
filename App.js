import React from "react";
import ReactDOM from "react-dom/client";

const reactElem = <span>React Element</span>;

const reactElem2 = (
  <h2>
    {reactElem}
    React elemet 2
  </h2>
);

const Title2 = () => {
  return <h2>Playing with my code</h2>;
};

const Title = () => {
  return <h2>Namaste React with jsx 🚀</h2>;
};
const HeadingComponent = () => {
  return (
    <div>
      {Title2}
      <h2>Namaste React this is a functional component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
