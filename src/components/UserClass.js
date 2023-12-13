import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child component did mount");
  }

  componentDidUpdate() {
    console.log("child component did update");
  }
  render() {
    console.log("child render");
    return (
      <div>
        <h1>This is class Component</h1>
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increment
        </button>

        <h2>Name : {this.props.name}</h2>
        <h2>Location : {this.props.location}</h2>
        <h4>Contact : 9108726195</h4>
      </div>
    );
  }
}
export default UserClass;
