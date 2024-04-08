
import { fetchMovies, fetchMovieDetails } from './components/api.js';
import { createMovieCard, createMovieDetails } from './components/App.js';

function renderMovies() {
  const rootElement = document.getElementById('movies-container');

  fetchMovies()
    .then(movies => {
      const container = document.createElement('div');

      movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
      });

      rootElement.appendChild(container);
    })
    .catch(error => console.error(error));
}

function renderMovieDetails() {
  const rootElement = document.getElementById('movies-container');
  const movieId = window.location.hash.substring(1);

  if (movieId) {
    fetchMovieDetails(movieId)
      .then(movie => {
        const details = createMovieDetails(movie);
        rootElement.innerHTML = ''; // Limpa o conteúdo do elemento root
        rootElement.appendChild(details);
      })
      .catch(error => console.error(error));
  } else {
    renderMovies();
  }
}

function handleHashChange() {
  window.addEventListener('hashchange', renderMovieDetails);
}

document.addEventListener('DOMContentLoaded', () => {
  renderMovieDetails();
  handleHashChange();
});
