import styled from '@emotion/styled';

export const ProfileCard = styled.div`
width: 100vh;
  padding: 50px;
  box-shadow: 0 0 10px #0000004d;
  background-color: rgb(205, 198, 198);
`;

export const Description = styled.div`
display: grid;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(138, 144, 147);
  border-bottom: 0;
  background-color: #fff;
  width: inherit;
  padding-top: 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const AvatarUser = styled.img`
border-radius: 50%;
  width: 200px;
  box-shadow: 0 0 3px 0px #0000004d;
`;

export const UserName = styled.p`
color: black;
  font-size: 30px;
  font-weight: bold;
`;

export const UserTag = styled.p`
font-size: 20px;
  margin: 0 auto;
  color: darkgray;
  padding-bottom: 15px;
`;

export const UserLocation = styled.p`
font-size: 20px;
  margin: 0 auto;
  color: darkgray;
  padding-bottom: 15px;
`;

export const UserStats = styled.ul`
display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  height: 50px;
  background-color: lightgray;
  border: 2px solid rgb(138, 144, 147);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  & > li{
    display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
  }
`;

export const UserLabel = styled.span`
margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;

export const UserQuantity = styled.span`
font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;

