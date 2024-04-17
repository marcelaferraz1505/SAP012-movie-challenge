// import { fetchMovies, fetchMovieDetails } from './api.js';
// import fetchMock from 'jest-fetch-mock';

// // Configura o mock do fetch antes de cada teste
// beforeEach(() => {
//   fetchMock.enableMocks();
// });

// // Limpa o mock do fetch após cada teste
// afterEach(() => {
//   fetchMock.mockClear();
// });

// // Teste para fetchMovies
// test('fetchMovies retorna uma lista de filmes', async () => {
//   // Simula a resposta da API
//   const mockResponse = {
//     results: [
//       { id: 1, title: 'Filme 1' },
//       { id: 2, title: 'Filme 2' }
//     ]
//   };

//   // Configura o mock para retornar a resposta simulada
//   fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

//   // Chama a função fetchMovies
//   const movies = await fetchMovies();

//   // Verifica se o fetch foi chamado com a URL correta
//   expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
//   ));

//   // Verifica se a função retornou os filmes corretos
//   expect(movies).toEqual(mockResponse.results);
// });

// // Teste para fetchMovieDetails
// test('fetchMovieDetails retorna os detalhes do filme', async () => {
//   // Simula a resposta da API
//   const mockResponse = { id: 1, title: 'Filme 1', overview: 'Descrição do filme 1' };

//   // Configura o mock para retornar a resposta simulada
//   fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

//   // Chama a função fetchMovieDetails com um ID de filme específico
// //   const movieDetails = await fetchMovieDetails(1);

//   // Verifica se o fetch foi chamado com a URL correta
//   expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining(
// ));

//   // Verifica se a função retornou os detalhes do filme corretos
//   expect(movieDetails).toEqual(mockResponse);
// });


import { fetchMovies, fetchMovieDetails } from './api.js';
import fetchMock from 'jest-fetch-mock';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json', // Define o tipo de conteúdo aceito como JSON
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzllMzQxNTk2MTZjNDEyYTE5YmI2MTY1ZjQxMTgwZSIsInN1YiI6IjY1ZjlmNGQwNWZmMzRlMDE2M2I1ZDUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_AZPCdoockN7tiaRFs-8bTbKIKJy14iaBo8pV7i8W0' // Chave de autorização necessária para acessar a API
    }
  };
// Configura o mock do fetch antes de cada teste
beforeEach(() => {
  fetchMock.enableMocks();
});

// Limpa o mock do fetch após cada teste
afterEach(() => {
  fetchMock.mockClear();
});

// Teste para fetchMovies
test('fetchMovies retorna uma lista de filmes', async () => {
  // Simula a resposta da API
  const mockResponse = {
    results: [
      { id: 1, title: 'Filme 1' },
      { id: 2, title: 'Filme 2' }
    ]
  };

  // Configura o mock para retornar a resposta simulada
  fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

  // Chama a função fetchMovies
  const movies = await fetchMovies();

  // Verifica se o fetch foi chamado com a URL correta
  expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  ), options);

  // Verifica se a função retornou os filmes corretos
  expect(movies).toEqual(mockResponse.results);
});

// Teste para fetchMovieDetails
test('fetchMovieDetails retorna os detalhes do filme', async () => {
  // Simula a resposta da API
  const mockResponse = { id: 1, title: 'Filme 1', overview: 'Descrição do filme 1' };

  // Configura o mock para retornar a resposta simulada
  fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

  // Chama a função fetchMovieDetails com um ID de filme específico
  const movieDetails = await fetchMovieDetails(1);

  // Verifica se o fetch foi chamado com a URL correta
  expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining(`https://api.themoviedb.org/3/movie/1` 
  ),options);

  // Verifica se a função retornou os detalhes do filme corretos
  expect(movieDetails).toEqual(mockResponse);
});
 