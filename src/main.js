// Importa as funções necessárias para obter dados dos filmes e criar elementos HTML para exibi-los
import { fetchMovies, fetchMovieDetails } from './components/api.js';
import { createMovieCard, createMovieDetails } from './components/App.js';

// Função para renderizar a lista de filmes na página
function renderMovies() {
  // Obtém o elemento onde os filmes serão renderizados
  const rootElement = document.getElementById('movies-container');

  // Chama a função para obter os dados dos filmes da API
  fetchMovies()
    .then(movies => {
      // Cria um contêiner para os filmes
      const container = document.createElement('div');

      // Para cada filme, cria um elemento HTML de cartão e adiciona ao contêiner
      movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
      });

      // Adiciona o contêiner ao elemento raiz
      rootElement.appendChild(container);
    })
    .catch(error => console.error(error)); // Captura erros de requisição
}

// Função para renderizar os detalhes de um filme na página
function renderMovieDetails() {
  // Obtém o elemento onde os detalhes do filme serão renderizados
  const rootElement = document.getElementById('movies-container');
  
  // Obtém o ID do filme da URL
  const movieId = window.location.hash.substring(1);

  // Se houver um ID de filme na URL, busca os detalhes do filme
  if (movieId) {
    fetchMovieDetails(movieId)
      .then(movie => {
        // Cria os elementos HTML para exibir os detalhes do filme
        const details = createMovieDetails(movie);
        // Limpa o conteúdo atual e adiciona os detalhes do filme ao elemento raiz
        rootElement.innerHTML = '';
        rootElement.appendChild(details);
      })
      .catch(error => console.error(error)); // Captura erros de requisição
  } else {
    // Se não houver ID de filme na URL, renderiza a lista de filmes
    renderMovies();
  }
}

// Função para lidar com mudanças na URL da página
function handleHashChange() {
  // Adiciona um ouvinte de evento para detectar mudanças no hash da URL
  window.addEventListener('hashchange', renderMovieDetails);
}

// Quando o conteúdo do documento HTML é carregado...
document.addEventListener('DOMContentLoaded', () => {
  // ...renderiza os detalhes do filme e adiciona o ouvinte de evento para mudanças na URL
  renderMovieDetails();
  handleHashChange();
});
