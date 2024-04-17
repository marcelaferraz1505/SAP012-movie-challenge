// const container = document.createElement('div');

//   // Iterar sobre a lista de filmes
//   for (let i = 0; i < listaFilmes.length; i++) {
//     const filme = listaFilmes[i];

//     // Criação do elemento de card
//     const card = document.createElement('div');
//     card.className = 'card'; // Adicione uma classe para estilização no CSS

//     // Conteúdo do card
//     const title = document.createElement('h2');
//     title.textContent = filme.titulo;

//     const releaseYear = document.createElement('h3');
//     releaseYear.textContent = filme.ano;

//     const description = document.createElement('p');
//     description.textContent = filme.descricao;

//     // Adicionando conteúdo ao card
//     card.appendChild(title);
//     card.appendChild(releaseYear);
//     card.appendChild(description);

//     // Adiciona o card ao container
//     container.appendChild(card);
//   }

//   return container;
// };

// export default App;

// export const Card = () => {
//     const card = document.createElement('div');
//     card.className = 'container-card'; // Adicione uma classe para estilização no CSS

//     data.innerHTML += `
//     <h2>titulo: ${item.title} </h2>
//     <h3>data: ${item.release_year} </h3>
//     <p>descrição: ${item.description} </p>
//     `;
// }