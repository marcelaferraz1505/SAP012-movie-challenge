export function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  // Verifica se o filme tem um poster_path
  if (movie.poster_path) {
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // URL base + poster_path
    img.alt = movie.title; // Define o atributo alt da imagem como o título do filme
    card.appendChild(img);
  } else {
    // Caso não haja poster_path, você pode adicionar uma imagem padrão ou uma mensagem de texto indicando a falta de imagem
    const noImageText = document.createElement('p');
    noImageText.textContent = 'Imagem não disponível';
    card.appendChild(noImageText);
  }

  const anchor = document.createElement('a');
  anchor.href = `#${movie.id}`; // Corrige a criação do link para os detalhes do filme
  anchor.appendChild(card);

  return anchor;
}

export function createMovieDetails(movie) {
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'movie-details';

  const title = document.createElement('h2');
  title.textContent = movie.title;

  const overview = document.createElement('p');
  overview.textContent = movie.overview;

  const releaseDate = document.createElement('p');
  releaseDate.textContent = `Release Date: ${movie.release_date}`;

  detailsContainer.appendChild(title);
  detailsContainer.appendChild(overview);
  detailsContainer.appendChild(releaseDate);

  return detailsContainer;
}
