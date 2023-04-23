import styled from '@emotion/styled'

export const StatisticsSection = styled.section`
width: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  box-shadow: 0 0 10px #c6cccced;
  margin-top: 30px;
  border: 2px solid rgb(138, 144, 147);
`;

export const StatTitle = styled.h2`
font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
  margin: auto;
`;

export const StatList = styled.ul`
width: 100vh;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  border: 2px solid rgb(138, 144, 147);
  border-bottom: none;
  margin-bottom: 0;

  & li:last-child {
  border-right: none;
}
`;

export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  padding: 10px;
  width: inherit;
  align-items: center;
  border-right: 2px solid rgb(138, 144, 147);
`;

export const StatLabel = styled.span`
font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;

export const StatPercentage = styled.span`
font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;