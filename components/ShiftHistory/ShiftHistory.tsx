import React, { useState, useEffect } from 'react';
import  { Container } from './styles.js';
import moment from 'moment';

const ShiftHistory: React.FC = (props) => {
    const [shifts, setShifts] = useState([]);
  
    useEffect(() => {
      async function loadShifts() {
        const response = await fetch(`http://localhost:3000/api/ShiftHistory/ShiftHistoryByUser`)
        const data = await response.json()
          
        const shiftHistoryArray = [...shifts];
  
        // eslint-disable-next-line array-callback-return
        data.map((shift: any) => shiftHistoryArray.push(shift));
  
        setShifts(shiftHistoryArray);
      }
      loadShifts();
    }, []);


    return (
        <Container>
          <h1>Your Shift History:</h1>
          <table>
            <thead className="tbl-header">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">StartTime</th>
                <th scope="col">EndTime</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody  className="tbl-content">
              {shifts.map((shift, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{(moment.utc(shift.startTime).format('YYYY-MM-DD H:mm')).toString()}</td>
                  <td>{(moment.utc(shift.endTime).format('YYYY-MM-DD H:mm')).toString()}</td>
                  <td>{shift.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
    )

}

export default ShiftHistory