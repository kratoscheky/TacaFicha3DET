import styled from 'styled-components';

export const ContainerButtons = styled.div`
    display: flex;
    gap: 8px;
    padding: 16px 0;
    flex-wrap: wrap;
`

export const Container = styled.div`
  display: flex;
  gap: 20px;
  overflow: auto;
  align-items: flex-end;
  zoom: 70%;
`

export const ButtonFicha = styled.button`
    font-weight: 800;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: #6F0062;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    font-size: 12px;
    padding: 8px 15px;
    border-radius: 4px;
    text-decoration: none;
    fill: #fff;
    text-align: center;
    transition: all .3s;
    border: none;
    order: 10;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    width: fit-content;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    max-height: 40px;
`