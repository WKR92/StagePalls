import React from 'react';
import gsap from "gsap";


class HiddenArea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.blockID,
            mail: this.props.mail,
            comment: this.props.comment,
            phoneNumber: this.props.phoneNumber,
        };
    }
    componentDidMount(){
        const target = document.getElementById(this.state.id)
        gsap.from(target, {opacity: 0.5, duration: 1, y: -50, x: -25})
    }
    render(){
        return(
            <div id={this.state.id} className="HiddenAreaMainDiv" style={{height: 150, backgroundColor: "#FFFFFF", margin: "auto", display: "flex", border: "2px solid #EFEFEF",
            borderRight: "transparent"}}>
                <div style={{display: "flex", flexDirection: "column", width: 230, border: "2px solid #EFEFEF", borderLeft: "3px solid #5F77D9",
                borderTop: "2.85px solid #5F77D9"}}>
                    <p style={{marginBottom:0, paddingTop:5, marginLeft: "25%", fontSize: 14}}>Email:</p>
                    <p style={{marginTop:5, marginLeft: "25%",marginBottom:0, color: "#be3144"}}>{this.state.mail}</p>
                    <p style={{marginBottom:0, marginLeft: "25%", fontSize: 14}}>Numer tel:</p>
                    <p className="telP" style={{marginTop:5, marginLeft: "25%", color: "#be3144"}}>{this.state.phoneNumber}</p>
                </div>
                <div style={{width: "81%", display: "flex", border: "2px solid #EFEFEF"}}>
                    <p style={{paddingLeft: 15, marginRight: 20, paddingTop: 1}}>Opis: </p>
                    <p style={{width:"90%", overflow: "auto"}}>{this.state.comment}</p>
                </div>          
            </div>
        )
    }
}

export default class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHiddenArea: false,
            id: this.props.blockID,
            mail: this.props.mail === null ? "Nie podano" : this.props.mail,
            comment: this.props.comment,
            phoneNumber: this.props.phoneNumber === null ? "Nie podano" : this.props.phoneNumber,
        };
        this.hiddenArea = this.hiddenArea.bind(this)
    }
    hiddenArea(){
        this.setState({
            showHiddenArea: !this.state.showHiddenArea
        })
    }
    render(){
        return(
            <div style={{marginLeft: 0}}>
                <div onClick={this.hiddenArea} className="block" style={{margin: "auto", display: "flex", marginTop: 5, backgroundColor: "#FFFFFF", 
                marginBottom: "-1px"}}>
                    <div style={{width: "10px", backgroundColor: "#5F77D9"}}></div>
                    <div style={{margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", width: 200}}>
                        <data style={{marginLeft: "20%", marginBottom: "0px", paddingTop: 15, fontSize: "14px"}}>
                          {this.props.dateOfPublished}</data>
                        <p style={{marginLeft: "20%", marginTop: "0px", fontSize: "16px"}}>
                          {this.props.forWho === "band" ? "Szukam zespołu" : "Szukam muzyka"}</p>
                    </div>
                    <div style={{backgroundColor: "#EFEFEF", borderLeft: "solid 1px #EFEFEF", borderRight: "solid 1px #EFEFEF", 
                    marginRight: 30, width: "2px"}}></div>
                    <p id="instrumentP" style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.instrument}</p>
                    <p id="genreP" style={{marginRight: 0, width: "20%", paddingTop: 6}}>{this.props.genre}</p>
                    <p style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.fromWhen}</p>
                    <p id="cityP" style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.city}</p>
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