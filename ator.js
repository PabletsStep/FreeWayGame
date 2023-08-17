//variaveis ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let record = 0;

//variaveis botao som
let botaoSomX = 40;
let botaoSomY = 5;
let larguraBotaoX = 25;
let larguraBotaoY = 25;
let som = false;
let botaoSomMudoX = 10
let botaoSomMudoY = 5
let larguraSomMudoX = 25
let larguraSomMudoY = 25

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraIconeSom(){
  image(imagemSom, botaoSomX, botaoSomY, larguraBotaoX, larguraBotaoY);
}
function mouseClicked() {
  if(mouseX >= botaoSomX && mouseX <= botaoSomX + larguraBotaoX && mouseY >= botaoSomY && mouseY <= botaoSomY + larguraBotaoY){
    if(som){
      somDaTrilha.pause();
      som = false;
    } else {
      somDaTrilha.loop();
      som = true;
    }
  }
  
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      somDaColisao.play();
      voltaAtorParaPosicaoInicial();
      meusPontos = 0;
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(124,252,0);
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
  if(meusPontos > record) {
    record += 1;
  }
  
}

function podeSeMover() {
  return yAtor < 366;
}

function placarRecord() {
  textAlign(CENTER);
  textSize(25);
  fill(124,252,0);
  text(record, 200, 27);
}
