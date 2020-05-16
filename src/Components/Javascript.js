//imports for ReactJS
import React, { } from 'react';




//Component Javascript
class Javascript extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        movieJSONdata: {}
    };

    componentDidMount() {


    }


    render() {
        return (
            <div className="main">
                <table className="proyectos">
                    <thead>
                        <tr>
                            <th className="td-proyectos">Project</th>
                            <th>Using</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-href="https://farmandosb.github.io/g19" target="_blank" rel="noopener noreferrer">
                            <td className="td-proyectos" ><a className="vinculos" href="https://farmandosb.github.io/g19">Landing Page</a>
                            </td>
                            <td>MDL Bootstrap</td>
                        </tr>
                        <tr data-href="https://fasb1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <td className="td-proyectos">
                                Simple form with validation and tool tips
                    </td>
                            <td>ReactJS</td>
                        </tr>
                        <tr data-href="https://farmandosb.github.io/tictac2/" target="_blank" rel="noopener noreferrer">
                            <td className="td-proyectos">
                                React tutorial Tic-tac-toe
                    </td>
                            <td>ReactJS</td>
                        </tr>
                        <tr data-href="https://farmandosb.github.io/zeldasounds/" target="_blank" rel="noopener noreferrer">
                            <td className="td-proyectos">
                                Button Board with Zelda's sounds
                    </td>
                            <td>ReactJS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Javascript;



