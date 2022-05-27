import React, { useState, useEffect } from 'react';
import  { Container } from './styles.js';

const ShitTimer = () => {

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval: number = 0;
    
    if (isActive && seconds == 0 ){
      setStartTime(new Date())
    }

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function stop() {
    setSeconds(0);
    setIsActive(false);
    setEndTime(new Date())
    save();
  }

  async function save(){
    alert(startTime)
    alert(endTime)

    var data = {
      startTime: startTime,
      endTime: endTime,
      location: 'teste save button',
      userId: '9fe993e7-a56a-4ad0-8659-dc6a9b5924a9'
    }

    const response = await fetch(`http://localhost:3000/api/ShiftHistory/SaveShiftHistory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log(response);
  }

  return (
    <Container>
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button save" onClick={stop}>
          Save
        </button>
      </div>
    </div>
    </Container>
  );
};

export default ShitTimer;