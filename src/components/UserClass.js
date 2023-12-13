import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + " child component did mount");

    const data = await fetch("https://api.github.com/users/madhushreesk");

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="user-card">
        <h1>This is class Component</h1>

        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Role : {this.state.userInfo.bio}</h2>
        <h2>Company : {this.state.userInfo.company}</h2>
        <h2>Location : {this.state.userInfo.location}</h2>
        <h4>Contact : 9108726195</h4>
      </div>
    );
  }
}
export default UserClass;
