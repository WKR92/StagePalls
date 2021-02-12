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


class AddBlock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
  }
  render(){
      return(
          <form>
              <div style={{marginLeft: 40, marginBottom: 20}}>
                  <input type="radio" id="Szukam zespołu" value="band" name="lookingFor" />
                  <label htmlFor="Szukam zespołu">Szukam zespołu</label>
                  <input type="radio" id="Szukam muzyka" value="musician" name="lookingFor" style={{marginLeft: 20}} />
                  <label htmlFor="Szukam muzyka">Szukam muzyka</label>
              </div>
              <div style={{marginLeft: 40}}>
                  <div style={{display: "flex", marginBottom: 10}}>
                      <div>
                          <input type="text" className="addCity" placeholder="Miasto" style={{textIndent: 20, width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                           backgroundImage: `url("${localisationIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Miasto w którym chciałbyś grać</p>
                      </div>
                      <div>
                          <input type="text" className="addMail" placeholder="Adres email" style={{textIndent: 20,width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                          backgroundImage: `url("${mailIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Wpisz adres kontaktowy</p>
                      </div>
                  </div>
                  <div style={{display: "flex", marginBottom: 10}}>
                      <div>
                          <input type="text" className="addGenre" placeholder="Gatunek" style={{textIndent: 20, width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                          backgroundImage: `url("${notesIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Miasto w którym chciałbyś grać</p>
                      </div>
                      <div>
                          <input type="text" className="addAddress" placeholder="Adres kontaktowy" style={{textIndent: 20,width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                          backgroundImage: `url("${phoneIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Wpisz adres kontaktowy</p>
                      </div>
                  </div>
                  <div style={{display: "flex", marginBottom: 10}}>
                      <div>
                          <input type="text" className="addInstrument" placeholder="Instrument" style={{textIndent: 20, width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                          backgroundImage: `url("${guitarIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Miasto w którym chciałbyś grać</p>
                      </div>
                      <div>
                          <input type="text" className="addComment" placeholder="Komentarz" style={{textIndent: 20,width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                          backgroundImage: `url("${messageIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Wpisz adres kontaktowy</p>
                      </div>
                  </div>
                  <div style={{display: "flex", marginBottom: 20}}>
                      <div>
                          <input type="text" className="addDate" placeholder="Od kiedy" style={{textIndent: 20, width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", border: "1px solid #0000001F", borderRadius: 4,
                          backgroundImage: `url("${timeIcon}")`, backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                          <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Miasto w którym chciałbyś grać</p>
                      </div>
                  </div>
              </div>
              <div className="addMusic" style={{marginBottom: 40, marginLeft: 40}}>
                  <div style={{display: "flex"}}>
                      <p style={{color: "#6200EE", fontFamily: "Roboto", fontSize: 15, border: "none", paddingLeft: 2}}>DODAJ UTWÓR PODGLĄDOWY</p>
                  </div>
                  <input type="file" id="musicInp" name="musicInp" accpet="" style={{paddingLeft: 2, marginRight: 10}} />
              </div>
              <div className="addAdv" style={{display: "inline-block", marginLeft: 40, backgroundColor: "#6200EE", borderRadius: "4px", alignItems: "center"}}>
                  <input type="submit" htmlFor="musicInp" value="DODAJ OGŁOSZENIE" style={{fontFamily: "Roboto", fontSize: 18, color: "#FFFFFF", paddingLeft: 35, paddingRight: 15, height: 30, border: "none", backgroundColor: "#6200EE", borderRadius: 4,
                   backgroundImage: `url("${purplePlusIcon}")`, backgroundPosition: "5% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}} />
              </div>
          </form>
      )
  }
}


class Block extends React.Component {
  constructor(props) {
      super(props);
      
  }
  render(){
      return(
          <div style={{marginLeft: 20}}>   
              <div className="block" style={{margin: "auto", display: "flex", marginTop: 5, backgroundColor: "#FFFFFF", marginBottom: "-1px"}}>
                  <div style={{width: "8px", backgroundColor: "#5F77D9"}}></div>
                  <div style={{margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", width: "19%"}}>
                      <data style={{marginLeft: "25%", marginBottom: "0px", paddingTop: 15, fontSize: "14px"}}>﻿9.12.2019</data>
                      <p style={{marginLeft: "25%", marginTop: "0px", fontSize: "16px"}}>﻿szukam zespołu</p>
                  </div>
                  <div style={{backgroundColor: "#EFEFEF", borderLeft: "solid 1px #EFEFEF", borderRight: "solid 1px #EFEFEF", marginRight: 30, width: "1px"}}></div>
                  <p style={{marginRight: 20, width: "20%", paddingTop: 6}}>Keybord</p>
                  <p style={{marginRight: 0, width: "20%", paddingTop: 6}}>POP</p>
                  <p style={{marginRight: 20, width: "20%", paddingTop: 6}}>12.10.2021</p>
                  <p style={{marginRight: 20, width: "20%", paddingTop: 6}}>Kraków</p>
              </div>
          </div>
      )
  }
}


class Table extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showBlock: true
      };
  }
  componentDidMount(){
    gsap.from(".table-disc", {duration: 1.5, x: +100 });
    gsap.from(".block", {duration: 1.5, x: +100 });
  }
  render(){
      return(
          <div className="blocksHolder">
              <form className="table-form" style={{display: "flex", paddingLeft: 20}}>
                  <input type="text" className="filter-instrument" placeholder="Instrument" style={{width: 120, marginRight: 20, height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                  <input type="text" className="filter-Gatunek" placeholder="Gatunek" style={{width: 120, marginRight: 20, height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                  <input type="text" className="filter-Miasto" placeholder="Miasto" style={{width: 120, marginRight: 20, height: 46, textAlign: "center", borderRadius: "10px", outline: "none"}}/>
                  <input className="submitBtn" type="submit" value="Zatwierdź" style={{color: "#FFFFFFDE", width: "120px", borderRadius: "10px", outline: "none"}}/>
              </form>
              <div>
                  <div className="table-disc" style={{margin: "auto", marginLeft: 20, display: "flex", paddingTop: 20, justifyContent: "space-evenly"}}>
                      <p style={{marginRight: 20, visibility: "hidden", width: "20%"}}>Puste</p>
                      <p style={{marginRight: 20, width: "20%"}}>Instrument</p>
                      <p style={{marginRight: 20, width: "20%"}}>Gatunek</p>
                      <p style={{marginRight: 20, width: "20%"}}>Od kiedy</p>
                      <p style={{marginRight: 20, width: "20%"}}>Miasto</p>
                  </div>
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
                  {this.state.showBlock ? <Block /> : null}
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
    console.log(this.state.blocks);
    console.log(this.state.adForm);

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
            <img className="megaphone-icon" alt="megaphone-icon" src={megaphone} /><button className="megaphone-link" onClick={this.showBlocks}>Wszytskie ogłoszenia</button>
          </div>
          <div className="tune">
              <img className="tune-icon" alt="tune-icon" src={tune} /><button className="tune-link">Twoje ogłoszenia</button>
          </div>
          <div className="lupe">
              <img className="lupe-icon" alt="lupe-icon" src={lupe} /><button className="lupe-link">Szukaj ogłoszenia</button>
          </div>
          <div className="plus">
              <img className="plus-icon" alt="plus-icon" src={plus} /><button className="plus-link" onClick={this.showAddForm}>Dodaj ogloszenie</button>
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
                <p className="main__description__sub-title">Skorzystaj z wyszukiwarki by dodać myzuka lub zespół albo dodaj własne ogłoszenie.</p>
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
