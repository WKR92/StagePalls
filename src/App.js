import logo from './logo.svg';
import './App.css';
import React from 'react';
import gsap from "gsap";
import {TimelineLite} from "gsap";
import "./App.css";
import logoStagePalls from './icons/stagepallslogo.svg';
import megaphone from './icons/Icon ionic-ios-megaphone.svg';
import tune from './icons/Icon ionic-ios-musical-notes.svg';
import lupe from './icons/Icon awesome-search.svg';
import plus from './icons/icon-content-add_24px.svg';
import bust from './icons/Icon material-person.svg';
import localisationIcon from './icons/Icon material-location-on.svg'
import mailIcon from './icons/Icon material-mail.svg';
import notesIcon from './icons/Icon ionic-md-musical-notes.svg';
import phoneIcon from './icons/Icon awesome-phone.svg';
import guitarIcon from './icons/Icon awesome-guitar.svg';
import messageIcon from './icons//Trailing icon.svg';
import timeIcon from './icons/Icon awesome-clock.svg';
import purplePlusIcon from './icons//↳Color.svg';


const adsUrl = "https://stagepalls.herokuapp.com/ads";
const instrumentsUrl = "https://stagepalls.herokuapp.com/instruments";
const citiesUrl = "https://stagepalls.herokuapp.com/cities";
const genresUrl = "https://stagepalls.herokuapp.com/genres";
const usersUrl = "https://stagepalls.herokuapp.com/users";
const ctUrl = "https://stagepalls.herokuapp.com/genres"




class AddBlock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        radio: "",
        city: "",
        mail: "",
        genre: "",
        address: "",
        instrument: "",
        comment: "",
        sinceWhen: 'DD/MM/YYYY',
        musicFile: []
      };
      this.handleRadio = this.handleRadio.bind(this)
      this.handleChangeCity = this.handleChangeCity.bind(this)
      this.handleChangeMail = this.handleChangeMail.bind(this)
      this.handleChangeGenre = this.handleChangeGenre.bind(this)
      this.handleChangeAddress = this.handleChangeAddress.bind(this)
      this.handleChangeInstrument = this.handleChangeInstrument.bind(this)
      this.handleChangeComment = this.handleChangeComment.bind(this)
      this.handleChangeSinceWhen = this.handleChangeSinceWhen.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){

  }
  handleRadio(event) {
    this.setState({
      radio: event.target.value
    });
  }
  handleChangeCity(event) {
    this.setState({
      city: event.target.value
    });
  }
  handleChangeMail(event) {
    this.setState({
      mail: event.target.value
    });
  }
  handleChangeGenre(event) {
    this.setState({
      genre: event.target.value
    });
  }
  handleChangeAddress(event) {
    this.setState({
      address: event.target.value
    });
  }
  handleChangeInstrument(event) {
    this.setState({
      instrument: event.target.value
    });
  }
  handleChangeComment(event) {
    this.setState({
      comment: event.target.value
    });
  }
  handleChangeSinceWhen(event) {
    this.setState({
      sinceWhen: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();

    alert("Values to db: " + this.state.radio + " " + this.state.city + " " + this.state.mail + " " + this.state.genre + " " + this.state.address +
    " " + this.state.instrument + " " + this.state.comment + " " + this.state.sinceWhen)


    // force page to reload so main component can display updated package of blocks
    // window.location.reload(false)
  }
  render(){
      return(
          <form className="addBlockFormDiv" onSubmit={this.handleSubmit}>
              <div style={{marginLeft: 40, marginBottom: 20}}>
                  <input onChange = {this.handleRadio} value="band" type="radio" id="Szukam zespołu" name="lookingFor" />
                  <label htmlFor="Szukam zespołu">Szukam zespołu</label>
                  <input onChange = {this.handleRadio} value="musician" type="radio" id="Szukam muzyka" name="lookingFor" style={{marginLeft: 20}} />
                  <label htmlFor="Szukam muzyka">Szukam muzyka</label>
              </div>
              <div className="inputFields" style={{marginLeft: 40}}>
                  <div style={{display: "flex", marginBottom: 10}}>
                      <div>
                          <input required type="text" onChange = {this.handleChangeCity} className="addCity" placeholder="Miasto"
                          value={this.state.city} style={{textIndent: 20, width: 300, marginRight: 20, height: 46, textAlign: "stretch", 
                          outline: "none", border: "1px solid #0000001F", 
                          borderRadius: 4, backgroundImage: `url("${localisationIcon}")`, backgroundColor: "white", 
                          backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Miasto w którym chciałbyś grać</p>
                      </div>
                      <div>
                          <input required type="email" onChange = {this.handleChangeMail} className="addMail" placeholder="Adres email"
                          value={this.state.mail} style={{textIndent: 20,width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                          border: "1px solid #0000001F", 
                          borderRadius: 4, backgroundImage: `url("${mailIcon}")`, backgroundColor: "white", 
                          backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Wpisz adres kontaktowy</p>
                      </div>
                  </div>
                  <div style={{display: "flex", marginBottom: 10}}>
                      <div>
                          <input required type="text" onChange = {this.handleChangeGenre} className="addGenre" placeholder="Gatunek"
                          value={this.state.genre} style={{textIndent: 20, width: 300, marginRight: 20, height: 46, 
                          textAlign: "stretch", outline: "none", border: "1px solid #0000001F", 
                          borderRadius: 4, backgroundImage: `url("${notesIcon}")`, backgroundColor: "white", 
                          backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Gatunek lub kilka oddzielonych przecinkiem</p>
                      </div>
                      <div>
                          <input required type="text" onChange = {this.handleChangeAddress} className="addAddress"
                          placeholder="Adres kontaktowy" value={this.state.address} style={{textIndent: 20, 
                          width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                          border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${phoneIcon}")`, 
                          backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                          backgroundClip: "border-box"}}/>
                          <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Wpisz numer kontaktowy</p>
                      </div>
                  </div>
                  <div style={{display: "flex", marginBottom: 10}}>
                      <div>
                          <input required type="text" onChange = {this.handleChangeInstrument} className="addInstrument"
                          placeholder="Instrument" value={this.state.instrument} style={{textIndent: 20, 
                          width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                          border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${guitarIcon}")`, 
                          backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                          backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Instrument na którym grasz</p>
                      </div>
                      <div>
                          <input required type="text" onChange = {this.handleChangeComment} className="addComment"
                          placeholder="Komentarz" value={this.state.comment} style={{textIndent: 20, 
                          width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                          border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${messageIcon}")`, 
                          backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                          backgroundClip: "border-box"}}/>
                          <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Dodaj komentarz</p>
                      </div>
                  </div>
                  <div className="dateInputOuterDiv" style={{display: "flex", marginBottom: 20}}>
                      <div className="dateInputInnerDiv">
                          <input required className="dateInput" type="date" onChange = {this.handleChangeSinceWhen} min="2021-02-01" max="2021-12-31" 
                          value={this.state.sinceWhen} style={{textIndent: 10, width: 303, 
                          marginRight: 20, height: 46, outline: "none", border: "1px solid #0000001F", 
                          borderRadius: 4,  backgroundImage: `url("${timeIcon}")`, backgroundColor: "white", 
                          backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Od kiedy chciałbyś zacząć grać</p>
                      </div>
                  </div>
              </div>
              <div className="addMusic" style={{marginBottom: 40, marginLeft: 40}}>
                  <div style={{display: "flex"}}>
                      <p style={{color: "#6200EE", fontFamily: "Roboto", fontSize: 15, border: "none", paddingLeft: 2}}>
                        DODAJ UTWÓR PODGLĄDOWY</p>
                  </div>
                  <input type="file" id="musicInp" name="musicInp" accpet="" style={{paddingLeft: 2, marginRight: 10}} />
              </div>
              <div className="addAdv" style={{display: "inline-block", marginLeft: 40, backgroundColor: "#6200EE", 
              borderRadius: "4px", alignItems: "center"}}>
                  <input type="submit" htmlFor="musicInp" value="DODAJ OGŁOSZENIE" style={{fontFamily: "Roboto", 
                  fontSize: 18, color: "#FFFFFF", paddingLeft: 35, paddingRight: 15, height: 30, border: "none", 
                  backgroundColor: "#6200EE", borderRadius: 4, backgroundImage: `url("${purplePlusIcon}")`, 
                  backgroundPosition: "5% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}} />
              </div>
          </form>
      )
  }
}


class Block extends React.Component {
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


class Table extends React.Component {
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
    gsap.from(".table-disc", {duration: 1.5, x: +100 });
    gsap.from(".singleBlock", {duration: 1.5, x: +100 });
  }
  handleSubmit(event){
    event.preventDefault();
    const alowedLi = []


    document.getElementById("submitBtn").disabled = true;
    setTimeout(function(){
        document.getElementById("submitBtn").disabled = false;
      }, 1500)


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
    .then(gsap.from("li", {duration: 2, opacity: 0.5,  rotationX: 180}))
    .then(this.setState({ showFilteredBlocks: true, showBlock: false,}))

    
    
    //Animations
    // gsap.from(".singleBlock", {duration: 1.5, x: +100 });
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
                  <div id="blocksHolderContainer">
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


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        blocks: true,
        adForm: false
      }
      this.showAddForm = this.showAddForm.bind(this);
      this.showBlocks = this.showBlocks.bind(this);
  }
  componentDidMount(){
    gsap.from(".nav__logo", {duration: 1, y: -100});

    var navLogoElem = document.querySelector('.nav__logo');
    navLogoElem.addEventListener('mouseover', shakeLogo);
    function shakeLogo(event) {
        var navLogo = event.target;
        var tl = new TimelineLite();
        tl.to(navLogo, 0.1, {x:"+=10", yoyo: true, repeat: 3});
    }
  }
  showBlocks(){
    window.location.reload(false);
    if(this.state.blocks === true){
      return;
    }
    this.setState({
      blocks: !this.state.blocks,
      adForm: !this.state.adForm
    })
  }
  showAddForm(){
    if(this.state.adForm === true){
      return;
    }
    this.setState({
      blocks: !this.state.blocks,
      adForm: !this.state.adForm
    })
  }
  render(){
  return (
    <div className="App">
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>StagePalls</title>
      </div>
      <div className="body">
        <nav>
          <a href="#travel-top"><img alt="logo" src={logoStagePalls} className="nav__logo" /></a>
          <div className="megaphone">
            <img className="megaphone-icon" alt="megaphone-icon" src={megaphone} />
            <button className="megaphone-link" onClick={this.showBlocks}>Wszystkie ogłoszenia</button>
          </div>
          <div className="tune">
              <img className="tune-icon" alt="tune-icon" src={tune} /><button className="tune-link">Twoje ogłoszenia</button>
          </div>
          <div className="lupe">
              <img className="lupe-icon" alt="lupe-icon" src={lupe} /><button className="lupe-link">Szukaj ogłoszenia</button>
          </div>
          <div className="plus">
              <img className="plus-icon" alt="plus-icon" src={plus} />
              <button className="plus-link" onClick={this.showAddForm}>Dodaj ogloszenie</button>
          </div>
          <div className="bust">
              <img className="bust-icon" alt="bust-icon"  src={bust} /><button className="bust-link">Twój profil</button>
          </div>
        </nav>
        <div className="main">
            <div id="travel-top" className="main__login">
                <p className="loged-as">Zalogowany jako: user</p>
                <button className="log-in-out">Wyloguj</button>
            </div>
            <div className="main__description">
                <h1 className="main__description__title">Znajdź muzyka lub zespół w szybki i łatwy sposób.</h1>
                <p className="main__description__sub-title">Skorzystaj z wyszukiwarki by dodać myzuka lub zespół 
                albo dodaj własne ogłoszenie.</p>
            </div>
            <div className="main__table">
              {this.state.blocks ? <Table /> : null}
              {this.state.adForm ? <AddBlock /> : null}
            </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
