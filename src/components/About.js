import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h2>About Class Component</h2>
        {/* <UserClass name={"Madhushri about class"} location={"Belgaum, India"} /> */}
      </div>
    );
  }
}

export default About;
