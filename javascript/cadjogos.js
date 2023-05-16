// Busca de dados na tabela de distribuidora no banco de dados
$(document).ready(function() {
    $.ajax({
        url: 'php/buscandodistribuidora.php',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            $('#distribuidora').html(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus, errorThrown);
        }
    });
});

// Busca de dados na tabela de desenvolvedora no banco de dados.
$(document).ready(function() {
    $.ajax({
        url: 'php/buscandodesenvolvedora.php',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            $('#desenvolvedora').html(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus, errorThrown);
        }
    });
});
