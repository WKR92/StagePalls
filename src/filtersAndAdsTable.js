import React from 'react';
import Block from './blockComponent'
import gsap from "gsap";
import clickSound from './icons/Tiny Button Push-SoundBible.com-513260752.mp3'


export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBlock: true,
            showFilteredBlocks: false,
            instrumentInput: "",
            genreInput: "",
            cityInput: "",
            adsLiList: [],
            filteredAds: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeInstrument = this.handleChangeInstrument.bind(this)
        this.handleChangeGenre = this.handleChangeGenre.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
    }
    componentDidMount(){
      fetch("https://stagepalls.herokuapp.com/ads")
      .then((response) => response.json())
      .then( (data, lista) => lista = data.map(elem => [elem.city.city, elem.LookFor, elem.sinceWhen, elem.genres[0].genre,
            elem.published_at.slice(0,10), elem.instruments[0].name])
      )
      .then((data) => 
        this.setState({
          adsLiList: data.map((elem) => <li id="blockLi" key={elem["id"]} instrumentvalue={elem[5]} genrevalue={elem[3]} cityvalue={elem[0]}>
          <Block forWho={elem[1]} dateOfPublished={elem[4]} instrument={elem[5]} genre={elem[3]} fromWhen={elem[2]} city={elem[0]} />
          </li>)
        })
      )
          
      //Animations
      gsap.from(".blocksHolderContainer", {duration: 1.5, x: +100, opacity: 0.5 })
      
    }
    // componentWillUpdate(){
    //   const bub = document.querySelectorAll("li");
    //   console.log(bub);
    //   for (let i=0; i<bub.length; i++) {
    //   const tl = new TimelineMax({delay:i*0.2});
    //   tl.from(bub[i], {duration: 0.3, x: +150 });
    //   }
    // }
    handleSubmit(event){
      event.preventDefault();
      new Audio(clickSound).play();
      const alowedLi = []
  
  
      document.getElementById("submitBtn").disabled = true;
      setTimeout(function(){
          document.getElementById("submitBtn").disabled = false;
        }, 1700)
  
  
      fetch("https://stagepalls.herokuapp.com/ads")
      .then((response) => response.json())
      .then( (data, listOfElem) => listOfElem = data.map(elem => [elem.city.city, elem.LookFor, elem.sinceWhen, elem.genres[0].genre,
            elem.published_at.slice(0,10), elem.instruments[0].name])
      )
      .then((data) => 
        this.setState({
          filteredAds: data.map((elem) => <li id="blockLi" key={elem["id"]} instrumentvalue={elem[5]} genrevalue={elem[3]} cityvalue={elem[0]}>
          <Block forWho={elem[1]} dateOfPublished={elem[4]} instrument={elem[5]} genre={elem[3]} fromWhen={elem[2]} city={elem[0]} />
          </li>)
        })
      )
      .then((filtersList) => filtersList = this.state.filteredAds.map( elem => 
            (elem.props.instrumentvalue.toLowerCase() === this.state.instrumentInput || this.state.instrumentInput === "") &&
            (elem.props.genrevalue.toLowerCase() === this.state.genreInput || this.state.genreInput === "") &&
            (elem.props.cityvalue.toLowerCase() === this.state.cityInput || this.state.cityInput === "")
            ? alowedLi.push(elem) : null))
      .then(data => this.setState({
        filteredAds: alowedLi
      }))
      .then(this.setState({ showFilteredBlocks: true, showBlock: false,}))
      .then(gsap.from(".blocksHolderContainer", {duration: 1.5, x: +100, opacity: 0.5}))
    }
    handleChangeInstrument(event) {
      this.setState({
        instrumentInput: event.target.value.toLowerCase()
      });
    }
    handleChangeGenre(event) {
      this.setState({
        genreInput: event.target.value.toLowerCase()
      });
    }
    handleChangeCity(event) {
      this.setState({
        cityInput: event.target.value.toLowerCase()
      });
    }
    render(){
        return(
            <div className="blocksHolder">
                <form onSubmit={this.handleSubmit} className="table-form" style={{display: "flex", paddingLeft: 20}}>
                    <input id="instrumentInp" value={this.state.instrumentInput} type="text" onChange = {this.handleChangeInstrument} 
                      className="filter-instrument" placeholder="Instrument" style={{width: 120, marginRight: 20, 
                      height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                    <input id="genreInp" value={this.state.genreInput} type="text" onChange = {this.handleChangeGenre} 
                      className="filter-Gatunek" placeholder="Gatunek" style={{width: 120, marginRight: 20, 
                      height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                    <input id="cityInp" value={this.state.cityInput} type="text" onChange = {this.handleChangeCity} 
                    className="filter-Miasto" placeholder="Miasto" style={{width: 120, marginRight: 20, 
                      height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                    <input id="submitBtn" className="submitBtn" type="submit" value="Zatwierdź" style={{color: "#FFFFFFDE", width: "120px", 
                      borderRadius: "10px", outline: "none"}}/>
                </form>
                <div>
                    <div className="table-disc" style={{margin: "auto", marginLeft: 20, display: "flex", paddingTop: 20, 
                    justifyContent: "space-evenly"}}>
                        <p style={{marginRight: 20, visibility: "hidden", width: "20%"}}>Puste</p>
                        <p style={{marginRight: 20, width: "20%"}}>Instrument</p>
                        <p style={{marginRight: 20, width: "20%"}}>Gatunek</p>
                        <p style={{marginRight: 20, width: "20%"}}>Od kiedy</p>
                        <p style={{marginRight: 20, width: "20%"}}>Miasto</p>
                    </div>
                    <div className="blocksHolderContainer">
                    {this.state.showBlock ? <ul id="blocksList" className="singleBlock" style={{listStyleType: "none", marginLeft: "-20px"}}>
                      {this.state.adsLiList}</ul> : null}
                    {this.state.showFilteredBlocks ? <ul id="blocksList" className="singleBlock" style={{listStyleType: "none", marginLeft: "-20px"}}>
                      {this.state.filteredAds}</ul> : null}
                    </div>
                </div>
            </div>
        );
    }
  }