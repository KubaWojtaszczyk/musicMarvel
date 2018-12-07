import React from "react";

    class Info extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hero: true,
            }
        }
        render() {
            let {id, name} = this.props.hero;
            return this.props.hero ? (
                    <div>
                        <h2  className="poofName" style={{textAlign:"center"}}>{name}</h2>
                            <button className="poofButton" onClick={() => this.props.removeHero(id)}>Poof</button>
                    </div>
            ): null
        }
    }



export default Info