import React from 'react';
import './App.css';

//start router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to="/" 
                activeClassName="active"
              > Home
              </NavLink>
              
            
            </li>
            
            <li>
              <NavLink to="/signup" activeClassName="active">Sign up</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/" >
          <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return  <div class="titulo"><h2>Home</h2></div> ;
}

function Signup() {
  return <NameForm />;
}

function Users() {
  return <div class="titulo"><h2>Users</h2></div>;
}


//Finish router

const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexDni = /^((?!(0))[0-9]{7,8})$/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


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
          
          </div>
          <div className="col-75 tooltip">
            <span className =  {"tooltiptext " +(this.state.firstnameError === true ? "show" : "not-show")}>Please enter a valid first name</span>
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
          
          </div>
          <div className="col-75 tooltip">
          <span className =  {"tooltiptext " +(this.state.lastnameError === true ? "show" : "not-show")}>Please enter a valid last name</span>
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
          </div>
          <div className="col-75 tooltip">

          <span className =  {"tooltiptext " +(this.state.dniError === true ? "show" : "not-show")}>Please enter a valid DNI</span>
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

          
          </div>
          <div className="col-75 tooltip">
          <span className =  {"tooltiptext " +(this.state.emailError === true ? "show" : "not-show")}>Please enter a valid email</span>
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
        <div class="version"><p>v2.0.1</p></div>
        
      </div>
    );
  }
}



export default App;
