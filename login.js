
function validateForm() {
    const usuario = document.getElementById('reqU').value;

    // Validação simples de exemplo
    if (usuario.length >= 1 ) {
        // Redirecionar para a página de sucesso
        location.href = '../Assistir/html/assistir.html'; // Altere para a página desejada
        return false; // Impede o envio do formulário
}
}
