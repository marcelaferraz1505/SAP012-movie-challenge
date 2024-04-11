// Função para criar um cartão de filme
export function createMovieCard(movie) {
  // Cria um elemento <div> para o cartão
  const card = document.createElement('div');
  card.className = 'card'; // Adiciona a classe 'card' ao cartão

  // Verifica se o filme tem uma imagem de capa
  if (movie.poster_path) {
    // Se tiver, cria uma imagem e define seu atributo src com base no poster_path do filme
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // URL base + poster_path
    img.alt = movie.title; // Define o texto alternativo da imagem como o título do filme
    card.appendChild(img); // Adiciona a imagem ao cartão
  } else {
    // Se não tiver uma imagem de capa, cria um parágrafo com uma mensagem informando que a imagem não está disponível
    const noImageText = document.createElement('p');
    noImageText.textContent = 'Imagem não disponível';
    card.appendChild(noImageText); // Adiciona o parágrafo ao cartão
  }

  // Cria um link para os detalhes do filme
  const anchor = document.createElement('a');
  anchor.href = `#${movie.id}`; // Define o href do link como o ID do filme
  anchor.appendChild(card); // Adiciona o cartão como filho do link

  return anchor; // Retorna o link como resultado da função
}

// Função para criar os detalhes de um filme
export function createMovieDetails(movie) {
  // Cria um elemento <div> para os detalhes do filme
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'movie-details'; // Adiciona a classe 'movie-details' ao contêiner

  // Cria um título (<h2>) com o título do filme
  const title = document.createElement('h2');
  title.textContent = movie.title; // Define o texto do título como o título do filme

  // Cria um parágrafo (<p>) com a visão geral do filme
  const overview = document.createElement('p');
  overview.textContent = movie.overview; // Define o texto do parágrafo como a visão geral do filme

  // Cria um parágrafo (<p>) com a data de lançamento do filme
  const releaseDate = document.createElement('p');
  releaseDate.textContent = `Release Date: ${movie.release_date}`; // Define o texto do parágrafo como a data de lançamento do filme

  // Adiciona os elementos criados ao contêiner de detalhes
  detailsContainer.appendChild(title);
  detailsContainer.appendChild(overview);
  detailsContainer.appendChild(releaseDate);

  return detailsContainer; // Retorna o contêiner de detalhes como resultado da função
}
