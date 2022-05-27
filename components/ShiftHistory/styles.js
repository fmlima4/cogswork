import styled from 'styled-components'

export const Container = styled.div`
table{
  width:100%;
  table-layout: fixed;
  background-color: #282c34;
  padding: 15px; 
  border-radius: 15px;
}

h1{
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  background-color: #282c34;
  margin: 15px auto; 
  padding: 15px; 
  border-radius: 15px;
}

.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }

.tbl-content{
  height:30px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}

th{
  padding: 20px 15px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}

td{
  padding: 15px;
  text-align: center;
  vertical-align:middle;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
`;
