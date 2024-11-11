document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Pegando os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Variáveis para as mensagens de sucesso e erro
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    const mensagemErro = document.getElementById('mensagem-erro');

    // Resetando as mensagens
    mensagemSucesso.style.display = 'none';
    mensagemErro.style.display = 'none';

    // Verificando se todos os campos estão preenchidos
    if (nome && email && assunto && mensagem) {
        // Verificação simples de formato de email
        const emailValido = /\S+@\S+\.\S+/.test(email);
        
        if (emailValido) {
            // Exibe a mensagem de sucesso
            mensagemSucesso.style.display = 'block';
            // Limpa os campos após o envio
            document.getElementById('form-contato').reset();
        } else {
            // Exibe a mensagem de erro para o email inválido
            mensagemErro.textContent = 'Por favor, insira um email válido.';
            mensagemErro.style.display = 'block';
        }
    } else {
        // Exibe a mensagem de erro se algum campo não foi preenchido
        mensagemErro.textContent = 'Por favor, preencha todos os campos corretamente.';
        mensagemErro.style.display = 'block';
    }
});
