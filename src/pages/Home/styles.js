import styled from 'styled-components'
import img from '../../assets/Images/696037.jpg'

export const BoxConteiner = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 150px;
  opacity: ${img => img.imgOpacity};
  box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.1);
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Username = styled.p`
  display: inline-block;
  color: #ffffff;
  font-size: 20px;
  line-height: 24px;
  font-family: Arial;
  margin-top: 20px;
  margin-left: 15px;
`
export const Logout = styled.button`
  display: flex;
  align-items: center;
  margin-right: 25px;
  background: none;
  border: none;
  margin-top: 15px;
  cursor: pointer;

  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 300;
`

export const Body = styled.div`
  position: relative;
  background-color: #ffffff;
  margin-top: 60px;
  box-shadow: 20px 20px 20px 20px rgba(0, 0, 0, 0.2);
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 30px;
  border-radius: 20px;
  height: 600px;
`

export const AlignProfilePicture = styled.div`
  display: flex;
  justify-content: center;
`

export const ProfilePicture = styled.div`
  border-radius: 100px;
  position: absolute;
  top: -100px;
  background-color: black;
  width: 170px;
  height: 170px;
  margin-top: 25px;
  background-image: url(${({ avatar_url }) => avatar_url});
  background-position: center;
  background-size: cover;
`
export const NameBox = styled.div`
  padding-top: 10%;
  display: flex;
  align-items: center;
`
export const WhiteRectangle = styled.div`
  display: inline-block;
  height: 35px;
  width: 8px;
  background-color: #0770a7;
  border-right: #292929;
  border-radius: 0 10px 10px 0;
`
export const Name = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  font-weight: bold;
  margin: 0 0 0 14px;
  color: #747474;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Nationality = styled.div`
  color: #9d9d9d;
  font-family: Arial;
  font-size: 19px;
  margin-left: 24px;
`
export const ProfileNumbers = styled.div`
  background-color: #fafafa;
  margin-top: 60px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`
export const FollowersmNumber = styled.div`
  font-size: 28px;
  color: #868686;
  font-family: sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Followers = styled.div`
  color: #868686;
  font-size: 16px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FollowingNumber = styled.div`
  font-size: 28px;
  color: #868686;
  font-family: Arial;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Following = styled.div`
  color: #868686;
  font-size: 16px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ReposNumber = styled.div`
  font-size: 28px;
  color: #868686;
  font-family: Arial;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Repos = styled.div`
  color: #868686;
  font-size: 16px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BioBox = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
`

export const Bio = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  font-weight: bold;
  margin-left: 14px;
  color: #7f7f7f;
  font-size: 25px;
  letter-spacing: 0.5px;
`
export const InfoBio = styled.div`
  color: #9d9d9d;
  font-family: Arial;
  font-size: 19px;
  margin-left: 24px;
  padding-bottom: 9%;
`
