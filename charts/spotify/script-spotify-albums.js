// artist-data.js
var tabelaDados = [
  {
    posicao: 1,
    musica: "The Drive",
    artista: "Daniel"
  },
  {
    posicao: 2,
    musica: "HONEY",
    artista: "Bianca"
  },
  {
    posicao: 3,
    musica: "Red Flags",
    artista: "Blair"
  },
  {
    posicao: 4,
    musica: "LATINAJE",
    artista: "Emília Ramirez", link: "https://discord.com/channels/1279249850185154704/1279484081792487541/1560480051735167092"
  },
  {
    posicao: 5,
    musica: "House of the Rising Sun",
    artista: "Daniel"
  },
  {
    posicao: 6,
    musica: "Voz do Brasil",
    artista: "Nielly", link: "https://discord.com/channels/1279249850185154704/1279482834540826696/1560136549625241721"
  },
  {
    posicao: 7,
    musica: "Overgrown",
    artista: "Eric"
  },
  {
    posicao: 8,
    musica: "SUMMER REMAINS",
    artista: "Nate"
  },
  {
    posicao: 9,
    musica: "Eletrogasm",
    artista: "Aiddan King", link: "https://discord.com/channels/1279249850185154704/1279482057105342567/1557209440548298783"
  },
  {
    posicao: 10,
    musica: "THE COUNTRY CLUB",
    artista: "Millie"
  },
];

// main.js
function obterImagemPorTituloEArtista(titulo, artistaCompleto) {
  var artistasArray = artistaCompleto.split(",").map(a => a.trim());

  var tituloSemFeat = titulo.replace(/\(feat\. [^\)]+\)/i, "").trim();

  for (var i = 0; i < albumsData.length; i++) {
    var album = albumsData[i];

    var albumTituloSemFeat = album.title.replace(/\(feat\. [^\)]+\)/i, "").trim();

    if (albumTituloSemFeat === tituloSemFeat) {
      if (artistasArray.includes(album.artist)) {
        return album.image;
      }

      for (var feat of album.featuring) {
        if (artistasArray.includes(feat)) {
          return album.image;
        }
      }
    }
  }
  return "";
}

function atualizarTabela() {
  tabelaDados.forEach(function(dado) {
    var posicaoCell = document.getElementById("pos" + dado.posicao);
    var imagemCell = document.getElementById("imagem" + dado.posicao);
    var musicaCell = document.getElementById("song" + dado.posicao);
    var artistaCell = document.getElementById("artist" + dado.posicao);

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = obterImagemPorTituloEArtista(dado.musica, dado.artista);
    musicaCell.textContent = dado.musica;
    if (dado.link) {
      const link = document.createElement('a');
      link.href = dado.link; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = dado.musica;
      musicaCell.replaceChildren(link);
    }
    artistaCell.textContent = dado.artista;
  });
}

function atualizarTop1() {
  var top1 = tabelaDados[0];
  var sections = document.querySelectorAll(".section");

  sections.forEach(function(section) {
    var logo = section.querySelector(".logo");
    var albumCover = section.querySelector(".album-cover");
    var musicTitle = section.querySelector(".music-title");
    var artistName = section.querySelector(".artist-name");
    var position = section.querySelector(".top1-number");

    albumCover.src = obterImagemPorTituloEArtista(top1.musica, top1.artista);
    musicTitle.textContent = top1.musica;
    artistName.textContent = top1.artista;
    position.textContent = "#" + top1.posicao;
  });
}

atualizarTabela();
atualizarTop1();
