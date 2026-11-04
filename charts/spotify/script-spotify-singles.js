var tabelaDados = [
  {
    "posicao": 1,
    "musica": "Who's That DJ?",
    "artista": "Liberty",
    "capa": "https://i.imgur.com/2jYc07o.jpeg"
  },
  {
    "posicao": 2,
    "musica": "Voz do Brasil",
    "artista": "Nielly",
    "capa": "https://i.imgur.com/uZemeHK.png"
  },
  {
    "posicao": 3,
    "musica": "Nightmares",
    "artista": "Logan",
    "capa": "https://i.imgur.com/43L8OKY.png"
  },
  {
    "posicao": 4,
    "musica": "Candy",
    "artista": "Millie",
    "capa": "https://i.imgur.com/WLvyscH.png"
  },
  {
    "posicao": 5,
    "musica": "Carllie",
    "artista": "Liberty",
    "capa": "https://i.imgur.com/Lwde55l.png"
  },
  {
    "posicao": 6,
    "musica": "I'm Not That Girl",
    "artista": "Maeve",
    "capa": "https://i.imgur.com/UpUESsA.jpeg"
  },
  {
    "posicao": 7,
    "musica": "Hero",
    "artista": "Daniel",
    "capa": "https://i.imgur.com/jQZfMAw.png"
  },
  {
    "posicao": 8,
    "musica": "Postcards",
    "artista": "Hazel Hansen",
    "capa": "https://i.imgur.com/EIKnQDt.jpeg"
  },
  {
    "posicao": 9,
    "musica": "Illusion",
    "artista": "Hazel Hansen, Millie",
    "capa": "https://i.imgur.com/xkyQrbf.png"
  },
  {
    "posicao": 10,
    "musica": "Eletrogasm",
    "artista": "Aiddan King",
    "capa": "https://i.imgur.com/xkyQrbf.png"
  }
];

function obterImagemPorTituloEArtista(titulo, artistaCompleto) {
  var artistasArray = artistaCompleto.split(",").map(a => a.trim());

  var tituloSemFeat = titulo.replace(/\(feat\. [^\)]+\)/i, "").trim();

  for (var i = 0; i < singlesData.length; i++) {
    var single = singlesData[i];

    var singleTituloSemFeat = single.title.replace(/\(feat\. [^\)]+\)/i, "").trim();

    if (singleTituloSemFeat === tituloSemFeat) {
      if (artistasArray.includes(single.artist)) {
        return single.image;
      }

      for (var feat of single.featuring) {
        if (artistasArray.includes(feat)) {
          return single.image;
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
    var imagem = dado.capa || obterImagemPorTituloEArtista(dado.musica, dado.artista);
    imagemCell.hidden = !imagem;
    if (imagem) imagemCell.src = imagem;
    else imagemCell.removeAttribute("src");
    musicaCell.textContent = dado.musica;
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

    var imagem = top1.capa || obterImagemPorTituloEArtista(top1.musica, top1.artista);
    albumCover.hidden = !imagem;
    if (imagem) albumCover.src = imagem;
    else albumCover.removeAttribute("src");
    musicTitle.textContent = top1.musica;
    artistName.textContent = top1.artista;
    position.textContent = "#" + top1.posicao;
  });
}

atualizarTabela();
atualizarTop1();

