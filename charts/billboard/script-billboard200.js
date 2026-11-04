var tabelaDados = [
  { posicao: 1, album: "The Drive", artista: "Daniel"},
  { posicao: 2, album: "HONEY", artista: "Bianca" },
  { posicao: 3, album: "Red Flags", artista: "Blair" },
  { posicao: 4, album: "LATINAJE", artista: "Emília Ramirez", link: "https://discord.com/channels/1279249850185154704/1279484081792487541/1560480051735167092" },
  { posicao: 5, album: "House of the Rising Sun", artista: "Daniel" },
  { posicao: 6, album: "Voz do Brasil", artista: "Nielly", link: "https://discord.com/channels/1279249850185154704/1279482834540826696/1560136549625241721" },
  { posicao: 7, album: "Overgrown", artista: "Eric" },
  { posicao: 8, album: "SUMMER REMAINS", artista: "Nate" },
  { posicao: 9, album: "Eletrogasm", artista: "Aiddan King", link: "https://discord.com/channels/1279249850185154704/1279482057105342567/1557209440548298783" },
  { posicao: 10, album: "THE COUNTRY CLUB", artista: "Millie" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("pos" + (index + 1));
    var albumCell = document.getElementById("album" + (index + 1));
    var artistaCell = document.getElementById("artist" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    albumCell.textContent = dado.album;
    if (dado.link) {
      const link = document.createElement('a');
      link.href = dado.link; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = dado.album;
      albumCell.replaceChildren(link);
    }
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

// Chama a função para atualizar a tabela automaticamente
atualizarAutomaticamente();
