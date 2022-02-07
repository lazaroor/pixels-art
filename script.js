// PESQUISAR SOBRE TARGET JS
const botaoLimpar = document.getElementById('clear-board');
const paletaCores = document.getElementsByClassName('color');
let bgColor = 'black';

function pintaPixel(event) {
  const pixelClicado = event.target;
  pixelClicado.style.backgroundColor = bgColor;
  pixelClicado.style.border = `1px solid ${bgColor}`;
}

function pegaCorSelecionada(event) {
  const pixelClicado = event.target;
  const cssPixel = window.getComputedStyle(pixelClicado, null);
  bgColor = cssPixel.getPropertyValue('background-color');
  console.log(bgColor);
  const pixelSelecionado = document.querySelector('.selected');
  pixelSelecionado.classList.remove('selected');
  pixelClicado.classList.add('selected');
}

function criaQuadroPadrao() {
  const quadro = document.getElementById('pixel-board');
  for (let linha = 0; linha < 5; linha += 1) {
    const linhaQuadro = document.createElement('div');
    linhaQuadro.className = 'linha';
    quadro.appendChild(linhaQuadro);
    for (let coluna = 0; coluna < 5; coluna += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', pintaPixel);
      linhaQuadro.appendChild(pixel);
    }
  }
}
function corInicial() {
  const corPreta = document.getElementById('preto');
  corPreta.className = 'color selected';
}
function carregaPaginaInicial() {
  criaQuadroPadrao();
  corInicial();
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].addEventListener('click', pegaCorSelecionada);
  }
}
carregaPaginaInicial();

function limparQuadro() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
    pixel[index].style.border = '1px solid black';
  }
}

botaoLimpar.addEventListener('click', limparQuadro);
