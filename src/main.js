/*import App from './components/App.js';

document.getElementById('root').appendChild(App());
// App.js


// index.js*/

/*import App from './components/App.js';

// Obtém o elemento com o id "root" e adiciona o componente App à ele
document.getElementById('root').appendChild(App());*/


import { fetchMovies } from './components/api.js';

// Função para criar um elemento de card com os dados do filme
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h2');
  title.textContent = movie.title;

  const releaseYear = document.createElement('h3');
  releaseYear.textContent = movie.release_date;

  const description = document.createElement('p');
  description.textContent = movie.overview;

  card.appendChild(title);
  card.appendChild(releaseYear);
  card.appendChild(description);

  return card;
}

// Função para buscar os filmes e renderizar na página
function renderMovies() {
  const rootElement = document.getElementById('movies-container');

  // Limpa o conteúdo do elemento root
  rootElement.innerHTML = '';

  // Busca os filmes
  fetchMovies()
    .then(movies => {
      // Cria um container para armazenar os cards
      const container = document.createElement('div');

      // Itera sobre os filmes e cria os cards
      movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
      });

      // Adiciona o container com os cards ao elemento root
      rootElement.appendChild(container);
    })
    .catch(error => console.error(error));
}

// Executa a função para renderizar os filmes quando o script é carregado
renderMovies();
