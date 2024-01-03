// Imagens 
let imagemDaEstrada
let imagemDaAnya 
let imagemCarro
let imagemCarro2
let imagemCarro3

// Sons do Jogo
let somTrilha ;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada =loadImage("imagens/estrada.png")
  imagemDaAnya = loadImage("imagens/anya nanica.jpg")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro2, imagemCarro3]
  
  somTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")

}