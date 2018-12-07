import React from "react";


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = { play: false,  hero: false };
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.setState({ play: !this.state.play });
        console.log(this.audio);
        this.state.play ? this.audio.play() : this.audio.pause();
    }

    render() {
        return (
            <div>
                <button className="musicButton" onClick={this.togglePlay}>{this.state.play ? 'Play' : 'Pause'}</button>
            </div>

        );
    }
}

export default Music;