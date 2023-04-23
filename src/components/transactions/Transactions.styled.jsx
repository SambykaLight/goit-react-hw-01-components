import styled from '@emotion/styled';

export const TransactionHistoryBox = styled.table`
margin-top: 30px;
  box-shadow: 0 0 10px #c6cccced;
  width: 80vh;
  border-spacing: 0;

  & tr:nth-of-type(odd) {
  background-color: #eee;
  }
  & th {
  background-color: rgb(90, 215, 237);
}

& td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
}

& th {
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 5px;
  color: #524a4d;
}

& td {
  padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  justify-content: center;
}

& tr {
  justify-content: space-around;
  border-bottom: solid 1px #c6cccce6;
}
`;