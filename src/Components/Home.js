//imports for ReactJS
import React, { useCallback } from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div class="main">
        <table class="proyectos">
            <tr>
                <th class="td-proyectos">Project</th>
                <th>Using</th>
                <th>Version</th>
            </tr>
            <tr>
                <td class="td-proyectos"><a class="vinculos" href="https://farmandosb.github.io/g19">Landing Page</a>
                </td>
                <td>MDL Bootstrap</td>
                <td>1.0.0</td>



            </tr>
            <tr>
                <td class="td-proyectos"><a class="vinculos" href="https://fasb1.herokuapp.com/">Simple form with validation and
                        tooltips
                    </a></td>
                <td>ReactJS</td>
                <td>2.0.8</td>
            </tr>
            <tr>
                <td class="td-proyectos"><a class="vinculos" href="https://farmandosb.github.io/cv">Freddy Suárez simple
                        CV</a></td>
                <td>Vanilla JS</td>
                <td>1.0.7</td>
            </tr>
            <tr>
                <td class="td-proyectos"><a class="vinculos" href="https://farmandosb.github.io/my-app1">Simple form
                        with validation</a></td>
                <td>ReactJS</td>
                <td>1.0.2</td>
            </tr>
            <tr>
                <td class="td-proyectos"><a class="vinculos" href="https://farmandosb.github.io/tictac2/">React tutorial
                        Tic-tac-toe</a></td>
                <td>ReactJS</td>
                <td>1.0.5</td>
            </tr>


        </table>
    </div>

        );
    }
}


export default Home;