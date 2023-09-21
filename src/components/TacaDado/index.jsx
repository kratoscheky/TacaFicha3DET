import {CloseI, Container, ContainerButton, Icon} from "./styles";
import {useState} from "react";
import IconDice from '../../images/IconDice.png'

export const TacaDado = () => {
  const [exibirDados, setExibirDados] = useState(false);

  if(!exibirDados)
    return (
      <ContainerButton>
        <Icon onClick={() => setExibirDados(true)} src={IconDice} />
      </ContainerButton>
    )

  return (
    <>
      <Container>
        <iframe src='https://dados.tacaficha.com.br' width='100%' height='100%' />
        <CloseI onClick={() => setExibirDados(false)} />
      </Container>
    </>
  )
}