import React from 'react';
import logo from './logo.svg';
import './App.css';

const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexDni = /^((?!(0))[0-9]{8})$/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      dni: '',
      email: '',
      firstnameError: false,
      lastnameError: false,
      dniError: false,
      emailError: false,
      emptyFirstname: true,
      emptyLastname: true,
      emptyDni: true,
      emptyEmail: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;


    switch (target.name) {
      case "firstname":
        this.setState({ firstname: value });
        if(value){
          this.setState({emptyFirstname: false})
        }else{
          this.setState({emptyFirstname: true})
        }
        if (!regexName.test(value)) {
          this.setState({ firstnameError: true });
        } else {
          this.setState({ firstnameError: false });
        }
        break;
      case "lastname":
        this.setState({ lastname: value });
        if(value){
          this.setState({emptyLastname: false})
        }else{
          this.setState({emptyLastname: true})
        }
        if (!regexName.test(value)) {
          this.setState({ lastnameError: true });
        } else {
          this.setState({ lastnameError: false });
        }
        break;
      case "dni":
        if (value.length > 8) {
          const valor = value.substr(0, 8);
          this.setState({ dni: valor });
         
          //alert(valor);

        } else {  
          this.setState({ dni: value });
          if(value){
            this.setState({emptyDni: false})
          }else{
            this.setState({emptyDni: true})
          }
          if (!regexDni.test(value)) {
            this.setState({ dniError: true });
          } else {
            this.setState({ dniError: false });
          }

        }
        break;
      case "email":
        this.setState({ email: value });
        if(value){
          this.setState({emptyEmail: false})
        }else{
          this.setState({emptyEmail: true})
        }
        if (!regexEmail.test(value)) {
          this.setState({ emailError: true });
        } else {
          this.setState({ emailError: false });
        }
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;



    }
    
    
    


  }

  handleSubmit(event) {
   

    
    if (this.state.firstnameError || this.state.lastnameError|| this.state.dniError|| this.state.emailError) {
      alert('Please check, some data is not valid!');
      event.preventDefault();

    }else if (this.state.emptyFirstname||this.state.emptyLastname||this.state.emptyDni||this.state.emptyEmail){
      alert('Please complete all fields');
      event.preventDefault();
    }else{
      alert('Firstname: '+ this.state.firstname+ ', Lastname: '+this.state.lastname +', DNI: '+ this.state.dni+', Email: '+ this.state.email)
    }
  }

  render() {
    return (
      <div className="container">
        <form 
          onSubmit={this.handleSubmit}
          noValidate
        >
          <div className="row">
          <div className="col-25">
            <label>
              Firstname:
  
          </label>
          <p className =  {"validation-text " +(this.state.firstnameError === true ? "show" : "not-show")}>Please enter a valid first name</p>
          </div>
          <div className="col-75">
            <input
              name="firstname"
              className={(this.state.firstnameError === true ? "invalid" : "valid")}
              type="text"
              value={this.state.firstname}
              placeholder="Darth"
              onChange={this.handleInputChange} />
          </div>
          </div>
          <div className="row">
          <div className="col-25">
          <label>
            Lastname:
          
          </label>
          <p className =  {"validation-text " +(this.state.lastnameError === true ? "show" : "not-show")}>Please enter a valid last name</p>
          </div>
          <div className="col-75">
          <input
              name="lastname"
              className={(this.state.lastnameError === true ? "invalid" : "valid")}
              type="text"
              value={this.state.lastname}
              placeholder="Vader"
              onChange={this.handleInputChange} />

          </div>
          </div>
          <div className="row">
          <div className="col-25">
          <label>
            DNI:
          
          </label>
    <p className =  {"validation-text " +(this.state.dniError === true ? "show" : "not-show")}>{8-this.state.dni.length} digits left</p>
          </div>
          <div className="col-75">
          <input
              name="dni"
              className={(this.state.dniError === true ? "invalid" : "valid")}
              type="number"
              value={this.state.dni}
              placeholder="66555444"
              onChange={this.handleInputChange} />
              </div>
              </div>
              <div className="row">
          <div className="col-25">
          <label>
            Email:
          
          </label>
          <p className =  {"validation-text " +(this.state.emailError === true ? "show" : "not-show")}>Please enter a valid email</p>
          </div>
          <div className="col-75">
          <input
              name="email"
              className={(this.state.emailError === true ? "invalid" : "valid")}
              type="email"
              value={this.state.email}
              placeholder="thesithlord@galacticempire.com"
              onChange={this.handleInputChange} />
              </div>
              </div>
          <input type="submit" value="SEND" className="send" />
        </form>
        <div class="version"><p>v2.0.0</p></div>
        
      </div>
    );
  }
}



export default NameForm;
