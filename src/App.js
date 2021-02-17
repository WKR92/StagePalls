import './App.css';
import React from 'react';
import {TimelineLite} from "gsap";
import "./App.css";
import logoStagePalls from './icons/stagepallslogo.svg';
import megaphone from './icons/Icon ionic-ios-megaphone.svg';
import tune from './icons/Icon ionic-ios-musical-notes.svg';
import lupe from './icons/Icon awesome-search.svg';
import plus from './icons/icon-content-add_24px.svg';
import bust from './icons/Icon material-person.svg';
import AddBlock from './makeAdForm'
import Table from './filtersAndAdsTable'
import { event } from 'jquery';


const adsUrl = "https://stagepalls.herokuapp.com/ads";
const instrumentsUrl = "https://stagepalls.herokuapp.com/instruments";
const citiesUrl = "https://stagepalls.herokuapp.com/cities";
const genresUrl = "https://stagepalls.herokuapp.com/genres";
const usersUrl = "https://stagepalls.herokuapp.com/users";
const ctUrl = "https://stagepalls.herokuapp.com/genres"


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        blocks: true,
        adForm: false
      }
      this.child = React.createRef();
      this.showAddForm = this.showAddForm.bind(this);
      this.showBlocks = this.showBlocks.bind(this);
      this.refferToChildComponentDidMount = this.refferToChildComponentDidMount.bind(this);
  }
  componentDidMount(){    
    var navLogoElem = document.querySelector('.nav__logo');
    navLogoElem.addEventListener('mouseover', shakeLogo);
    function shakeLogo(event) {
        var navLogo = event.target;
        var tl = new TimelineLite();
        tl.to(navLogo, 0.1, {x:"+=10", yoyo: true, repeat: 3});
    }
  }
  showBlocks(){
    if(this.state.blocks === false){
      this.setState({
        blocks: !this.state.blocks,
        adForm: !this.state.adForm
      })
    }    
  }
  refferToChildComponentDidMount(){
    this.showBlocks()
    if(this.state.blocks === true){
      this.child.current.componentDidMount();
    }
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
            <button id="allAdsBtn" className="megaphone-link" onClick={this.refferToChildComponentDidMount}>Wszystkie ogłoszenia</button>
          </div>
          <div className="tune">
              <img className="tune-icon" alt="tune-icon" src={tune} /><button className="tune-link">Twoje ogłoszenia</button>
          </div>
          <div className="lupe">
              <img className="lupe-icon" alt="lupe-icon" src={lupe} /><a onClick={this.showBlocks} style={{marginLeft: 7}} href="#travelToMainTable" className="lupe-link">Szukaj ogłoszenia</a>
          </div>
          <div className="plus">
              <img className="plus-icon" alt="plus-icon" src={plus} />
              <button id="DodajOgłoszenieBTN" className="plus-link" onClick={this.showAddForm}>Dodaj ogloszenie</button>
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
            <div className="main__table" id="travelToMainTable">
              {this.state.blocks ? <Table ref={this.child} /> : null}
              {this.state.adForm ? <AddBlock /> : null}
            </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
