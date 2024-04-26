

export function fetchMovies() { //api p buscar requisições (promessa) 
  const options = {
    method: 'GET', //fazer requisições HTTP para obter dados de um servidor
    headers: {
      accept: 'application/json', //é um formato de texto leve para armazenar e trocar dados
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0' // Chave de autorização necessária para acessar a API
    }
  };

  //Solicita a API para obter result dos filmes
  return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    // Converte a resposta da API em formato JSON.
    .then(response => response.json())
    // Extrai os resultados da resposta JSON, que contêm os filmes.
    .then(response => {
      const movies = response.results; // Extrai a lista de filmes dos resultados.
      return movies; // Retorna a lista de filmes.
    })
    // Captura e trata erro no console.
    .catch(err => console.error(err)); 
}

export function fetchMovieDetails(movieId) {
  // opções para solicitação 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json', // Define o tipo de conteúdo aceito como JSON
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0' // Chave de autorização necessária para acessar a API
    }
  };
  // Realiza a solicitação à API 
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`, options)
    // Converte a resposta da API em formato JSON.
    .then(response => response.json())
    // Extrai os resultados da resposta JSON, que contêm os filmes.
    .then(response => {
      
      return response;
    })
    
    .catch(err => console.error(err)); 
}




