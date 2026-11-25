// Esconde todas as seções
function esconderTudo() {
  document.getElementById("servicos").style.display = "none";
  document.getElementById("depoimentos").style.display = "none";
  document.getElementById("agendamento").style.display = "none";
  document.getElementById("contato").style.display = "none";
}

// Uma função para cada seção
function abrirServicos() {
  esconderTudo();
  document.getElementById("servicos").style.display = "block";
}

function abrirDepoimentos() {
  esconderTudo();
  document.getElementById("depoimentos").style.display = "block";
}

function abrirAgendamento() {
  esconderTudo();
  document.getElementById("agendamento").style.display = "block";
}

function abrirContato() {
  esconderTudo();
  document.getElementById("contato").style.display = "block";
}

// Ao carregar a página, mostra só os Serviços
abrirServicos();
// Janela de confirmação do agendamento
const formulario = document.querySelector("form");
const modal = document.getElementById("modal-confirmacao");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não recarrega a página

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const veiculo = document.getElementById("veiculo").value.trim();
  const select = document.getElementById("servico");
  const servico = select.options[select.selectedIndex].text;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  // Transforma 2026-11-10 em "terça-feira, 10/11/2026"
  const partes = data.split("-");
  const dataObj = new Date(partes[0], partes[1] - 1, partes[2]);
  const diaSemana = dataObj.toLocaleDateString("pt-BR", { weekday: "long" });
  const dataBR = partes[2] + "/" + partes[1] + "/" + partes[0];

  document.getElementById("m-nome").textContent = nome.split(" ")[0];
  document.getElementById("m-servico").textContent = servico;
  document.getElementById("m-veiculo").textContent = veiculo;
  document.getElementById("m-data").textContent = diaSemana + ", " + dataBR;
  document.getElementById("m-horario").textContent = horario;
  document.getElementById("m-telefone").textContent = telefone;

  modal.classList.add("aberto");
});

function fecharModal() {
  modal.classList.remove("aberto");
  formulario.reset(); // limpa o formulário
}

document.getElementById("m-fechar").addEventListener("click", fecharModal);

// Fecha clicando fora da caixa
modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    fecharModal();
  }
});

// Fecha com a tecla Esc
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    fecharModal();
  }
});