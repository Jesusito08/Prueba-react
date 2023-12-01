import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 80px;
  border-radius: 80px;
  background-color: black;
  color: red;
  box-shadow: 45px 0px 55px 50px rgba(0, 0, 0, 0.75);

  h1 {
    color: red;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 70%;

    label {
      margin-bottom: 10px;
    }

    input {
      padding: 10px;
      border-radius: 50px;
      border: 50px;
      background-color: red; 
      color: black; 
      margin-bottom: 15px; 

      transition: box-shadow 0.3s ease;

      &:focus {
        outline: none;
        box-shadow: 0 0 5px black;
      }
    }

    button {
      padding: 10px;
      border-radius: 50px;
      border: none;
      background-color: red;
      color: black;
      cursor: pointer;
      margin-top: 20px;
      margin-right: 20px; 
    }

    button:hover {
      background-color: black;
      color: red;
    }
  }
`;