import React from 'react';

export default class Block extends React.Component {
    render(){
        return(
            <div style={{marginLeft: 0}}>   
                <div className="block" style={{margin: "auto", display: "flex", marginTop: 5, backgroundColor: "#FFFFFF", 
                marginBottom: "-1px"}}>
                    <div style={{width: "8px", backgroundColor: "#5F77D9"}}></div>
                    <div style={{margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", width: "19%"}}>
                        <data style={{marginLeft: "25%", marginBottom: "0px", paddingTop: 15, fontSize: "14px"}}>
                          {this.props.dateOfPublished}</data>
                        <p style={{marginLeft: "25%", marginTop: "0px", fontSize: "16px"}}>
                          {this.props.forWho === "band" ? "Szukam zespołu" : "Szukam muzyka"}</p>
                    </div>
                    <div style={{backgroundColor: "#EFEFEF", borderLeft: "solid 1px #EFEFEF", borderRight: "solid 1px #EFEFEF", 
                    marginRight: 30, width: "1px"}}></div>
                    <p id="instrumentP" style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.instrument}</p>
                    <p id="genreP" style={{marginRight: 0, width: "20%", paddingTop: 6}}>{this.props.genre}</p>
                    <p style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.fromWhen}</p>
                    <p id="cityP" style={{marginRight: 20, width: "20%", paddingTop: 6}}>{this.props.city}</p>
                </div>
            </div>
        )
    }
  }