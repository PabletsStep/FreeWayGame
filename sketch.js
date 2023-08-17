function setup() {
  createCanvas(500, 400);
  //somDaTrilha.pause();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  placarRecord();
  mostraIconeSom();
}
