import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f6f6f6;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  margin-top: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`
export const BoxNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavName = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  color: #9d9d9d;
  size: 27px;
  font-weight: Bold;
  letter-spacing: 1px;
  :hover {
    color: #0770a7;
    transition: 0.5s;
  }
`
