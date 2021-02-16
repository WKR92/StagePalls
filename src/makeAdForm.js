import React from 'react'
// import Select from 'react-select'
import localisationIcon from './icons/Icon material-location-on.svg'
import mailIcon from './icons/Icon material-mail.svg';
import notesIcon from './icons/Icon ionic-md-musical-notes.svg';
import phoneIcon from './icons/Icon awesome-phone.svg';
import guitarIcon from './icons/Icon awesome-guitar.svg';
import messageIcon from './icons//Trailing icon.svg';
import timeIcon from './icons/Icon awesome-clock.svg';
import purplePlusIcon from './icons//↳Color.svg';
import clickSound from './icons/Tiny Button Push-SoundBible.com-513260752.mp3'
import axios from 'axios';
import $ from 'jquery'; 
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');


export default  class AddBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          radio: "",
          city: "",
          mail: "",
          genre: "",
          phoneNumber: "",
          instrument: "",
          comment: "",
          sinceWhen: 'DD/MM/YYYY',
          musicFile: [],
          apiCities: [],
          apiInstruments: [],
          apiGenres: [],
          apiPersonalData: [],
        };
        this.handleRadio = this.handleRadio.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
        this.handleChangeMail = this.handleChangeMail.bind(this)
        this.handleChangeGenre = this.handleChangeGenre.bind(this)
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this)
        this.handleChangeInstrument = this.handleChangeInstrument.bind(this)
        this.handleChangeComment = this.handleChangeComment.bind(this)
        this.handleChangeSinceWhen = this.handleChangeSinceWhen.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
      
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

      //Get Personal Data
      //This will be working trought autentication process
    }
    handleRadio(event) {
      this.setState({
        radio: event.target.value
      });

      const ChosenCity = this.state.apiCities.includes(event.target.value);
      console.log(ChosenCity)

      if(ChosenCity === false){
        const addCity = document.querySelector(".addCity");
        addCity.style["border"] = "solid 1px red";
      }
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
    handleChangePhoneNumber(event) {
      this.setState({
        phoneNumber: event.target.value
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
      new Audio(clickSound).play();

      const cityTofind = this.state.city;
      function findCity(elem){
        return elem.includes(cityTofind)
      }
      const ChosenCity = this.state.apiCities.filter(findCity);

      if(ChosenCity.length < 1){
        const addCity = document.querySelector(".addCity");
        addCity.style["border"] = "solid 1px red";
        alert("Możesz wybrać miasto tylko spośród tych dostępnych w formularzu");
        return;
      }


      const instrumentTofind = this.state.instrument;
      function findInstrument(elem){
        return elem.includes(instrumentTofind)
      }
      const ChosenInstrument = this.state.apiInstruments.filter(findInstrument);


      const genreTofind = this.state.genre;
      function findGenre(elem){
        return elem.includes(genreTofind)
      }
      const ChosenGenre = this.state.apiGenres.filter(findGenre);
      

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
         }
    if(
      axios
        .post('https://stagepalls.herokuapp.com/ads', {
          "city": { id: ChosenCity[0][0]},
          LookFor: this.state.radio,
          sinceWhen: this.state.sinceWhen,
          "genres": [{id: ChosenGenre[0][0]}],
          "users_permissions_user": {id: 1}, //email
          "instruments": [{id: ChosenInstrument[0][0]}],
          description: this.state.comment,
        }, {headers: headers})
        .then(res => {
          console.log(`statusCode: ${res.statusCode}`)
          console.log(res)
        })
        .catch(error => {
          console.error(error)
      })){alert("Twoje muzyczne ogloszenie zostało dodane pomyślnie");
          window.location.reload(false)
          }else{alert("Coś poszło nie tak, spróbuj jeszcze raz")}
          
      // window.location.reload(false)
    }
    render(){
        return(
            <form className="addBlockFormDiv" id="addBlockFormDiv" onSubmit={this.handleSubmit}>
                <div style={{marginLeft: 40, marginBottom: 20}}>
                    <input required onChange = {this.handleRadio} value="band" type="radio" id="Szukam zespołu" name="lookingFor" />
                    <label htmlFor="Szukam zespołu">Szukam zespołu</label>
                    <input required onChange = {this.handleRadio} value="musician" type="radio" id="Szukam muzyka" name="lookingFor" style={{marginLeft: 20}} />
                    <label htmlFor="Szukam muzyka">Szukam muzyka</label>
                </div>
                <div className="inputFields" style={{marginLeft: 40}}>
                    <div style={{display: "flex", marginBottom: 10}}>
                        <div>
                            <select  required onChange = {this.handleChangeCity} className="addCity selectpicker" placeholder="Miasto"
                            value={this.state.city} list="miastaDoWyboru" style={{textIndent: 20, width: 305, marginRight: 20, height: 46, textAlign: "stretch", 
                            outline: "none", border: "1px solid #0000001F", 
                            borderRadius: 4, backgroundImage: `url("${localisationIcon}")`, backgroundColor: "white", 
                            backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}>
                            {/* <select id="miastaDoWyboru"> */}
                            {this.state.apiCities.map(elem => {
                                return (
                                  <option style={{}} value={elem[1]}>{elem[1]}</option>
                                )
                              })}
                            </select >
                            {/* <input type="text" onChange = {this.handleChangeCity} className="addCity" placeholder="Miasto"
                            value={this.state.city} style={{textIndent: 20, width: 300, marginRight: 20, height: 46, textAlign: "stretch", 
                            outline: "none", border: "1px solid #0000001F", 
                            borderRadius: 4, backgroundImage: `url("${localisationIcon}")`, backgroundColor: "white", 
                            backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/> */}
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
                            <input type="text" required onChange = {this.handleChangeGenre} list="gatunkiDoWyboru" className="addGenre" placeholder="Gatunek"
                            value={this.state.genre} style={{textIndent: 20, width: 300, marginRight: 20, height: 46, 
                            textAlign: "stretch", outline: "none", border: "1px solid #0000001F", 
                            borderRadius: 4, backgroundImage: `url("${notesIcon}")`, backgroundColor: "white", 
                            backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                            <datalist id="gatunkiDoWyboru">
                              {this.state.apiGenres.map(elem => {
                                  return (
                                    <option value={elem[1]}></option>
                                  )
                                })}
                            </datalist>
                            {/* <input type="text" onChange = {this.handleChangeGenre} className="addGenre" placeholder="Gatunek"
                            value={this.state.genre} style={{textIndent: 20, width: 300, marginRight: 20, height: 46, 
                            textAlign: "stretch", outline: "none", border: "1px solid #0000001F", 
                            borderRadius: 4, backgroundImage: `url("${notesIcon}")`, backgroundColor: "white", 
                            backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/> */}
                            <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Gatunek lub kilka oddzielonych przecinkiem</p>
                        </div>
                        <div>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" onChange = {this.handleChangePhoneNumber} className="addphoneNumber"
                            placeholder="000-000-000 (opcjonalnie)" value={this.state.phoneNumber} style={{textIndent: 20, 
                            width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                            border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${phoneIcon}")`, 
                            backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                            backgroundClip: "border-box"}}/>
                            <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Wpisz numer kontaktowy (format: 123-456-789)</p>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10}}>
                        <div>
                            <input type="text" required list="instrumentDoWyboru" onChange = {this.handleChangeInstrument} className="addInstrument"
                            placeholder="Instrument" value={this.state.instrument} style={{textIndent: 20, 
                            width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                            border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${guitarIcon}")`, 
                            backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                            backgroundClip: "border-box"}}/>
                            <datalist id="instrumentDoWyboru">
                              {this.state.apiInstruments.map(elem => {
                                  return (
                                    <option value={elem[1]}></option>
                                  )
                                })}
                            </datalist>
                            {/* <input type="text" onChange = {this.handleChangeInstrument} className="addInstrument"
                            placeholder="Instrument" value={this.state.instrument} style={{textIndent: 20, 
                            width: 300, marginRight: 20, height: 46, textAlign: "stretch", outline: "none", 
                            border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${guitarIcon}")`, 
                            backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                            backgroundClip: "border-box"}}/> */}
                            <p className="addCityP" style={{marginLeft: 10, fontSize: 12}}>Instrument na którym grasz</p>
                        </div>
                        <div>
                            <input required className="dateInput" type="date" onChange = {this.handleChangeSinceWhen} min="2021-02-01" max="2021-12-31" 
                            value={this.state.sinceWhen} style={{textIndent: 10, width: 303,
                            marginRight: 20, height: 46, outline: "none", border: "1px solid #0000001F", 
                            borderRadius: 4,  backgroundImage: `url("${timeIcon}")`, backgroundColor: "white", 
                            backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", backgroundClip: "border-box"}}/>
                            <p className="addCityP" style={{marginLeft: 10, fontSize: 12, marginBottom: 20}}>Od kiedy chciałbyś zacząć grać</p>
                        </div>
                    </div>
                    <div className="dateInputOuterDiv" style={{display: "flex", marginBottom: 20}}>
                        <div className="dateInputInnerDiv">
                            <textarea form="addBlockFormDiv" required onChange = {this.handleChangeComment} className="addComment"
                            placeholder="Napisz coś o sobie albo sowim zespole" value={this.state.comment}
                            style={{textIndent: 20, width: 627, marginRight: 20, height: 86, textAlign: "stretch", outline: "none", 
                            border: "1px solid #0000001F", borderRadius: 4, backgroundImage: `url("${messageIcon}")`, 
                            backgroundColor: "white", backgroundPosition: "95% 45%", backgroundRepeat: "no-repeat", 
                            backgroundClip: "border-box"}}/>
                            <p className="addMailP" style={{marginLeft: 10, fontSize: 12}}>Dodaj komentarz</p>
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