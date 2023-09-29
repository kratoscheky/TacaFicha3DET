import {CloseI, Container, ContainerButton, Icon} from "./styles";
import {useState} from "react";
import IconDice from '../../images/IconDice.png'
import {useFicha} from "../../context/ficha.context";

export const TacaDado = () => {
  const {atributos} = useFicha()
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
        <iframe src={`https://dados.tacaficha.com.br?p=${atributos.poder}&h=${atributos.habilidade}&r=${atributos.resistencia}`} width='100%' height='100%' />
        <CloseI onClick={() => setExibirDados(false)} />
      </Container>
    </>
  )
}