import React from "react";
import Pokemon from 'pokemon-images';


const Error = () => {
    const SquirtleImg = Pokemon.getSprite('squirtle');
    const WartortleImg = Pokemon.getSprite('wartortle');
    const CharizardImg = Pokemon.getSprite('charizard');
    return (
        <div className="errorDiv">
            <h1 style={{color:"#455C7B", fontWeight:"bold"}}>It looks like something went wrong</h1>
            <img style={{height: "50%", paddingTop:"50px"}} src={SquirtleImg} alt="squirtle"/> <i className="right"/> <img style={{height: "50%", paddingTop:"50px"}} src={WartortleImg} alt="wartortle"/>  <i className="right"/> <img style={{height: "50%", paddingTop:"50px"}} src={CharizardImg} alt="charizard"/>
        </div>
    );

}

export default Error;