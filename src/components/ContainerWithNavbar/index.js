import Navbar from '../Navbar';
import { Container } from './styles';

export function ContainerWithNavbar(props) {
  return (
    <Container>
      {props.children}
      <Navbar />
    </Container>
  );
}
