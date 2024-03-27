

//import { fetchMovies } from './api';

// Função para criar um elemento de card com os dados do filme
// function createMovieCard(movie) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   const title = document.createElement('h2');
//   title.textContent = movie.titulo; // Alterado para 'titulo'

//   const releaseYear = document.createElement('h3');
//   releaseYear.textContent = movie.ano; // Alterado para 'ano'

//   const description = document.createElement('p');
//   description.textContent = movie.descricao; // Alterado para 'descricao'

//   card.appendChild(title);
//   card.appendChild(releaseYear);
//   card.appendChild(description);

//   return card;
// }

// // Função para buscar os filmes e renderizar na página
// function renderMovies() {
//   const container = document.getElementById('movies-container');

//   // Limpa o conteúdo do container
//   container.innerHTML = '';

//   // Busca os filmes
//   fetchMovies()
//     .then(movies => {
//       // Itera sobre os filmes e cria os cards
//       movies.forEach(movie => {
//         const card = createMovieCard(movie);
//         container.appendChild(card);
//       });
//     })
//     .catch(error => console.error(error));
// }

// // Executa a função para renderizar os filmes quando o script é carregado
// renderMovies();

import { fetchMovies } from './api';

// Função para criar um elemento de card com os dados do filme, incluindo a imagem do poster
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';
console.log(card)
  // Adiciona a imagem do poster do filme
  /*if (poster_path) { // Verifica se o filme tem um poster_path
    const img = document.createElement('img');
    img.src=`https://image.tmdb.org/t/p/w500/${poster_path}`; // URL base + poster_path
    img.alt = movie.title; // Define o atributo alt da imagem como o título do filme
    card.appendChild(img);
  }
  else { result = 'erro'

  };*/
  if (movie) {
    const img = document.createElement('img');
    console.log('123=', movie)
    img.src = `https://image.tmdb.org/t/p/w500/${backdrop_path}`; // URL base + poster_path
    img.alt = movie.title; // Define o atributo alt da imagem como o título do filme
    card.appendChild(img);
    console.log(img)
  } else {
    console.error('Erro: Filme sem imagem do poster');
  }

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
  const container = document.getElementById('movies-container');

  // Limpa o conteúdo do container
  container.innerHTML = '';

  // Busca os filmes
  fetchMovies()
    .then(movies => {
      // Itera sobre os filmes e cria os cards
      movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
      });
    })
    .catch(error => console.error(error));
}

// Executa a função para renderizar os filmes quando o script é carregado
renderMovies();





