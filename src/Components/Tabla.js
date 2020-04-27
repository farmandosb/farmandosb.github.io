//imports for ReactJS
import React, { useCallback } from 'react';

//imports for Table module
import {useTable} from 'react-table';

//imports for styling react table
import styled from 'styled-components';

//style applied to table
const Styles = styled.div `
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      background-color: #222255;
      color: white;
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: .5rem;
      text-align: left;
      border-bottom: 1px solid black;
      border-right: 1px solid  black;
      :last-child {
        border-right: 0;
      }
    }
    tr:hover {background-color: #ddd;}
  }
  
`

function Table({columns, data}) {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

  // Render Data Table UI
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup
              .headers
              .map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row
                .cells
                .map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


class  Tabla extends React.Component {
  state = {
    sal: "hello",
    data: [],
    columns : [
      {
        Header: 'Nombre',
        accessor: 'firstName'
      }, {
        Header: 'Apellido',
        accessor: 'lastName'
      }, {
        Header: 'Descripción',
        accessor: 'description'
      }
    ]
  }
componentDidMount(){

      fetch('https://reactpostgresql.herokuapp.com/' + 'findall')
    .then(response => {
      return response.json();
  }).then(responseJSON =>{
    let employeesJSON = responseJSON;
    this.setState({data: employeesJSON});
    console.log(employeesJSON);
  })
  

}
  
render(){
  return (
    <Styles>
      <Table
        saludo={this.state.sal}
        data={this.state.data}
        columns={this.state.columns}
      />
    </Styles>
  )
  
}

}


export default Tabla;
