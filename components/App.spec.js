// import App from './App.js';

// describe('App', () => {
//   it('should render without crashing', () => {
//     const el = App();
//     expect(el instanceof HTMLElement).toBe(true);
//   });
// });


import { createMovieCard, createMovieDetails } from './App.js';

// Descreve os testes para a função createMovieCard
describe('createMovieCard', () => {

  // Define um caso de teste para verificar se a função createMovieCard cria um cartão de filme sem erros
  it('should create a movie card without crashing', () => {

    // Cria um objeto simulado de filme com dados fictícios
    const movie = { 
      poster_path: 'poster.jpg', 
      title: 'Movie Title', 
      overview: 'Movie Overview', 
      release_date: '2024-04-15'
    };

    // Chama a função createMovieCard com o objeto simulado de filme e armazena o resultado em card
    const card = createMovieCard(movie);

    // Verifica se o resultado retornado pela função é uma instância de HTMLElement
    expect(card instanceof HTMLElement).toBe(true);
  });
});

// Descreve os testes para a função createMovieDetails
describe('createMovieDetails', () => {

  // Define um caso de teste para verificar se a função createMovieDetails cria detalhes de filme sem erros
  it('should create movie details without crashing', () => {

    // Cria um objeto simulado de filme com dados fictícios
    const movie = { 
      title: 'Movie Title', 
      overview: 'Movie Overview', 
      release_date: '2024-04-15'
    };

    // Chama a função createMovieDetails com o objeto simulado de filme e armazena o resultado em details
    const details = createMovieDetails(movie);

    // Verifica se o resultado retornado pela função é uma instância de HTMLElement
    expect(details instanceof HTMLElement).toBe(true);
  });
});
