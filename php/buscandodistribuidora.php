<?php
    include 'conecta.php';

    $sql = "SELECT distribuidora_id, distribuidora_nome FROM tb_distribuidoras WHERE distribuidora_ativo=1 ORDER BY distribuidora_nome";
    
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        
        $options = "";
        
        foreach ($result as $linhas) {
            $options .= "<option value='".$linhas["distribuidora_id"]."'>".$linhas["distribuidora_nome"]."</option>";
        }

        echo $options;
    } else {
        echo "<option value=''>Sem registros</option>";
    }

    $conn->close();
?>
