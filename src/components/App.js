/*
//importar a função do api.js e executar ela
import { fetchMovies } from './api'; // Importa a função fetchMovies

// Chama a função fetchMovies para executar o código
fetchMovies()
  .then(movies => {
    console.log(movies); // Ou faça o que desejar com os filmes
  })
  .catch(error => console.error(error));

const App = () => {
  // Lista de objetos com os atributos dos filmes
  const listaFilmes = [ //apagar esse array e utilizar o retorno da minha função que está na minha api.js fazer isso escrevendo o nome da função e ()
    { titulo: 'Filme 1', ano: 2020, descricao: 'Descrição do Filme 1' },
    { titulo: 'Filme 2', ano: 2021, descricao: 'Descrição do Filme 2' },
    { titulo: 'Filme 3', ano: 2022, descricao: 'Descrição do Filme 3' },
    // Adicione quantos filmes desejar...
  ];

  // Elemento para armazenar os cards
  const container = document.createElement('div');

  // Iterar sobre a lista de filmes
  for (let i = 0; i < listaFilmes.length; i++) {
    const filme = listaFilmes[i];

    // Criação do elemento de card
    const card = document.createElement('div');
    card.className = 'card'; // Adicione uma classe para estilização no CSS

    // Conteúdo do card
    const title = document.createElement('h2');
    title.textContent = filme.titulo;

    const releaseYear = document.createElement('h3');
    releaseYear.textContent = filme.ano;

    const description = document.createElement('p');
    description.textContent = filme.descricao;

    // Adicionando conteúdo ao card
    card.appendChild(title);
    card.appendChild(releaseYear);
    card.appendChild(description);

    // Adiciona o card ao container
    container.appendChild(card);
  }

  return container;
};

export default App;*/

import { fetchMovies } from './api';

// Função para criar um elemento de card com os dados do filme
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h2');
  title.textContent = movie.titulo; // Alterado para 'titulo'

  const releaseYear = document.createElement('h3');
  releaseYear.textContent = movie.ano; // Alterado para 'ano'

  const description = document.createElement('p');
  description.textContent = movie.descricao; // Alterado para 'descricao'

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




