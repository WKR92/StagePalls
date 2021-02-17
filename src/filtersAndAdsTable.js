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
            filteredAds: [],
            apiInstruments: [],
            apiGenres: [],
            apiCities: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeInstrument = this.handleChangeInstrument.bind(this)
        this.handleChangeGenre = this.handleChangeGenre.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
    }
    disableBtns(){
      document.getElementById("submitBtn").disabled = true;
      document.getElementById("allAdsBtn").disabled = true;
      document.getElementById("DodajOgłoszenieBTN").disabled = true;
      setTimeout(function(){
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("DodajOgłoszenieBTN").disabled = false;
        document.getElementById("allAdsBtn").disabled = false;
      }, 1700)
    };
    componentDidMount(){

      this.disableBtns()
      
      
      fetch("https://stagepalls.herokuapp.com/ads")
      .then((response) => response.json())
      .then( (data, lista) => lista = data.map(elem => [elem.id, elem.city.city, elem.LookFor, elem.sinceWhen, elem.genres[0].genre,
            elem.published_at.slice(0,10), elem.instruments[0].name, elem.description, elem.email, elem.telephone])
      )
      .then((data) => 
        this.setState({
          adsLiList: data.reverse().map((elem) => <li id="blockLi" key={elem[0]}  instrumentvalue={elem[6]} genrevalue={elem[4]} cityvalue={elem[1]}>
          <Block forWho={elem[2]} dateOfPublished={elem[5]} instrument={elem[6]} genre={elem[4]} fromWhen={elem[3]} city={elem[1]}
           blockID={elem[0]} comment={elem[7]} mail={elem[8]} phoneNumber={elem[9]} displayValue="block" opacityValue={1}/>
          </li>)
        })
      )
      .then(this.setState({
        filteredAds: this.state.adsLiList
      }))


      //Get Cities Data
      fetch("https://stagepalls.herokuapp.com/cities")
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => this.setState({
        apiCities: data.map(elem => [elem.id, elem.city])
      }))

      //Get Genres Data
      fetch("https://stagepalls.herokuapp.com/genres")
      .then(response => response.json())
      // .then(data => data.map(elem => console.log(elem.genre)))
      .then(data => this.setState({
        apiGenres: data.map(elem => [elem.id, elem.genre]),
      }))

      //Get Instruments Data
      fetch("https://stagepalls.herokuapp.com/instruments")
      .then(response => response.json())
      .then(data => this.setState({
        apiInstruments: data.map(elem => [elem.id, elem.name]),
      }))
          
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

      // Disable if there is nothing to search for
      if(this.state.cityInput === "" && this.state.instrumentInput === "" && this.state.genreInput === ""){
        return;
      }

      new Audio(clickSound).play();
      const alowedLi = []
      const nothingFound = <div style={{height: 150, backgroundColor: "#FFFFFF", display: "flex", textAlign:"center"}}>
                              <p style={{margin: "auto"}}>Nie znaleziono żadnych wyników dla podanych wartości</p>
                           </div>
  
      
      this.disableBtns()
  
  
      fetch("https://stagepalls.herokuapp.com/ads")
      .then((response) => response.json())
      .then( (data, listOfElem) => listOfElem = data.map(elem => [elem.id, elem.city.city, elem.LookFor, elem.sinceWhen, elem.genres[0].genre,
        elem.published_at.slice(0,10), elem.instruments[0].name, elem.description, elem.email, elem.telephone])
      )
      .then((data) => 
        this.setState({
          filteredAds: data.map((elem) => <li id="blockLi" key={elem[0]} instrumentvalue={elem[6]} genrevalue={elem[4]} cityvalue={elem[1]}>
          <Block forWho={elem[2]} dateOfPublished={elem[5]} instrument={elem[6]} genre={elem[4]} fromWhen={elem[3]} city={elem[1]}
           blockID={elem[0]} comment={elem[7]} mail={elem[8]} phoneNumber={elem[9]} displayValue="block" opacityValue={1} />
          </li>)
        })
      )
      .then((filtersList) => filtersList = this.state.filteredAds.reverse().map( elem => 
            (elem.props.instrumentvalue.toLowerCase() === this.state.instrumentInput || this.state.instrumentInput === "") &&
            (elem.props.genrevalue.toLowerCase() === this.state.genreInput || this.state.genreInput === "") &&
            (elem.props.cityvalue.toLowerCase() === this.state.cityInput || this.state.cityInput === "")
            ? alowedLi.push(elem) : null))
      .then(data => this.setState({
        filteredAds: alowedLi.length < 1 ? nothingFound : alowedLi
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
      const nothingFound = <div style={{height: 150, marginLeft: 20, backgroundColor: "#FFFFFF", display: "flex", 
                            marginTop: 20, textAlign:"center"}}>
                              <p style={{margin: "auto"}}>Baza ogłoszeń jest pusta</p>
                           </div>
        return(
          
            <div className="blocksHolder">
                <form onSubmit={this.handleSubmit} className="table-form" style={{display: "flex", paddingLeft: 20}}>
                    <input list="instrumenty" id="instrumentInp" value={this.state.instrumentInput} type="text" onChange = {this.handleChangeInstrument} 
                      className="filter-instrument" placeholder="Instrument" style={{width: 120, marginRight: 20, 
                      height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                      <datalist id="instrumenty">
                        {this.state.apiInstruments.map(elem => {
                            return (
                              <option value={elem[1]}></option>
                            )
                          })}
                      </datalist>
                    <input list="gatunki" id="genreInp" value={this.state.genreInput} type="text" onChange = {this.handleChangeGenre} 
                      className="filter-Gatunek" placeholder="Gatunek" style={{width: 120, marginRight: 20, 
                      height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                      <datalist id="gatunki">
                        {this.state.apiGenres.map(elem => {
                            return (
                              <option value={elem[1]}></option>
                            )
                          })}
                      </datalist>
                    <input list="miasta" id="cityInp" value={this.state.cityInput} type="text" onChange = {this.handleChangeCity} 
                    className="filter-Miasto" placeholder="Miasto" style={{width: 120, marginRight: 20, 
                      height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                      <datalist id="miasta">
                        {this.state.apiCities.map(elem => {
                          return (
                            <option style={{}} value={elem[1]}>{elem[1]}</option>
                          )
                        })}
                      </datalist>
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
                    <div className="blocksHolderContainer" style={{marginBottom: 200}}>
                    {this.state.adsLiList.length < 1 ? nothingFound : null}
                    {this.state.showBlock ? <ul id="blocksList" className="singleBlock" style={{listStyleType: "none", marginLeft: "-20px"}}>
                      {this.state.adsLiList}</ul> : this.state.showFilteredBlocks}
                    {this.state.showFilteredBlocks ? <ul id="blocksList" className="singleBlock" style={{listStyleType: "none", marginLeft: "-20px"}}>
                      {this.state.filteredAds}</ul> : null}
                    </div>
                </div>
            </div>
        );
    }
  }