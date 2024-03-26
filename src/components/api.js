/*const options = { //const que armazena um objeto JavaScript.
    method: 'GET', //(requisição http tipo get)associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada. 
    headers: {
      accept: 'application/json', //queremos receber os dados da resposta no formato JSON.
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0' 
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options) //para fazer uma requisição HTTP para a API do The Movie Database (TMDb) com a URL fornecida e as opções definidas anteriormente
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    //criar meu código em app.js com base nas informações que estão aqui, excluir assim que criar em app js


    //criar uma função que englobe tudo, retirar o console log e o response será response.result pra realmente retornar a informação,  exportar essa função pro app.js, no app js importar a função */
    export function fetchMovies() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0'
        }
      };
    
      return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => {
          const movies = response.results; 
          return movies;
        })
        .catch(err => console.error(err));
    }
    

    