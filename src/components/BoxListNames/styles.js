import styled from 'styled-components'

export const FollowerContainer = styled.div`
  height: 120px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.1fr 0.6fr 1fr 0.5fr;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: #ffffff;
  margin-bottom: 1px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`

export const Square = styled.div`
  background-color: #0770a7;
  height: 35px;
  width: 8px;
  border-radius: 0px 10px 10px 0px;
  margin-right: 20px;
`

export const ProfilePic = styled.img`
  border-radius: 100%;
  height: 15vw;
  width: 15vw;
  max-width: 80px;
  max-height: 80px;
  min-width: 60px;
  min-height: 60px;
`
export const LoginName = styled.div`
  font-size: 17px;
  font-weight: bold;
  font-family: arial;
  color: #868686;
`

export const AcessContainerFollower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 20px;
`
