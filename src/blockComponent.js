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
            showMusicArea: true
        };
    }
    componentDidMount(){
        const target = document.getElementById(this.state.id)
        gsap.from(target, {opacity: 0.5, duration: 1, y: -50, x: -25})
    }
    render(){
        // Próba jak będzie funkcjonowała sekcja audio
        const musicBlock = <div style={{ borderRight: "2px solid #EFEFEF" , borderLeft: "2px solid #EFEFEF", borderBottom: "transparent", 
                                backgroundColor: "#FFFFFF", display: "flex", height: 70}}>
                                {/* <div style={{width: 230}}></div> */}
                                <div style={{display: 'flex', margin: "auto"}}>
                                    <p style={{margin: "auto", marginRight: 0, marginLeft: 20}}>Posłuchaj jak gram/y: </p>
                                    <audio style={{outline: "none", margin: "auto", marginLeft: 20, textAlign: "center",
                                    backgroundColor: "#FFFFFF", marginRight: 20}} controls>
                                        <source src={horseSound} type="audio/mp3"></source>
                                        Twoja przeglądarka nie obsługuje elementu audio
                                    </audio>
                                    <p>| Testowy plik audio. Baza danych nie przyjmuje jeszcze file input</p>
                                </div>
                            </div>
        return(
            <div id={this.state.id}>
                <div  className="HiddenAreaMainDiv" style={{height: 150, backgroundColor: "#FFFFFF", margin: "auto", display: "flex", border: "2px solid #EFEFEF",
                borderRight: "transparent"}}>
                    <div style={{display: "flex", flexDirection: "column", width: 230, border: "2px solid #EFEFEF", borderLeft: "3px solid #5F77D9",
                    borderTop: "2.85px solid #5F77D9"}}>
                        <p style={{marginBottom:0, paddingTop:5, marginLeft: "5%", fontSize: 14}}>Email:</p>
                        <p style={{marginTop:5, marginLeft: "8%",marginBottom:0, color: "#be3144", overflow: "auto"}}>{this.state.mail}</p>
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
            btnID: this.props.blockID + 0.2,
            showHiddenArea: false,
            id: this.props.blockID,
            mail: this.props.mail === "" ? "Nie podano" : this.props.mail,
            comment: this.props.comment,
            phoneNumber: this.props.phoneNumber === "0" ? "Nie podano" : this.props.phoneNumber,
        };
        this.hiddenArea = this.hiddenArea.bind(this);
        this.hideBlock = this.hideBlock.bind(this);
    }
    componentDidMount(){
        var ukryjBtn = document.getElementById(this.state.btnID)
        ukryjBtn.addEventListener('mouseover', hover);
        function hover(event) {
            const target = event.target;
            var tl = new TimelineLite();
            tl.to(target, 0.1, {backgroundColor: "#8f1f2e"});
        }

        ukryjBtn.addEventListener('mouseout', aHover);
        function aHover(event) {
            const target = event.target;
            var tl = new TimelineLite();
            tl.to(target, 0.1, {backgroundColor: "#363840"});
        }
    }
    componentDidUpdate(){
        const blockToShow = document.getElementById(this.state.hiddenId)
        blockToShow.style["display"] = "block"
        blockToShow.style["opacity"] = 1
    }
    hiddenArea(){
        this.setState({
            showHiddenArea: !this.state.showHiddenArea
        })
    }
    hideBlock(event){
        event.stopPropagation();
        const blockToHide = document.getElementById(this.state.hiddenId)
        gsap.to(blockToHide, {opacity: 0, duration: 1, display: "none"})
    }
    component(){
        this.setState({
            showHiddenArea: !this.state.showHiddenArea
        })
    }
    render(){
        return(
            <div className="blockMainDiv" id={this.state.hiddenId} style={{marginLeft: 0}}>
                <div onClick={this.hiddenArea} className="block" style={{margin: "auto", display: "flex", marginTop: 5, 
                backgroundColor: "#FFFFFF", marginBottom: "-1px"}}>
                    <div style={{width: "10px", backgroundColor: "#5F77D9"}}></div>
                    <div style={{margin: "auto", display: "flex", flexDirection: "column", width: "17%"}}>
                        <data style={{marginLeft: "20%", marginBottom: "0px", paddingTop: 15, fontSize: "14px"}}>
                          {this.props.dateOfPublished}</data>
                        <p style={{marginLeft: "20%", marginTop: "0px", fontSize: "16px", paddingRight: 10}}>
                          {this.props.forWho === "band" ? "Szukam zespołu" : "Szukam muzyka"}</p>
                    </div>
                    <div style={{backgroundColor: "#EFEFEF", borderLeft: "solid 1px #EFEFEF", borderRight: "solid 1px #EFEFEF", 
                    marginRight: 30, width: "2px"}}></div>
                    <p id="instrumentP" style={{marginLeft: "2%", marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.instrument}</p>
                    <p id="genreP" style={{marginRight: 0, width: "20%", paddingTop: 6}}>{this.props.genre}</p>
                    <p style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.fromWhen}</p>
                    <p id="cityP" style={{marginRight: "-2%", width: "20%", paddingTop: 6}}>{this.props.city}</p>
                    <button id={this.state.btnID} className="ukryjBtn" style={{outline: "none", marginLeft: "0px", backgroundColor: "#363840", 
                    color: "#FFFFFF"}} onClick={this.hideBlock}>Ukryj</button>
                </div>
                <div>
            </div >
                <div className="HiddenAreaHolder">
                    {this.state.showHiddenArea ? <HiddenArea blockID={this.state.id} mail={this.state.mail} 
                    comment={this.state.comment} phoneNumber={this.state.phoneNumber}
                    /> : null}
                </div>
                
            </div>
        )
    }
  }