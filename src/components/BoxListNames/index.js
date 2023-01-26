import { FiArrowRight } from 'react-icons/fi'
import {
  FollowerContainer,
  Square,
  ProfilePic,
  LoginName,
  AcessContainerFollower
} from './styles'
import { useNavigate } from 'react-router-dom'

export function BoxListNames(props) {
  const data = props.data
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/anotherUser/${data.login}`)
  }

  return (
    <FollowerContainer onClick={handleClick} key={data.id}>
      <Square />
      <ProfilePic src={data.avatar_url} />
      <LoginName># {data.login}</LoginName>
      <AcessContainerFollower>
        <FiArrowRight size={24} color="#868686" />
      </AcessContainerFollower>
    </FollowerContainer>
  )
}
