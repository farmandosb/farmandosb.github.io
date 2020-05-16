//imports for ReactJS
import React, {  } from 'react';




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
            <div class="main">
                <table class="proyectos">
                    <tr>
                        <th class="td-proyectos">Project</th>
                        <th>Using</th>
                    </tr>
                    <tr data-href="https://farmandosb.github.io/g19" target="_blank" rel="noopener noreferrer">
                        <td class="td-proyectos" ><a class="vinculos" href="https://farmandosb.github.io/g19">Landing Page</a>
                        </td>
                        <td>MDL Bootstrap</td>
                    </tr>
                    <tr data-href="https://fasb1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <td class="td-proyectos">
                            Simple form with validation and tool tips
                    </td>
                        <td>ReactJS</td>
                    </tr>
                    <tr data-href="https://farmandosb.github.io/tictac2/" target="_blank" rel="noopener noreferrer">
                        <td class="td-proyectos">
                            React tutorial Tic-tac-toe
                    </td>
                        <td>ReactJS</td>
                    </tr>
                    <tr data-href="https://farmandosb.github.io/zeldasounds/" target="_blank" rel="noopener noreferrer">
                        <td class="td-proyectos">
                            Button Board with Zelda's sounds
                    </td>
                        <td>ReactJS</td>
                    </tr>
                </table>
            </div>
        );
    }
}


export default Javascript;



