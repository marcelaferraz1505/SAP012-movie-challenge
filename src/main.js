import { fetchMovies, fetchMovieDetails } from './components/api.js';
import { createMovieCard, createMovieDetails } from './components/App.js';


function renderMovies() { //renderiza o filme no container
  const rootElement = document.getElementById('movies-container');
  fetchMovies() //promessa
    .then(movies => { //resposta
      
      const container = document.createElement('div');

      //percorre todo array de filmes
      movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
      });

      rootElement.appendChild(container);
    })
    .catch(error => console.error(error)); // Captura erros de requisição
}

function renderMovieDetails() {
  const rootElement = document.getElementById('movies-container');
  
  // Obtém o ID do filme da URL
  const movieId = window.location.hash.substring(1);

  // Se id do filme, busca os detalhes 
  if (movieId) {
    fetchMovieDetails(movieId)
      .then(movie => {
        //cria html p detalhes 
        const details = createMovieDetails(movie);
        //limpa cont, adc raiz
        rootElement.innerHTML = '';
        rootElement.appendChild(details);
      })
      .catch(error => console.error(error)); // Captura erros de requisição
  } else {
    //Se não ID, renderiza lista de filmes
    renderMovies();
  }
}

//mudanças na URL da página
function handleHashChange() {
  //ouvinte de evento de mudança
  window.addEventListener('hashchange', renderMovieDetails);
}
//carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  // ...renderiza detalhes e adc mudança
  renderMovieDetails();
  handleHashChange();
});

function clearAndReturnToHomePage() {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = '';
  
  // Retorna à página inicial
  window.location.href = '/';
}

// Adiciona um ouvinte de evento ao botão "Mostrar Todos"
const showAllButton = document.getElementById('showAllButton');
showAllButton.addEventListener('click', clearAndReturnToHomePage);
