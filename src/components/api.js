

// Esta função é responsável por fazer uma solicitação à API do TMDB para obter uma lista de filmes populares.
// Retorna uma Promise que resolve com os filmes obtidos da API ou rejeita com um erro se ocorrer algum problema durante a solicitação.

export function fetchMovies() { //é uma API de busca do Javascript que permite realizar requisições HTTP assíncronas entre uma aplicação web e recursos externos 
  const options = {
    method: 'GET', //fazer requisições HTTP para obter dados de um servidor
    headers: {
      accept: 'application/json', //é um formato de texto leve para armazenar e trocar dados
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0' // Chave de autorização necessária para acessar a API
    }
  };

  // Realiza a solicitação à API do TMDB para obter os filmes populares com base nas opções fornecidas.
  return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    // Converte a resposta da API em formato JSON.
    .then(response => response.json())
    // Extrai os resultados da resposta JSON, que contêm os filmes.
    .then(response => {
      const movies = response.results; // Extrai a lista de filmes dos resultados.
      return movies; // Retorna a lista de filmes.
    })
    // Captura e trata qualquer erro que ocorra durante a solicitação.
    .catch(err => console.error(err)); // Registra o erro no console, se houver.
}

export function fetchMovieDetails(movieId) {
  // Configuração das opções para a solicitação, incluindo método, cabeçalhos e autorização.
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json', // Define o tipo de conteúdo aceito como JSON
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0' // Chave de autorização necessária para acessar a API
    }
  };
  // Realiza a solicitação à API do TMDB para obter os filmes populares com base nas opções fornecidas.
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`, options)
    // Converte a resposta da API em formato JSON.
    .then(response => response.json())
    // Extrai os resultados da resposta JSON, que contêm os filmes.
    .then(response => {
      // const movies = response.results; // Extrai a lista de filmes dos resultados.
      // return movies; // Retorna a lista de filmes. 
      console.log(response)
      return response;
    })
    // Captura e trata qualquer erro que ocorra durante a solicitação.
    .catch(err => console.error(err)); // Registra o erro no console, se houver.
}




