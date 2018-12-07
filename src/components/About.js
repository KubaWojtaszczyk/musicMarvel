import React from "react";
import Info from "./Info";
import Pokemon from 'pokemon-images';
import Music from './Music';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#DA727E',
        boxShadow             : '0px 5px 40px -10px rgba(0,0,0,0.57)'
    }
};

Modal.setAppElement('#root')

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            items: [],
            toInfo: false,
            hero: null,
            modalIsOpen: false
        }
        this.handleInfo = this.handleInfo.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.removeHero = this.removeHero.bind(this);
    }

    componentDidMount() {
        fetch('https://gateway.marvel.com/v1/public/events/29/characters?limit=100&apikey=64fa88ed02b2893f0690b179b537a155')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    data: true,
                    items: json.data.results,
                })
            });
    }

        handleInfo(event, itemId) {
            event.preventDefault();

            const oneHero = this.state.items.filter(hero => {
                return hero.id === itemId
            })
                this.setState({
                    hero: oneHero[0],
                    modalIsOpen: true,
                })
            }

            removeHero(id) {
            this.setState ({
                items: this.state.items.filter(hero=> hero.id !== id),
                modalIsOpen: false
              })
            }

        afterOpenModal(){
            this.subtitle.style.color = '#455C7B';
            }


    render() {
        const SquirtleImg = Pokemon.getSprite('squirtle');

        if (this.state.toInfo === true) {
        }

        let {data, items} = this.state;
        if (!data) {
            return (
                <h1 style={{backgroundImage: "linear-gradient(to right, #FFBC67, #DA727E, #AC6C82, #685C79, #455C7B)",  height:"100vh", paddingLeft:"25px", paddingTop:"25px", color:"#455C7B", fontWeight:"bold"}}>
                   Loading... If it's taking a long time, please reload the page.
                </h1>
            );
        }
        else {
            return (
                  <div className="superheroDiv">
                        <header>
                            <img src={SquirtleImg} alt="squirtle"/>
                            <div>Press the button and turn the music on, then click on the card and see what will happen next</div>
                            <Music/>
                        </header>
                            <div>
                            <Modal
                                   isOpen={this.state.modalIsOpen}
                                   onAfterOpen={this.afterOpenModal}
                                   onRequestClose={this.removeHero}
                                   style={customStyles}
                                   contentLabel="Example Modal"
                            >
                                <div style={{textAlign:"center"}}>
                                    <h1 ref={subtitle => this.subtitle = subtitle}>Sweet dreams</h1>
                                    <Info removeHero={this.removeHero.bind(this)} hero={this.state.hero}/>
                                </div>
                            </Modal>
                  </div>
                            <div className="rowOne">
                                   {items.map(item => (
                                         <div className="columnOne" key={item.id}>
                                             <img onClick={event => this.handleInfo(event, item.id)} src={item.thumbnail.path + '/standard_xlarge.jpg'} alt="superhero" className="zoom"/>
                                         </div>
                                   ))}
                            </div>
                  </div>
            )
        }

    }
}

const Marvel = () => {
    return (
        <div>
            <Characters/>
        </div>
    );

}

export default Marvel;