// Popula as informações do artista
document.getElementById("artist-name").textContent = artistData.name;
document.getElementById("artist-age").textContent = artistData.age;
document.getElementById("artist-location").textContent = artistData.location;
document.getElementById("artist-label").textContent = artistData.label;

// Popula álbuns
const albumsTable = document.getElementById("albums-table");
artistData.albums.forEach(album => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${album.image}" alt="Album Image" class="discography-album-img"></td>
    <td>${album.title}</td>
    <td>${album.year}</td>
    <td>${album.label}</td>`;
  albumsTable.appendChild(row);
});

// Popula singles
const singlesTable = document.getElementById("singles-table");
artistData.singles.forEach(single => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${single.image}" alt="Single Image" class="discography-album-img"></td>
    <td>${single.title}</td>
    <td>${single.year}</td>
    <td>${single.label}</td>`;
  singlesTable.appendChild(row);
});

// Popula turnês e eventos
const toursGrid = document.getElementById("tours-grid");
artistData.tours.forEach(tour => {
  const tourCard = document.createElement("div");
  tourCard.classList.add("events-card");
  tourCard.innerHTML = `
    <img src="${tour.image}" alt="Tour Image" class="events-img">
    <h1 class="events-title">${tour.title}</h1>
    <h1 class="events-info">${tour.year}</h1>
    <h1 class="events-info">${tour.label}</h1>`;
  toursGrid.appendChild(tourCard);
});

// Popula filmes
const filmsGrid = document.getElementById("films-grid");
artistData.films.forEach(film => {
  const filmCard = document.createElement("div");
  filmCard.classList.add("events-card");
  filmCard.innerHTML = `
    <img src="${film.image}" alt="Film Poster" class="events-img">
    <h1 class="events-title">${film.title}</h1>
    <h1 class="events-info">${film.year}</h1>
    <h1 class="events-info">${film.label}</h1>`;
  filmsGrid.appendChild(filmCard);
});
