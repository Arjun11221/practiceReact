import React from 'react'
import UserClass from './UserClass';

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");    // first constructor is load
  }

  componentDidMount(){
    console.log("Parent Did Mount");
  }

  render(){
    console.log("Parent Render");     // Second parent is render
    return (
      <div>
          <h1>Hello Guys...</h1>
          <UserClass name = "Arjun (Class)" location = "Delhi (Class)" />
      </div>
    )
  }
}



export default About