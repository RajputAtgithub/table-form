  import React, { useEffect, useState } from 'react'
import './Table.css';
  function Table() {
  let [data, setData] = useState([])

    useEffect( function (){
        fetch('./data.json').then(response => {
          console.log(response);
          return response.json();
        }).then(json => {
          // Work with JSON data here
          console.log(json);
          setData(json)
        }).catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
    }, [])
    return (
      <div className="container" >
       
      <table className='table'>
        <tr className="table-header">
          <th>Roll No</th>
          <th>Name</th>
          <th>English</th>
          <th>Maths</th>
          <th>Science</th>
          <th>History</th>
          <th>Total Marks</th>
          <th>Obtained Marks</th>
        </tr>
      {
        data.map((data,index)=> {
          return(
            <div key={index} className="data_table">
                
                <tr className="data">
                    <td className="Roll_NO">{data.Roll_NO}</td>
                    <td className="Name">{data.Name}</td>
                    <td className="English">{data.English}</td>
                    <td className="Maths">{data.Maths}</td>
                    <td className="Science">{data.Science}</td>
                    <td className="History">{data.History}</td>
                    <td className="TotalMarks">{data.TotalMarks}</td>
                    <td className="ObtainedMarks">{data.ObtainedMarks}</td>

                </tr>
                
                
            </div>
          )
        })
      }
      </table>
      
      </div>
    )
  }
  export default Table;