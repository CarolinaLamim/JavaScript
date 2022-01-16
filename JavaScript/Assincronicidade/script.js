// promise - objeto de processamento assíncrono, inicialmente valor desconhecido, pode ser resolvida ou rejeitada.
// async existe para definir a função assincrona
// await só funciona para promises, para o código para resolver a promise
//uma promise chama outra promise

/* Consumindo API's
API - Application Programming Interface 
é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end. 
Consegue acessá-la por meio de URLs.

JSON: JavaScript Object Notation
é comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando recebemos. 

fetch - consumindo APIS


*/

// trazem dados de bancos de dados. 
fetch(url, option)//retorna uma promise
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://endereco-api.com/',{
    method:'GET',
    cache: 'no-cache',
})
  .then(response => response.json())
  .then(json => console.log(json))

  
fetch('https://endereco-api.com/',{
    method:'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(json => console.log(json))