import React from 'react';
import localisationIcon from './icons/Icon material-location-on.svg'
import mailIcon from './icons/Icon material-mail.svg';
import notesIcon from './icons/Icon ionic-md-musical-notes.svg';
import phoneIcon from './icons/Icon awesome-phone.svg';
import guitarIcon from './icons/Icon awesome-guitar.svg';
import messageIcon from './icons//Trailing icon.svg';
import timeIcon from './icons/Icon awesome-clock.svg';
import purplePlusIcon from './icons//↳Color.svg';
import clickSound from './icons/Tiny Button Push-SoundBible.com-513260752.mp3'

export default  class AddBlock extends React.Component {
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
      new Audio(clickSound).play();
  
      alert("Values to db: " + this.state.radio + " " + this.state.city + " " + this.state.mail + " " + this.state.genre + " " + this.state.address +
      " " + this.state.instrument + " " + this.state.comment + " " + this.state.sinceWhen)
  
  
      // force page to reload so main component can display updated package of blocks
      // window.location.reload(false)
    }
    render(){
        return(
            <form className="addBlockFormDiv" onSubmit={this.handleSubmit}>
                <div style={{marginLeft: 40, marginBottom: 20}}>
                    <input required onChange = {this.handleRadio} value="band" type="radio" id="Szukam zespołu" name="lookingFor" />
                    <label htmlFor="Szukam zespołu">Szukam zespołu</label>
                    <input required onChange = {this.handleRadio} value="musician" type="radio" id="Szukam muzyka" name="lookingFor" style={{marginLeft: 20}} />
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