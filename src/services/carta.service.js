import axios from "axios";

export const GetCarta = async (id) => {
  return await axios.get(`https://api.tacaficha.com.br/api/carta?id=${id}`);
}

export const AddCarta = async (json) => {
  return await axios.post('https://api.tacaficha.com.br/api/carta', json)
}

export const DeleteCarta = async (id) => {
  return await axios.delete(`https://api.tacaficha.com.br/api/carta?id=${id}`);
}

export const GetColecao = async (id) => {
  return await axios.get(`https://api.tacaficha.com.br/api/colecao?id=${id}`).then((response) => response.data);
}