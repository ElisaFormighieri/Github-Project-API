import styled from 'styled-components'

export const BoxConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.27);
  margin-top: 5%;
  margin-bottom: 30px;
`

export const LeftContent = styled.div`
  margin-right: 180px;
  padding-left: 190px;
`

export const LogoContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  margin-left: 35%;
  background-color: #070c27;
  display: inline-block;
  border-radius: 60px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const WelcomeLogin = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  font-size: 27px;
  color: #090c2d;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const ToDoLogin = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 400;
  color: #888888;
  display: flex;
  align-items: center;
  margin-top: 6px;
`

export const Name = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  font-size: 80;
  letter-spacing: 1px;
  position: absolute;
  margin-top: 110px;
  color: #060606;
  transition: 0.4s;
`
export const SignIn = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  font-size: 80;
  letter-spacing: 1px;
  position: absolute;
  margin-top: 25px;
  color: #060606;
  transition: 0.4s;
`

export const Input = styled.input`
  border: #7d7d7d solid 1.5px;
  margin-top: 140px;
  height: 55px;
  width: 300px;
  padding-left: 20px;
  font-size: 16px;
  border-radius: 3px;
`
export const Button = styled.button`
  display: flex;
  border: #080808 solid 1.5px;
  border-radius: 3px;
  background-color: #070a23;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    background-color: #808080;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  margin-top: 55px;
  height: 60px;
  width: 300px;
  padding-left: 20px;
  color: #fff;
  font-size: 17px;
  letter-spacing: 3px;
  text-transform: uppercase;
`
export const ImageLogin = styled.img`
  width: 830px;
  height: 910px;
  background-size: cover;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px 0 0 5px;
`
