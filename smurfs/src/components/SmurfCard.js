import React from "react";


const SmurfCard = props => {
    console.log(props)
    return (
       
            <div>
                <h2>Name: {props.smurfData.name}</h2>
                <h2>Age: {props.smurfData.age}</h2>
                <h2>Height: {props.smurfData.height}</h2>
            </div>
      
    )
}

export default SmurfCard