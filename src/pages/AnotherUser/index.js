import Navbar from '../../components/Navbar';
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
} from '../Home/styles';
import { UnstyledButton } from '../../components/UnstyledButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { FiSave } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function AnotherUser() {
  const [anotherUser, setAnotherUser] = useState();
  const { username } = useParams(); // pega o username da rota ex: http://localhost:3001/anotherUser/LeonardoFlorentino pega LeonardoFlorentino
  const { signIn, signOut } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}` //pega as informações do servidor e passa para o .then
    )
      .then((JSONresponse) => JSONresponse.json()) //pega a resposta do servidor em JSON, transoforma em um objeto e retorna essa informação para o próximo .then
      .then((response) => setAnotherUser(response)); //pega a resposta ja transformada e armazena no estado dataOfCurrentPage

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //dizer para o useEffect ser executado toda vez q o valor do estado currentPage for alterado

  async function handleSave() {
    signOut();
    await signIn(username);
    navigate('/home');
  }

  return (
    <>
      <Header>
        <Username style={{ fontWeight: 'bold' }}>
          #{anotherUser?.login}
        </Username>
        <UnstyledButton onClick={handleSave}>
          <Logout>
            <div
              style={{
                cursor: 'pointer',
              }}>
              Salvar
            </div>
            <FiSave color="green" size={19} style={{ marginLeft: 12 }} />
          </Logout>
        </UnstyledButton>
      </Header>

      <Body>
        <AlignProfilePicture>
          <ProfilePicture avatar_url={anotherUser?.avatar_url} />
        </AlignProfilePicture>

        <NameBox>
          <WhiteRectangle />
          <Name>{anotherUser?.name}</Name>
        </NameBox>

        <Nationality>{anotherUser?.location}</Nationality>

        <ProfileNumbers>
          <FollowersmNumber>
            <div>{anotherUser?.followers}</div>
            <Followers>Seguidores</Followers>
          </FollowersmNumber>

          <FollowingNumber>
            <div>{anotherUser?.following}</div>
            <Following>Seguindo</Following>
          </FollowingNumber>

          <ReposNumber>
            <div>{anotherUser?.public_repos}</div>
            <Repos>Repos</Repos>
          </ReposNumber>
        </ProfileNumbers>

        <BioBox>
          <WhiteRectangle />
          <Bio>BIO</Bio>
        </BioBox>

        <InfoBio>{anotherUser?.bio}</InfoBio>
      </Body>
      <Navbar />
    </>
  );
}
