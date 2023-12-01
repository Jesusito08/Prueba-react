import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 200px;
  border-radius: 10px;
  background-color: black; 
  color: red; 
`;

export const UsuariosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: red;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 3px;
    border: 8px solid red;
    text-align: left;
  }

  th {
    background-color: black;
  }

  td {
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: red;
    }
  }
`;