import './App.css';
import React from 'react';
import {TimelineLite, TimelineMax} from "gsap";
import "./App.css";
import logoStagePalls from './icons/stagepallslogo.svg';
import megaphone from './icons/Icon ionic-ios-megaphone.svg';
import tune from './icons/Icon ionic-ios-musical-notes.svg';
import lupe from './icons/Icon awesome-search.svg';
import plus from './icons/icon-content-add_24px.svg';
import bust from './icons/Icon material-person.svg';
import AddBlock from './makeAdForm';
import Table from './filtersAndAdsTable';
import menuIcon from "./icons/menuIcon.png";
import gsap from 'gsap/gsap-core';


const adsUrl = "https://stagepalls.herokuapp.com/ads";
const instrumentsUrl = "https://stagepalls.herokuapp.com/instruments";
const citiesUrl = "https://stagepalls.herokuapp.com/cities";
const genresUrl = "https://stagepalls.herokuapp.com/genres";
const usersUrl = "https://stagepalls.herokuapp.com/users";
const ctUrl = "https://stagepalls.herokuapp.com/genres"


class Menu extends React.Component{
  constructor(props) {
    super(props);
    this.refferToChildComponentDidMount = this.refferToChildComponentDidMount.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.showBlocks = this.showBlocks.bind(this);
  }
  componentDidMount(){
    // gsap.from(".resizeLinkBar", {display: 1, y: -60})

    const bub = document.querySelectorAll(".navLinkDiv");
      console.log(bub);
      for (let i=0; i<bub.length; i++) {
      const tl = new TimelineMax({delay:i*0.2});
      tl.from(bub[i], {duration: 0.3, x: +70 });
      }
  }
  refferToChildComponentDidMount(){
    this.props.referToTableDidMount()
  }
  showAddForm(){
    this.props.referToParentShowAddForm()
  }
  showBlocks(){
    this.props.reretToShowBlocksFromApp()
  }
  render(){
    return(
      <nav id="resizeLinkBar" className="resizeLinkBar">
        <div className="resize-megaphone navLinkDiv">
          <img className="resize-megaphone-icon" alt="megaphone-icon" src={megaphone} />
          <button id="allAdsBtn" className="resize-megaphone-link" onClick={this.refferToChildComponentDidMount}>Wszystkie ogłoszenia</button>
        </div>
        <div className="resize-lupe navLinkDiv">
              <img className="resize-lupe-icon" alt="lupe-icon" src={lupe} />
              <a onClick={this.showBlocks} style={{marginLeft: 7}} href="#travelToH1" className="resize-lupe-link">Szukaj ogłoszenia</a>
          </div>
        <div className="resize-plus navLinkDiv">
            <img className="resize-plus-icon" alt="plus-icon" src={plus} />
            <button id="DodajOgłoszenieBTN" className="resize-plus-link" onClick={this.showAddForm}>Dodaj ogloszenie</button>
        </div>
      </nav>
    )
  }
}


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        blocks: true,
        adForm: false,
        showMenu: false
      }
      this.child = React.createRef();
      this.showAddForm = this.showAddForm.bind(this);
      this.showBlocks = this.showBlocks.bind(this);
      this.refferToChildComponentDidMount = this.refferToChildComponentDidMount.bind(this);
      this.openMenu = this.openMenu.bind(this);
  }
  componentDidMount(){    
    const navLogoElem = document.querySelector('.nav__logo');
    navLogoElem.addEventListener('mouseover', shakeLogo);
    function shakeLogo(event) {
        const navLogo = event.target;
        const tl = new TimelineLite();
        tl.to(navLogo, 0.1, {x:"+=10", yoyo: true, repeat: 3});
    }

    const navResizeLogoElem = document.getElementById("logo")
    navResizeLogoElem.addEventListener('mouseover', shakeLogo);
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
  openMenu(){
    this.setState({
      showMenu: !this.state.showMenu
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
          {/* div czeka na dodanie userów */}
          {/* <div className="tune">
              <img className="tune-icon" alt="tune-icon" src={tune} /><button className="tune-link">Twoje ogłoszenia</button>
          </div> */}
          <div className="lupe">
              <img className="lupe-icon" alt="lupe-icon" src={lupe} /><a onClick={this.showBlocks} style={{marginLeft: 7}} href="#mainTable" className="lupe-link">Szukaj ogłoszenia</a>
          </div>
          <div className="plus">
              <img className="plus-icon" alt="plus-icon" src={plus} />
              <button id="DodajOgłoszenieBTN" className="plus-link" onClick={this.showAddForm}>Dodaj ogloszenie</button>
          </div>
          {/* div czeka na dodanie userów */}
          {/* <div className="bust">
              <img className="bust-icon" alt="bust-icon"  src={bust} /><button className="bust-link">Twój profil</button>
          </div> */}
        </nav>
        <div className="main">
        <div id="travel-top" style={{visibility: "hidden"}}/>

            {/* Div for resize */}
            <div id="resizeNav" className="resizeNav">
              <div className="resizeNavInnerDiv">
              <a id="logo" href="#travel-top"><img alt="logo" src={logoStagePalls} className="nav__logo"/></a>
              <img alt="menu_icon" src={menuIcon} onClick={this.openMenu} className="menuIcon" />
              </div>
              <div id="expandingMenuHolder">
                {this.state.showMenu ? <Menu referToTableDidMount={this.refferToChildComponentDidMount}
                 referToParentShowAddForm={this.showAddForm} reretToShowBlocksFromApp={this.showBlocks} /> : null}
              </div>
            </div>
            
            {/* div czeka na dodanie userów */}
            {/* <div id="travel-top" className="main__login">
                <p className="loged-as">Zalogowany jako: user</p>
                <button className="log-in-out">Wyloguj</button>
            </div> */}
            
            <div id="travelToH1" className="main__description">
                <h1 className="main__description__title">Znajdź muzyka lub zespół w szybki i łatwy sposób.</h1>
                <p className="main__description__sub-title">Skorzystaj z wyszukiwarki by znaleźć muzyka lub zespół 
                albo dodaj własne ogłoszenie.</p>
            </div>
            <div id="mainTable" className="main__table">
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
