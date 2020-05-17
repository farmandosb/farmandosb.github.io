//imports for ReactJS
import React, { } from 'react';


class Java extends React.Component {
    handleClick(projectUrl) {
        window.open(projectUrl);
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
                        <tr
                            onClick={() => this.handleClick("https://farmandosb.github.io/g19")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <td className="td-proyectos" >API rest</td>
                            <td>SpringBoot</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}


export default Java;