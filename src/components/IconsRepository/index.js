import { FiUnlock, FiLock } from 'react-icons/fi';
import { HiOutlineStar } from 'react-icons/hi';
import { WhiteRectangle } from '../../pages/Home/styles';

import {
  BoxRepositoryMessage,
  RepositoryIcons,
  FavsQuantity,
  LocksBox,
  RepositoryMessage,
  RepoDescription,
  RepoMessegesStyles,
  StarsBox,
} from './styles';

export function IconsRepository(props) {
  const data = props.data;
  return (
    <>
      <BoxRepositoryMessage>
        <WhiteRectangle />
        <RepoMessegesStyles>
          <RepositoryMessage>{data.name}</RepositoryMessage>
          <RepoDescription>{data.description}</RepoDescription>
        </RepoMessegesStyles>
      </BoxRepositoryMessage>

      <RepositoryIcons>
        <StarsBox>
          <HiOutlineStar color={'#FFCE00'} size={21} />
          <FavsQuantity>{data.stars}</FavsQuantity>
        </StarsBox>
        <LocksBox>
          <FiUnlock
            color={'#63BF1F'}
            size={21.2}
            style={{ marginRight: '16px' }}
          />
          <FiLock color={'#CC042A'} size={21.2} />
        </LocksBox>
      </RepositoryIcons>
    </>
  );
}
