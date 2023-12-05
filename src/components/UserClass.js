import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Arjun11221");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
  }

  render() {
    const {name,location,avatar_url,bio,html_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Bio : {bio}</h3>
        <a href={html_url} target="_blank" >Know Me</a>
      </div>
    );
  }
}

export default UserClass;
