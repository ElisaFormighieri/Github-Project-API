import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  margin-left: 5px;
`;
export const Username = styled.p`
  margin-left: 10px;
  display: inline-block;
  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-family: Arial;
`;
export const Logout = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background: none;
  border: none;

  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 300;
`;

export const Body = styled.div`
  position: relative;
  background-color: #343434;
  height: 560px;
  margin-top: 95px;
`;
export const AlignProfilePicture = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfilePicture = styled.div`
  border-radius: 80px;
  position: absolute;
  top: -95px;
  background-color: black;
  width: 140px;
  height: 140px;
  margin-top: 25px;
  background-image: url(${({ avatar_url }) => avatar_url});
  background-position: center;
  background-size: cover;
`;
export const NameBox = styled.div`
  padding-top: 95px;
  display: flex;
  align-items: center;
`;
export const WhiteRectangle = styled.div`
  display: inline-block;
  height: 42px;
  width: 10px;
  background-color: #ffffff;
  border-right: #292929;
  border-radius: 0 10px 10px 0;
`;
export const Name = styled.p`
  display: inline-block;
  font-weight: bold;
  margin: 0 0 0 14px;
  color: #ffffff;
  font-size: 25px;
  font-family: Arial;
`;

export const Nationality = styled.div`
  color: #ffffff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  margin-left: 24px;
`;
export const ProfileNumbers = styled.div`
  background-color: #3c3c3c;
  margin-top: 40px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const FollowersmNumber = styled.div`
  font-size: 32px;
  color: #ffffff;
  font-family: sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Followers = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FollowingNumber = styled.div`
  font-size: 32px;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Following = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReposNumber = styled.div`
  font-size: 32px;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Repos = styled.div`
  color: white;
  font-size: 15px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BioBox = styled.div`
  padding-top: 45px;
  display: flex;
  align-items: center;
`;

export const Bio = styled.div`
  display: inline-block;
  font-weight: bold;
  margin: 0 0 0 14px;
  color: #ffffff;
  font-size: 25px;
  font-family: Arial;
`;
export const InfoBio = styled.div`
  color: #ffffff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  margin-left: 24px;
`;
