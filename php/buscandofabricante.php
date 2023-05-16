<?php
include 'conecta.php';
// Buscando os registros da tabela pessoas
$sql = "SELECT fabricante_id, fabricante_nome FROM tb_fabricantes WHERE fabricante_ativo=1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Montando as tags <option> com base nos registros retornados
    $options = "";
    foreach ($result as $row) {
        $options .= "<option value='" . $row["fabricante_id"] . "'>" . $row["fabricante_nome"] . "</option>";
    }

    // Exibindo as tags <option> na página
    echo $options;
} else {
    echo "<option value=''>Não foram encontrados registros na tabela cidades.</option>";
}

// Encerrando a conexão com o banco de dados
$conn->close();
?>

