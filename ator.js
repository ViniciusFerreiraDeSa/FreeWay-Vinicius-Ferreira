// Pontos
let meusPontos = 0;

let colisao = false;
// Variáveis do Ator
let xAtor = 90
let yAtor = 366
let tamanhoAtor = 30

function mostraAtor(){
   image(imagemDaAnya, xAtor, yAtor, tamanhoAtor , tamanhoAtor);

}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3
    }
  }
  if(keyIsDown(LEFT_ARROW)){
      xAtor -= 3
  }
  if(keyIsDown(RIGHT_ARROW)){
        xAtor += 3
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],   comprimentoCarro, alturaDoCarro, xAtor, yAtor, 10) 
   if(colisao){
     voltaAtorParaPosicaoInicial();
     somColisao.play()
     if(perdePontos()){
       meusPontos -= 1
     }
    }
  }
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}
function incluiPontos(){
  text(meusPontos, width/5, 30)
  textSize(25)
  textAlign(CENTER)
  fill(color(255,20,147))
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1
    somPonto.play()
    voltaAtorParaPosicaoInicial(); 
  }
}

function perdePontos(){
   return meusPontos > 0
  
}

function podeSeMover(){
  return yAtor < 366
  
}