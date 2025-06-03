const botaoMais = document.getElementById('botao-mais');
const botaoMenos = document.getElementById('botao-menos');
const qtdItens = document.getElementById('qtd-itens');
const precoElemento = document.getElementById('preco');
// Atualizar nomes para inglês
let quantidade = 1;
const precoUnitario = 79.90;

function atualizarPreco() {
  const precoTotal = precoUnitario * quantidade;
  // Atualiza o texto com formatação em reais (R$ 79,90)
  precoElemento.textContent = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
}

botaoMais.addEventListener('click', () => {
  quantidade++;
  qtdItens.textContent = quantidade;
  atualizarPreco();
});

botaoMenos.addEventListener('click', () => {
  if (quantidade > 1) {
    quantidade--;
    qtdItens.textContent = quantidade;
    atualizarPreco();
  }
});

// Inicializa o preço na página
atualizarPreco();





