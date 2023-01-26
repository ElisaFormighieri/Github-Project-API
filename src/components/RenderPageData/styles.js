import styled from 'styled-components'
import img from '../../assets/Images/696037.jpg'

export const Body = styled.div`
  background-color: #e7e7e7;
  margin-top: 16px;
  padding-top: 20.5px;
`

export const Button = styled.div`
  background-color: #7aa7c7;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #ffffff;
  display: inline-block;
  cursor: pointer;
  font-family: georgia;
  font-size: 17px;
  line-height: 1.15385;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  margin-top: 20px;

  :hover {
    background-color: #0770a7;
    transition: 0.5s;
  }
`
export const BoxButton = styled.div`
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${img});
  width: 100%;
  height: 100px;
  opacity: ${img => img.imgOpacity};
  box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.1);
`

export const HeaderName = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-family: sans-serif;
  margin-left: 100px;
  margin-top: 10px;
`
