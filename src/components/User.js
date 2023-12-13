import React from "react";

const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name : {props.name}</h2>
      <h2>Location : Belgaum</h2>
      <h4>Contact : 9108726195</h4>
    </div>
  );
};

export default User;
