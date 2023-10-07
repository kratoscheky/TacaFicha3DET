export function ContadorPericiaVantagemDesvantagem(array){
  const novoArray = [];
  const contador = {};
  
  array.forEach(item => {
    if (!contador[item.Nome]) {
      contador[item.Nome] = 0;
    }
    contador[item.Nome]++;
  });
  
  for (const nome in contador) {
    novoArray.push({ Nome: nome, Total: contador[nome] });
  }

  return novoArray;
}
