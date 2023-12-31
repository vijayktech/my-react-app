import React from "react";

class Cars extends React.Component{
    constructor(){
        super();
        this.state= {favoritecolor:"red"};
    }

    // static getDerivedStateFromProps(props, state){
    //     return {favoritecolor : props.favcol};
    // }

    shouldComponentUpdate(){
        return true;
    }

    changeColor = () => {
        this.setState({color: "blue"});    
    }

    render(){
        return (
        <div>
            <h2>This is Car's color is {this.state.color} and it's model is {this.props.model}</h2>
            <button type="button" onClick={this.changeColor}>Click Me</button>
        </div>
        );
    }
}

export default Cars;