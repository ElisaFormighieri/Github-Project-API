import { FiUsers } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { RiGithubLine } from 'react-icons/ri'
import { Nav, NavName, BoxNav } from './styles'
import { UnstyledLink } from '../../components/UnstyledLink'

export default function Navbar() {
  return (
    <Nav>
      <UnstyledLink to="/home">
        <BoxNav>
          <BiHomeAlt size={30} color="#9d9d9d" />
          <NavName>Home</NavName>
        </BoxNav>
      </UnstyledLink>

      <UnstyledLink to="/repos">
        <BoxNav>
          <RiGithubLine size={30} color="#9d9d9d"/>
          <NavName>Repos</NavName>
        </BoxNav>
      </UnstyledLink>

      <UnstyledLink to="/followers">
        <BoxNav>
          <FiUsers size={30} color="#9d9d9d" />
          <NavName>Seguidores</NavName>
        </BoxNav>
      </UnstyledLink>

      <UnstyledLink to="/following">
        <BoxNav>
          <FiUsers size={30} color="#9d9d9d" />
          <NavName>Seguindo</NavName>
        </BoxNav>
      </UnstyledLink>
    </Nav>
  )
}
