<?php
// Dados para conexão com o banco de dados
$host = "localhost";
$user = "root";
$pass = "12345";
$dbname = "videogames";

// Conectando ao banco de dados
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Verificando erros de conexão
if (!$conn) {
    die("Não foi possível conectar ao banco de dados: " . mysqli_connect_error());
}

?>
