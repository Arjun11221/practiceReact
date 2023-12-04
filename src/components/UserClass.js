import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1,
            count2 : 2,
        }
        console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("Child Did Mount");
    }
    
    render(){
        console.log("Child Render");
        const {name , location} = this.props;
        const {count , count2} = this.state;
        return(
            <div className="user-card">
                <h1>Count : {count}</h1>       
                <h1>Count2 : {count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 2,
                        count2 : this.state.count2 + 2
                    })
                }} >Inc</button>
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
            </div>
        )
    }
}

export default UserClass;