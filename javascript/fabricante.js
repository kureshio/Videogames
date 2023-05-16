$(document).ready(function() {
    $.ajax({
        url: 'php/buscandofabricante.php',
        type: 'POST',
        dataType: 'html',
        success: function(data) {
            $('#fabricante').html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
});