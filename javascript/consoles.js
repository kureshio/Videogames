$(document).ready(function() {
    $.ajax({
        url: 'php/buscandofabricante.php',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            $('#fabricante').html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
});

const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", function() {
  const consoleField = document.getElementById("nome");
  const ativoCheckbox = document.getElementById("ativo");
  const fabricanteSelect = document.getElementById("fabricante");
  
  // Adicione aqui o código para adicionar os valores na tabela
  
  // Limpa os campos
  consoleField.value = "";
  ativoCheckbox.checked = false;
  fabricanteSelect.selectedIndex = -1;
});


function adicionarConsole() {
    // Captura os valores dos campos do formulário
    var nomeConsole = document.getElementById("nome").value;
    var ativo = document.getElementById("ativo").checked;
    const select = document.getElementById('fabricante');
    const selectedOption = select.selectedOptions[0];
    const selectedValue = selectedOption.value;
    const selectedText = selectedOption ? selectedOption.textContent : '';

    //var fabricante = document.getElementById("fabricante").selectedOptions;

    // Cria uma nova linha na tabela com os valores do formulário
    var tabela = document.getElementById("tabelaConsoles").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();
    var colunaNome = novaLinha.insertCell(0);
    var colunaid = novaLinha.insertCell(1);
    colunaid.classList.add("d-none");
    var colunaFabricante = novaLinha.insertCell(2);
    var colunaAtivo = novaLinha.insertCell(3);
    var colunaRemover = novaLinha.insertCell(4);
    
    colunaNome.innerHTML = nomeConsole;
    colunaAtivo.innerHTML = ativo ? "Sim" : "Não";
    colunaid.innerHTML = selectedValue;
    colunaFabricante.innerHTML = selectedText; //Array.from(fabricante).map(option => option.value).join(", ");
    colunaRemover.innerHTML = "<button onclick='removerLinha(this)' class='botao-remover'>Remover</button>";

}


function removerLinha(botao) {
  let linha = botao.parentNode.parentNode;
  linha.parentNode.removeChild(linha);
}

const gravarButton = document.getElementById("gravar-btn");

gravarButton.addEventListener("click", function() {
  const table = document.getElementById("tabelaConsoles");
  const rows = table.querySelectorAll("tr");
  const data = [];

  // Loop sobre as linhas da tabela (ignorando o cabeçalho)
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll("td");
    const rowData = [];

    // Loop sobre as células da linha
    for (let j = 0; j < cells.length; j++) {
      rowData.push(cells[j].innerText);
    }

    // Adicionar dados da linha à matriz de dados
    data.push(rowData);
  }

  // Envie os dados para o script PHP
  fetch("php/gravaconsole.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .then(result => {
        // Tratando o resultado retornado pelo PHP
        if (result == 1) {
            limparTela();
            alert('Dados gravados com sucesso!');
        } else {
            alert('Não foi possível gravar os dados.');
        }
  })
  .catch(error => {
    console.error(error);
  });
});

function limparTela() {
  // Limpar todos os campos do formulário
  document.getElementById("meuForm").reset();
  // Posicionar o cursor no primeiro campo do formulário
  document.getElementById("nome").focus();
  
  const tabela = document.getElementById("tabelaConsoles");
  while (tabela.rows.length > 1) {
    tabela.deleteRow(1);
  }

}
