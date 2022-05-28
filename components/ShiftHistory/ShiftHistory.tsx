import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'
import  { Container } from './styles.js';
import moment from 'moment';

const ShiftHistory: React.FC = (props) => {
  const { data: session } = useSession()
  const userId = session ? session.user?.id : ''
  const [shifts, setShifts] = useState([]);
  
  useEffect(() => {
    async function loadShifts() {
      const response = await fetch(`http://localhost:3000/api/ShiftHistory/ShiftHistoryByUser?userId=${userId}`)
      const data = await response.json()
        
      const shiftHistoryArray = [...shifts];

      data.map((shift: any) => shiftHistoryArray.push(shift));
 
      setShifts(shiftHistoryArray);
    }
    loadShifts();
  }, [userId]);


    return (
        <Container>
          <h1>Your Shift History:</h1>
          <table>
            <thead className="tbl-header">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Start_Time</th>
                <th scope="col">End_Time</th>
                <th scope="col">Duration</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody  className="tbl-content">
              {shifts.map((shift, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{(moment.utc(shift.startTime).format('YYYY-MM-DD H:mm:ss')).toString()}</td>
                  <td>{(moment.utc(shift.endTime).format('YYYY-MM-DD H:mm:ss')).toString()}</td>
                  <td></td>
                  <td>{shift.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
    )

}

export default ShiftHistory