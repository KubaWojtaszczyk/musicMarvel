import React, {Component} from "react";
import Pokemon from 'pokemon-images';
import {Redirect} from "react-router-dom";





class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            toMarvel: false,
            toMore: false
        }

    }
        showMe = () => {

            this.setState({
                showText: !this.state.showText
            })
        }

        redirectOne = (e) => {
        e.preventDefault()
            this.setState({
                toMarvel: true
            })
        }

        redirectTwo = (e) => {
        e.preventDefault()
            this.setState({
                toMore: true
            })
        }

        render() {

            if (this.state.toMarvel === true) {
                return <Redirect to='/marvel' />
            }

            if (this.state.toMore === true) {
                return <Redirect to='/more' />
            }

            const SquirtleImg = Pokemon.getSprite('squirtle');
            return (
                <div className="homeDiv">
                    {
                        this.state.showText ?
                            (<div className="squirtleDiv">
                                <h2 style={{backgroundColor: "rgba(218, 114, 126, 0.1)"}}>Hi, I am The Marvelous Mr Squirtle!</h2>
                                <p>Lately I've been wondering why Marvel heroes and villains are so violent? <br/> I know what you are thinking me and my fellow Poke-creatures fight all the time. <br/> That's true BUT we are at men's service, we don't have a choice. <br/> <br/>
                                    Marvel guys... that's a different story. They are almost humans, aren't they? <br/> Those guys really should simmer down now! There is one thing that should help them to chill out. <br/> This thing is called <b>music</b>. Press the button and choose the destiny of Marvel people.</p>
                                <button  className="redirectButton" onClick={this.redirectOne}>Lull them</button> <button className="redirectButton"onClick={this.redirectTwo}>Play them</button>
                            </div>)
                            : null
                    }

                    <img onClick={this.showMe} className="squirtle" src={SquirtleImg} alt="squirtle"/>

                </div>
            );
        }
    }

export default Home;