import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  * {
    text-decoration: none;
  }

  div {
    max-width: 1200px;
    padding: 20px;
    background: #1f5287;
    border-radius: 0 0 8px 8px;

    a b {
      color: #ffffff;
    }

  }

  b {
    color: #FFF;
  }

  h1 {
    color: #ffffff;
    text-transform: uppercase;
  }

  p {
    color: #FFF;
  }

  img {
    max-height: 100px;
  }
`

export const Button = styled.button`
  font-weight: 600;
  text-shadow: 0 0 16px rgba(0, 0, 0, .53);
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  text-decoration: none;
  max-height: 48px;
  fill: #fff;
  text-align: center;
  transition: all .3s;
  border: none;
  flex-grow: 1;
  order: 10;
  display: inline-block;
  color: #1f5186;
  cursor: pointer;
  width: fit-content;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  max-width: fit-content;

  :visited {
    color: #1f5186;
  }
`