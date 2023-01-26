import Navbar from '../../components/Navbar'
import BackArrow from '../../components/BackArrow'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'

import {
  Header,
  HeaderName,
  Body,
  Button,
  BoxButton
} from '../RenderPageData/styles'
import { BoxListNames } from '../../components/BoxListNames'
import { IconsRepository } from '../../components/IconsRepository'
import { UnstyledLink } from '../../components/UnstyledLink'

const style = {
  overflow: 'auto',
  height: 'auto'
}
// https://api.github.com/users/diego3g/followers?per_page=50&page=1
// link da api do github

// exemplo de utilizacao desse componente <RenderPageData route='followers' />

export function RenderPageData(props) {
  const route = props.route

  const { user } = useAuth()

  const [dataOfCurrentPage, setDataOfCurrentPage] = useState([]) //cria um estado q irá armazenar os dados extraídos no useEffect
  const [currentPage, setCurrentPage] = useState(1) //cria um estado para armazenar o número da página atual

  const numberOfDataPerPage = 20 // define o numero de dados q virá por pagina
  const calculateNumberOfPages = Math.ceil(user[route] / numberOfDataPerPage) //calcula o numero total de paginas

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${user.login}/${route}?per_page=${numberOfDataPerPage}&page=${currentPage}` //pega as informações do servidor e passa para o .then
    )
      .then(JSONresponse => JSONresponse.json()) //pega a resposta do servidor em JSON, transoforma em um objeto e retorna essa informação para o próximo .then
      .then(response => setDataOfCurrentPage(response)) //pega a resposta ja transformada e armazena no estado dataOfCurrentPage

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]) //dizer para o useEffect ser executado toda vez q o valor do estado currentPage for alterado

  function handlePageChange(value) {
    //função q vai lidar com a troca de páginas
    if (
      value + currentPage >= 1 &&
      value + currentPage <= calculateNumberOfPages
    ) {
      //não podemos permitir q o usuário tente acessar uma página com um valor menor do que 1

      setCurrentPage(currentPage + value) //troca o valor do estado q armazena o número da página atual
    }
    return // sai da função e não faz nada
  }

  return (
    <>
      <Header>
        <UnstyledLink to="/home">
          <BackArrow />
        </UnstyledLink>
        <HeaderName>
          {user[route]} {route}
        </HeaderName>
      </Header>

      <Body>
        <div style={style}>
          {dataOfCurrentPage &&
            route !== 'repos' &&
            dataOfCurrentPage.map(data => <BoxListNames data={data} />)}
          {dataOfCurrentPage &&
            route === 'repos' &&
            dataOfCurrentPage.map(data => <IconsRepository data={data} />)}
        </div>
        <BoxButton>
          <Button onClick={() => handlePageChange(-1)}>Anterior</Button>
          <Button onClick={() => handlePageChange(1)}>Próximo</Button>
        </BoxButton>
        <Navbar />
      </Body>
    </>
  )
}
