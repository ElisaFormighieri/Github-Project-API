import {
  Username,
  Header,
  Logout,
  Body,
  ProfilePicture,
  WhiteRectangle,
  Name,
  Nationality,
  ProfileNumbers,
  Followers,
  NameBox,
  AlignProfilePicture,
  FollowersmNumber,
  FollowingNumber,
  Following,
  ReposNumber,
  Repos,
  Bio,
  BioBox,
  InfoBio,
  BoxConteiner
} from '../Home/styles'
import { FiLogOut } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import { useAuth } from '../../hooks/auth'
import { UnstyledLink } from '../../components/UnstyledLink'

export function Home() {
  const { user } = useAuth()

  return (
    <BoxConteiner imgOpacity={'0.9'}>
      <Header>
        <Username style={{ fontWeight: 'bold' }}>#{user.login}</Username>
        <UnstyledLink to="/">
          <Logout>
            <div
              style={{
                cursor: 'pointer'
              }}
            >
              Sair
            </div>
            <FiLogOut color="#D03434" size={19} style={{ marginLeft: 12 }} />
          </Logout>
        </UnstyledLink>
      </Header>

      <Body>
        <AlignProfilePicture>
          <ProfilePicture avatar_url={user.avatar_url} />
        </AlignProfilePicture>

        <NameBox>
          <WhiteRectangle />
          <Name>{user.name}</Name>
        </NameBox>

        <Nationality>{user.location}</Nationality>

        <ProfileNumbers>
          <UnstyledLink to="/followers">
            <FollowersmNumber>
              <div>{user.followers}</div>
              <Followers>Seguidores</Followers>
            </FollowersmNumber>
          </UnstyledLink>

          <UnstyledLink to="/following">
            <FollowingNumber>
              <div>{user.following}</div>
              <Following>Seguindo</Following>
            </FollowingNumber>
          </UnstyledLink>

          <UnstyledLink to="/repos">
            <ReposNumber>
              <div>{user.public_repos}</div>
              <Repos>Repos</Repos>
            </ReposNumber>
          </UnstyledLink>
        </ProfileNumbers>

        <BioBox>
          <WhiteRectangle />
          <Bio>BIO</Bio>
        </BioBox>

        <InfoBio>{user.bio}</InfoBio>
      </Body>

      <Navbar />
    </BoxConteiner>
  )
}
