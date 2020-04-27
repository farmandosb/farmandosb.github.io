//imports for ReactJS
import React, { useCallback } from 'react';

//import styles
import './App.css';

//imports for  router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

//imports for using Tabla component
import Tabla from './Components/Tabla';

//imports for using NameForm component
import NameForm from './Components/Nameform'

//imports for using NameForm component
import Peliculas from './Components/Movies'


function App() {
  return (
    <Router>
      <div id="header">
        <div><img id="fslogo" src="my-app2/fs192.png"></img> </div>
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
            <li>
              <NavLink to="/movies" activeClassName="active">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main">
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
          <Route path="/movies">
            <Movies moviecustomID="hola" />
            <div
              className="movies-footer"
            >
              <a
                href="https://www.themoviedb.org/?language=es"
                target="_blank"
              >
                <img
                  src="my-app2/tmdb_logo.png"
                >
                </img>
              </a>
              <a
                href="https://www.cinecalidad.is/"
                target="_blank"
              >
                <img
                  src="my-app2/cc_logo.png"
                >
                </img>
              </a>


            </div>
          </Route>

        </Switch>
      </div>
    </Router>


  );
}

function Home() {
  return <h1>Home</h1>;
}

function Signup() {
  return <NameForm />;
}

/*function manipularJson(json){
  let divUser = document.querySelector("#userList");
  let ulUser = document.createElement("ul");
  ulUser.className= "user-list";
  json.forEach(element => {
    userArr = Array(json.length).fill(element.firstname);
    console.log(element.firstName);
    let liUser = document.createElement("li");
    liUser.textContent = element.firstName;
    ulUser.appendChild(liUser);
  });
  divUser.appendChild(ulUser);

}*/
let employeesJSON;
function handleClick() {
  fetch('https://reactpostgresql.herokuapp.com/' + 'findall')
    .then(response => {
      employeesJSON = response.json();
    })
}



function Users() {
  return (
    <div className="titulo">
      <div id="userList">
        <Tabla />
      </div>


    </div>

  );
}

function Movies() {
  return (
    <div class="movies">
      <h2 class="intro-movie"> Movies from Cinecalidad and The Movie Data Base</h2>
      <p class="intro-movie">Here you'll find some good movies that I have watched recently!.</p>

      <Peliculas
        moviecustomID="443791"
        moviecustomLink="https://www.cinecalidad.is/pelicula/amenaza-en-lo-profundo-2020-online-descarga/"
      />
      <Peliculas
        moviecustomID="522162"
        moviecustomLink="https://www.cinecalidad.is/pelicula/midway-batalla-en-el-pacifico-2019-online-descarga/"
      />
      <Peliculas
        moviecustomID="512200"
        moviecustomLink="https://www.cinecalidad.is/pelicula/jumanji-el-siguiente-nivel-2019-online-descarga/"
      />
      <Peliculas
        moviecustomID="492188"
        moviecustomLink="https://www.cinecalidad.is/pelicula/historia-de-un-matrimonio-2019-online-descarga/"
      />
      <Peliculas
        moviecustomID="419704"
        moviecustomLink="https://www.cinecalidad.is/pelicula/ad-astra-hacia-las-estrellas-2019-online-descarga/"
      />
      <Peliculas
        moviecustomID="399579"
        moviecustomLink="https://www.cinecalidad.is/pelicula/battle-angel-la-ultima-guerrera-2019-online-descarga/"
      />
      <Peliculas
        moviecustomID="568091"
        moviecustomLink="https://www.cinecalidad.is/pelicula/fractura-2019-online-descarga/"
      />

    </div>

  )
}








//Finish router




export default App;
