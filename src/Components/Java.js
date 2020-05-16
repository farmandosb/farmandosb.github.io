//imports for ReactJS
import React, { } from 'react';


class Java extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                            <td className="td-proyectos" ><a className="vinculos" href="https://farmandosb.github.io/g19">API rest</a>
                            </td>
                            <td>SpringBoot</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}


export default Java;