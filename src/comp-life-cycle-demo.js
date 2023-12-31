import React from "react";

class Complifecycle extends React.Component{

    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }

    // Color change able to see after 2 seconds
    // The componentDidMount() method is called after the component is rendered.
    componentDidMount(){
        setTimeout(() => {
           this.setState({favoritecolor:"Yellow"})
        }, 2000);
    }

    // Below method, It has access to the props and state before the update.
    getSnapshotBeforeUpdate(preProp, preState){
        document.getElementById("div1").innerHTML = "Before update, the favourite was: " + preState.favoritecolor;
    }

    // The componentDidUpdate method is called after the component is updated in the DOM.
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "After update, Favourite color is : " + this.state.favoritecolor;
    }

    render(){
        return (
            <div>
                <h1>This is demo for Component Life cycle</h1> 
                <h2>My favorite color is {this.state.favoritecolor} </h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

export default Complifecycle;