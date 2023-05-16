<?php
//error_reporting(E_ALL);
// O mesmo que error_reporting(E_ALL);
//ini_set("display_errors", 1);

include 'conecta.php';

// Iniciando transação
mysqli_autocommit($conn, false);

// Lê os dados da tabela enviados como JSON
$data = json_decode(file_get_contents("php://input"), true);

// Loop sobre os dados e insere no banco de dados
foreach ($data as $row) {
    $console = $row[0];
    if ($row[3] == "Sim") {
        $ativo = 1;
    }else {
        $ativo = 0;
    }
    $fabricante = $row[1];
    
    // Montando a query de insert
    $sql = "INSERT INTO tb_consoles (console_nome, console_ativo, fabricante_id) VALUES ('$console', $ativo, $fabricante)"; 
    // Executando a query de insert
    if (!mysqli_query($conn, $sql)) {
        $erro = true;
        break;
    }else {
        $erro = false;
    }

}

// Verificando se houve erro
if ($erro) {
    mysqli_rollback($conn); // Desfazendo a transação
    echo "0";
} else {
    mysqli_commit($conn); // Confirmar a transação
    echo "1";
}


// Fechando a conexão
mysqli_close($conn);
?>

