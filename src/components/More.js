import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';


const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

class More extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            items: [],
            category: "oldClass"
        }
    }

    componentDidMount() {
        fetch('https://gateway.marvel.com:443/v1/public/comics?format=comic&title=Amazing%20Adventures&limit=18&apikey=64fa88ed02b2893f0690b179b537a155')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: true,
                    items: json.data.results,
                })
            });
    }

    pianoKey = (id) => {
        console.log("ok")
        this.setState ({
            category: this.state.category === "oldClass" ? "newClass" : "oldClass"
        })
    }

    render(props) {
        console.log(this.state.items)
        return (
            <div  style={{
                backgroundImage: "linear-gradient(to right, #FFBC67, #DA727E, #AC6C82, #685C79, #455C7B)",
            }}>
                <div onClick ={event => this.pianoKey(event, this.state.items.id)}>
                <DimensionsProvider>
                    {({containerWidth, containerHeight}) => (
                        <SoundfontProvider
                            instrumentName="acoustic_grand_piano"
                            audioContext={audioContext}
                            hostname={soundfontHostname}
                            render={({isLoading, playNote, stopNote}) => (
                                <Piano
                                    noteRange={noteRange}
                                    width={containerWidth}
                                    playNote={playNote}
                                    stopNote={stopNote}
                                    disabled={isLoading}
                                    {...props}
                                />
                            )}
                        />
                    )}
                </DimensionsProvider>
                </div>
                <div className="rowOne">
                    {this.state.items.map(item => (
                        <div  key={item.id}>
                            <img src={item.thumbnail.path + '/portrait_xlarge.jpg'} alt="superhero" className={this.state.category}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default More;