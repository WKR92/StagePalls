import React from 'react';
import gsap from "gsap";
import {TimelineLite} from "gsap";
import horseSound from './icons/Horse-Neighing-D-www.fesliyanstudios.com.mp3';


class HiddenArea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.blockID,
            mail: this.props.mail,
            comment: this.props.comment,
            phoneNumber: this.props.phoneNumber,
            forWho: this.props.forWho,
            showMusicArea: true
        };
    }
    componentDidMount(){
        const target = document.getElementById(this.state.id)
        gsap.from(target, {opacity: 0.5, duration: 1, y: -50, x: -25})
    }
    render(){
        // Próba jak będzie funkcjonowała sekcja audio
        const musicBlock = <div id="musicPartOfBLock" style={{ borderRight: "2px solid #EFEFEF" , borderLeft: "2px solid #EFEFEF", borderBottom: "transparent", 
                                backgroundColor: "#FFFFFF", display: "flex"}}>
                                {/* <div style={{width: 230}}></div> */}
                                <div style={{width: "100%", display: 'flex', paddingRight: 0, alignItems: "center", justifyContent: 'center'}}>
                                    <p style={{marginRight: 0, marginLeft: 0, paddingLeft: 10}}>Posłuchaj jak gram/y: </p>
                                    <audio style={{outline: "none", marginLeft: 10, textAlign: "center",
                                    backgroundColor: "#FFFFFF", marginRight: 10, paddingTop: 5, paddingBottom: 5}} controls>
                                        <source src={horseSound} type="audio/mp3"></source>
                                        Twoja przeglądarka nie obsługuje elementu audio
                                    </audio>
                                    <p style={{paddingRight: 10}}>| Testowy plik audio. Baza danych nie przyjmuje jeszcze file input</p>
                                </div>
                            </div>
        return(
            <div id={this.state.id}>
                <div  className="HiddenAreaMainDiv" style={{height: 150, backgroundColor: "#FFFFFF", margin: "auto", display: "flex", border: "2px solid #EFEFEF",
                borderRight: "transparent"}}>
                    <div id="hiddenAreaEmailAndPhoneBlock" style={{display: "flex", flexDirection: "column", width: 230, border: "2px solid #EFEFEF", borderLeft: "3px solid",
                    borderTop: "2.85px solid", borderTopColor: this.props.forWho === "musician" ? "#5F77D9" : "#00A693", borderLeftColor: this.props.forWho === "musician" ? "#5F77D9" : "#00A693" }}>
                        <p style={{marginBottom:0, paddingTop:5, marginLeft: "5%", fontSize: 14}}>Email:</p>
                        <p style={{marginTop:5, marginLeft: "8%", marginBottom: 0, color: "#be3144", overflow: "auto"}}>{this.state.mail}</p>
                        <p style={{marginBottom:0, marginLeft: "5%", fontSize: 14}}>Numer tel:</p>
                        <p className="telP" style={{marginTop:5, marginLeft: "8%", color: "#be3144", overflow: "auto"}}>{this.state.phoneNumber}</p>
                    </div>
                    <div style={{width: "81%", display: "flex", border: "2px solid #EFEFEF"}}>
                        <p style={{paddingLeft: 15, marginRight: 20, paddingTop: 1}}>Opis: </p>
                        <p style={{width:"90%", overflow: "auto"}}>{this.state.comment}</p>
                    </div>
                        
                </div>
                    {this.state.showMusicArea ? musicBlock : null}
            </div>
        )
    }
}

export default class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenId: this.props.blockID + 0.1,
            showHiddenArea: false,
            id: this.props.blockID,
            mail: this.props.mail === "" ? "Nie podano" : this.props.mail,
            comment: this.props.comment,
            phoneNumber: this.props.phoneNumber === "0" ? "Nie podano" : this.props.phoneNumber
        };
        this.hiddenArea = this.hiddenArea.bind(this);
    }
    hiddenArea(){
        this.setState({
            showHiddenArea: !this.state.showHiddenArea
        })
    }
    component(){
        this.setState({
            showHiddenArea: !this.state.showHiddenArea
        })
    }
    render(){
        return(
            <div className="blockMainDiv" id={this.state.hiddenId}>
                <div onClick={this.hiddenArea} className="block" style={{margin: "auto", display: "flex", marginTop: 5, 
                backgroundColor: "#FFFFFF", marginBottom: "-1px"}}>
                    <div style={{display: "flex", borderRight: "2px solid #EFEFEF", width: "14%", paddingRight: 20}}>
                        <div id="blueDiv" style={{width: "10px", backgroundColor: this.props.forWho === "musician" ? "#5F77D9" : "#00A693"}}></div>
                        <div style={{margin: "auto", display: "flex", flexDirection: "column", width: "100%"}}>
                            <data style={{marginLeft: "20%", marginBottom: "0px", paddingTop: 15, fontSize: "14px"}}>
                            {this.props.dateOfPublished}</data>
                            <p style={{marginLeft: "20%", fontSize: "16px"}}>
                            {this.props.forWho === "band" ? "Szukam zespołu" : "Szukam muzyka"}</p>
                        </div>
                    </div>
                    <div style={{display: "flex", alignItems: "center", borderLeft: "2px solid #EFEFEF", justifyContent: "space-evenly", width: "80%"}}>
                        <p id="instrumentP" style={{width: "20%", marginRight: -12, paddingTop: 6, textAlign: "center"}}>{this.props.instrument}</p>
                        <p id="genreP" style={{width: "20%", paddingTop: 6, textAlign: "center"}}>{this.props.genre}</p>
                        <p style={{width: "20%", paddingTop: 6, textAlign: "center"}}>{this.props.fromWhen}</p>
                        <p id="cityP" style={{width: "20%", paddingTop: 6, textAlign: "center"}}>{this.props.city}</p>
                    </div>
                </div>
                <div>
            </div >
                <div className="HiddenAreaHolder">
                    {this.state.showHiddenArea ? <HiddenArea blockID={this.state.id} mail={this.state.mail} 
                    comment={this.state.comment} phoneNumber={this.state.phoneNumber} forWho={this.props.forWho}
                    /> : null}
                </div>
                
            </div>
        )
    }
  }