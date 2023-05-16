<?php
    include 'conecta.php';
    
    $sql = "SELECT desenvolvedora_id, desenvolvedora_nome FROM tb_desenvolvedoras WHERE desenvolvedora_ativo=1 ORDER BY desenvolvedora_nome";

    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        
        $options = "";
        
        foreach ($resultado as $linhas) {
            
            $options .= "<option value='".$linhas["desenvolvedora_id"]."'>".$linhas["desenvolvedora_nome"]."</option>";

        }

        echo $options;

    } else {

        echo "<option value=''>Sem resultado</option>";

    }

    $conn->close();
?>
