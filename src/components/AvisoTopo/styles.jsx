import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    div{
        max-width: 1200px;
        padding: 20px;
        background: #6F0062;
    }
    b{
      color: #FFF;
    }
    h1{
        color: #FFBF22;
        text-transform: uppercase;
    }
    p{
        color: #FFF;
    }
    a{
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
    }
    img{
      max-height: 100px;
    }
`