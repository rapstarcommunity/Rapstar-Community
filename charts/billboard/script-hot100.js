var tabelaDados = [
  { posicao: 1, musica: "False Idols", artista: "Mia", imagem: "" },
  { posicao: 2, musica: "In The End, Just Party", artista: "Even Grace with Ava & Owen Graham", imagem: "" },
  { posicao: 3, musica: "Be Careful", artista: "Blair ft. Owen Graham", imagem: "" },
  { posicao: 4, musica: "Drinking About You", artista: "Blair", imagem: "" },
  { posicao: 5, musica: "All Over Again... Again", artista: "Ava", imagem: "" },
  { posicao: 6, musica: "Alone In Days Like This", artista: "Bianca", imagem: "" },
  { posicao: 7, musica: "DRUNK!", artista: "Ava", imagem: "" },
  { posicao: 8, musica: "Finish Line", artista: "Ava", imagem: "" },
  { posicao: 9, musica: "Feeling", artista: "Ava", imagem: "" },
  { posicao: 10, musica: "Goodbye", artista: "Blair ft. Tommy Tommy", imagem: "" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("poshot" + (index + 1));
    var imagemCell = document.getElementById("imagemhot" + (index + 1));
    var musicaCell = document.getElementById("songhot" + (index + 1));
    var artistaCell = document.getElementById("artisthot" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

atualizarAutomaticamente();
