document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do formulário de contato
    const form = document.querySelector('#contato form');

    form.addEventListener('submit', (event) => {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            event.preventDefault();
        } else {
            alert('Mensagem enviada com sucesso!');
        }
    });

    // Funcionalidade do botão de inscrição
    const inscreverBtn = document.getElementById('inscrever-btn');

    inscreverBtn.addEventListener('click', () => {
        alert('Obrigado por se inscrever! Você receberá o quebra-cabeça do dia em breve.');
    });
});