import styled from 'styled-components'

export const Container = styled.div`

.app {
    text-align: center;
    background-color: #282c34;
    min-height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(8px + 2vmin);
    color: white;
    padding: 15px; 
    border-radius: 15px;
  }
  
  .time {
    font-size: 2.5rem;
    padding: 1rem;
  }

  .location {
    margin: .4rem;
    color: black;
    border-radius: 3px;
  }
  
  .button {
    padding: .6rem 1.5rem;
    margin: .4rem;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8rem;
  }
  
  .button:focus {
    outline-width: 0;
  }
  
  .button-primary:hover {
    background-color: #2641d4;
    border: 1px solid #1b1f2b;
  }
  
  .button-primary-active {
    background-color: #3151ff;
    border: 1px solid #152684;
    color: white;
  }
  
  .button-primary-inactive {
    background-color: #3151ff;
    border: 1px solid #152684;
    color: white;
  }

  .save {
    background-color: #72f542;
    border: 1px solid #152684;
    color: white;
  }
  `