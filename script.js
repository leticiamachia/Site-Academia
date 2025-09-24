

document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("toggle-theme");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  body.classList.add("dark-mode");

  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-fill");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-sun-fill");
    }
  });
  carregarCarrinho();
});

//carrinho

let op1 = 0, op2 = 0, op3 = 0, op4 = 0, op5 = 0, op6 = 0, op7 = 0, op8 = 0, op9 = 0, op10 = 0, op11 = 0, op12 = 0, op13 = 0, op14 = 0, op15 = 0;
let valor1 = 0, valor2 = 0, valor3 = 0, valor4 = 0, valor5 = 0, valor6 = 0, valor7 = 0, valor8 = 0, valor9 = 0, valor10 = 0, valor11 = 0, valor12 = 0, valor13 = 0, valor14 = 0, valor15 = 0;

// Dados dos produtos
const produtos = {
  1: { nome: "Pré treino TDZ Force Gabriel Zancanelli", preco: 145.40 },
  2: { nome: "Camiseta Lifestyle Squad Max Titanium", preco: 90.00 },
  3: { nome: "Pack 2x Égide 300g + Coqueteleira Égide", preco: 250.00 },
  4: { nome: "Short Fitness Feminino DLK", preco: 65.00 },
  5: { nome: "Top Fitness Feminino DLK", preco: 70.00 },
  6: { nome: "Short Moletom Preto DLK", preco: 35.00 },
  7: { nome: "Camiseta Bulking Cinza", preco: 120.00 },
  8: { nome: "Camiseta Bulking Preta", preco: 100.00 },
  9: { nome: "Bermuda Code BK OFF", preco: 200.00 },
  10: { nome: "Pré-Treino Hórus", preco: 125.30 },
  11: { nome: "Pré-Treino Égide", preco: 138.61 },
  12: { nome: "Pré-Treino Night", preco: 94.91 },
  13: { nome: "Femini Whey Protein Baunilha 900G", preco: 126.00 },
  14: { nome: "Top Whey 3W + Performance 900G", preco: 193.81 },
  15: { nome: "Whey Protein 100% Whey 900g", preco: 145.40 }
};

function item(op) {
  if (!produtos[op]) return;

  // Atualiza quantidade e valor
  window["op" + op]++;
  window["valor" + op] = produtos[op].preco * window["op" + op];

  salvarCarrinho();
  renderizarCarrinho();

  // Abre o offcanvas automaticamente
  const offcanvasEl = document.getElementById("offcanvasRight");
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
  bsOffcanvas.show();
}

function remover(op) {
  if (!produtos[op]) return;

  window["op" + op] = 0;
  window["valor" + op] = 0;

  salvarCarrinho();
  renderizarCarrinho();
}

function salvarCarrinho() {
  const dados = {};
  for (let i = 1; i <= 15; i++) {
    dados["op" + i] = window["op" + i];
    dados["valor" + i] = window["valor" + i];
  }
  localStorage.setItem("carrinho", JSON.stringify(dados));
}

function carregarCarrinho() {
  const dados = JSON.parse(localStorage.getItem("carrinho"));
  if (dados) {
    for (let i = 1; i <= 15; i++) {
      window["op" + i] = dados["op" + i] || 0;
      window["valor" + i] = dados["valor" + i] || 0;
    }
  }
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const container = document.getElementById("carrinho-itens");
  const totalContainer = document.getElementById("total");
  container.innerHTML = "";

  let total = 0;

  for (let i = 1; i <= 15; i++) {
    const quantidade = window["op" + i];
    const valor = window["valor" + i];
    const produto = produtos[i];

    if (quantidade > 0 && produto) {
      container.innerHTML += `
        <div class="carrinho-item">
          <p>${produto.nome}</p>
          <p>Quantidade: ${quantidade} - Total: R$ ${valor.toFixed(2)}</p>
          <div class="text-center">
            <button class="btn btn-sm btn-danger" onclick="remover(${i})">Remover</button>
          </div>
        </div>`;
      total += valor;
    }
  }

  totalContainer.innerHTML = `
    <div class="carrinho-total">
      Valor total: R$ ${total.toFixed(2)}
    </div>`;
}




