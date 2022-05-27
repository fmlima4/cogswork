import React, { useState, useEffect } from 'react';
import  { Container } from './styles.js';

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
          <table>
            <caption>yout shift history</caption>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">StartTime</th>
                <th scope="col">EndtTime</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map((shift, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{shift.startTime}</td>
                  <td>{shift.endTime}</td>
                  <td>{shift.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
    )

}

export default ShiftHistory