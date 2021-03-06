import React, { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react'
import ShiftHistory from '../ShiftHistory/ShiftHistory'
import  { Container } from './styles.js';

const ShitTimer = () => {
  const [userId, setUserId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seed, setSeed] = useState(1);

  //load user
  useEffect(() => {
    async function loadUser() {
      const session = await getSession()
      setUserId(session ? session.user.id : '')
    }
    loadUser();
  }, [userId]);

  //responsable for start or end the counter 
  function toggle() {
    setIsActive(!isActive);
  }

  // this is my way to save the moment when user started the timer and track how long it took
  useEffect(() => {
    let interval: number = 0;
    
    if (isActive && seconds == 0 ){
      setStartTime(new Date())
    }

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        setEndTime(new Date())
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  //here i check if is evething ok to stop the counter and save a new shift
  function stop() {

    if(seconds == 0){
      alert('yout have not started a new shift')
      return
    }

    if(location == '') {
      alert('Please inform a location')
      return
    } 

    setLocation('');
    setSeconds(0);
    setIsActive(false);
    save();
  }

  //here i send the data to the server
  async function save(){

    var data = {
      startTime: startTime,
      endTime: endTime,
      location: location,
      userId: userId
    }

    const response = await fetch(`http://localhost:3000/api/ShiftHistory/SaveShiftHistory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setSeed(seconds)
  }

  return (
    <Container data-testid="timer">
      <div className="app">
        <div className="time" data-testid="time">
          {seconds}s
        </div>
        <div className="row">
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" className="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <button data-testid="startButton" className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause shift' : 'Start shift'}
          </button>
          <button className="button save" onClick={stop}>
            End Shift
          </button>
        </div>
      </div>
      <ShiftHistory key={seed}/>
    </Container>
  );
};

export default ShitTimer;