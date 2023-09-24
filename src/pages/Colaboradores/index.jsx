import {Container} from "./styles.jsx";

export const Colaboradores = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Container>
        <header>
          <h1>Colaboradores do TacaFicha</h1>
        </header>
        <p
          style={{
            color: "#FFF",
            textAlign: "center",
          }}
        >
          <br />
          Este site foi criado por{" "}
          <a
            style={{color: "#FFFFFF"}}
            href="https://twitter.com/Kratoscheky"
          >
            @kratoscheky
          </a>{" "}
          com colaboração de{" "}
          <a style={{color: "#FFFFFF"}} href="https://twitter.com/OvelhaDev">
            @OvelhaDev
          </a>{" "}
          e{" "}
          <a
            style={{color: "#FFFFFF"}}
            href="https://twitter.com/kpoper_cansada"
          >
            @kpoper_cansada
          </a>
        </p>
        <br/>
        <p style={{
          color: '#FFF'
        }}>
          Design feito por
          <a style={{color: "#FFFFFF", paddingLeft: '8px', paddingRight: '8px'}}
             href="https://www.facebook.com/groups/161485003862799/user/100086200497493/">
            Lungas Neto
          </a>
          e
          <a style={{color: "#FFFFFF", paddingLeft: '8px'}} href="https://twitter.com/Kratoscheky">
            Mauricio Soares
          </a>
        </p>
      </Container>
    </div>
  )
}