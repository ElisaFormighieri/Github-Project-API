import { AiFillGithub } from 'react-icons/ai'
import Github from '../../assets/Images/GithubLogin.gif'
import {
  Container,
  LeftContent,
  FormContainer,
  Input,
  Button,
  LogoContainer,
  WelcomeLogin,
  ToDoLogin,
  ImageLogin,
  BoxConteiner,
  Name,
  SignIn
} from './styles'
import { useAuth } from '../../hooks/auth'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export function Login(props) {
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    onSubmit: async values => {
      try {
        await signIn(values.username)
        navigate('/home')
      } catch (error) {
        alert(error)
      }
    }
  })

  return (
    <BoxConteiner>
      <Container
        autoPlay
        loop
        muted
        type="video/mp4"
        allowFullScreen
        allowfullscreen="true"
        playsInLine
        controls={false}
      >
        <LeftContent>
          <LogoContainer>
            <AiFillGithub size={95} color="#fff" />
          </LogoContainer>

          <FormContainer>
            <form onSubmit={formik.handleSubmit}>
              <WelcomeLogin> WELCOME TO LOGIN</WelcomeLogin>
              <ToDoLogin>
                Faça o login para acessar sua conta no Github
              </ToDoLogin>
              <Name>Your Username</Name>
              <Input
                placeholder="Usuário"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <SignIn>Sign In</SignIn>
              <Button type="submit">Enter</Button>
            </form>
          </FormContainer>
        </LeftContent>

        <ImageLogin src={Github} alt="Github" />
      </Container>
    </BoxConteiner>
  )
}
