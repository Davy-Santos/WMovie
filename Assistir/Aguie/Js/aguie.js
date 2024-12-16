const botao = document.getElementById('meuBotao');
        const video = document.getElementById('meuVideo');
        botao.addEventListener('click', function() {
            // Verifica se o iframe está oculto
            if (video.style.display === 'none') {
                video.style.display = 'block'; // Mostra o iframe
            } else {
                video.style.display = 'none'; // Esconde o iframe
            }
        });