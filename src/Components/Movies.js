//imports for ReactJS
import React, { useCallback } from 'react';

const posterBaseURL = "https://image.tmdb.org/t/p/w500/";

const apikey = "api_key=a64863c26b9a55654d13b87f58862761";
let movieID = "550";
let urlMovie = "";


//Component Movies
class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        movieJSONdata: {},
        posterpath: {},
        originaltitle: {},
        releasedate: "",
        overview: ""
    };

    componentDidMount() {
        movieID = this.props.moviecustomID;
        console.log(movieID + " ok");
        urlMovie = "https://api.themoviedb.org/3/movie/" + movieID + "?";
        fetch(urlMovie + apikey)
            .then(response => {
                return response.json();
            }).then(responseJSON => {

                this.setState({ movieJSONdata: responseJSON });
                this.setState({
                    posterpath: posterBaseURL + responseJSON.poster_path,
                    originaltitle: responseJSON.original_title,
                    releasedate: responseJSON.release_date,
                    overview: responseJSON.overview
                });



            })
        console.log(this.state.movieJSONdata);
        console.log(this.state.posterpath);
        console.log(this.state.releasedate);

    }


    render() {
        return (
            <div
                className="movie-wrapper"
            >
                <div
                    className="movies-left"
                >
                    <a
                        href={this.props.moviecustomLink}
                        target="_blank"
                    >
                        <img
                            src={this.state.posterpath}
                        >
                        </img>
                    </a>
                </div>
                <div
                    className="movies-right"
                >
                    <h3>{this.state.originaltitle}</h3>
                    <p>{this.state.releasedate}</p>
                    <p>{this.state.overview}</p>



                </div>

            </div >
        );


    }
}


export default Movies;



