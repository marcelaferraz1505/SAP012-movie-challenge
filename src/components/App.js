export function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  if (movie.poster_path) {
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; //url base + poster path
    img.alt = movie.title; //texto alt
    card.appendChild(img);
  } else {
    const noImageText = document.createElement('p');
    noImageText.textContent = 'Imagem não disponível';
    card.appendChild(noImageText);
  }

  //link detalhes filme
  const anchor = document.createElement('a');
  anchor.href = `#${movie.id}`; //destino com id do filme
  anchor.appendChild(card);

  return anchor; // Retorna o link
}


export function createMovieDetails(movie) {
  const detailsContainer = document.createElement('section');
  detailsContainer.className = 'movie-details'; 
  

  const showDetails = document.createElement('div');
  showDetails.className = 'div1'; 
  console.log(showDetails)
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // URL base + poster_path
    img.alt = movie.title; // texto alt
    showDetails.appendChild(img);
  
  const showDetails2 = document.createElement('div');
  showDetails2.className = 'div2'; 
  
  
  const title = document.createElement('h2');
  title.textContent = movie.title; 
  showDetails2.appendChild(title);
  
  const overview = document.createElement('p');
  overview.textContent = movie.overview; 
  showDetails2.appendChild(overview);
  
  const releaseDate = document.createElement('p');
  releaseDate.textContent = `Release Date: ${movie.release_date}`;
  showDetails2.appendChild(releaseDate);
  detailsContainer.appendChild(showDetails);
  detailsContainer.appendChild(showDetails2);
  // Adiciona os elementos criados ao contêiner de detalhes
  return detailsContainer; // Retorna o contêiner de detalhes como resultado da função
}
