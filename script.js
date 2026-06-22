// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    // Captura o formulário e a caixa de mensagem através dos seus IDs
    const form = document.getElementById("formConsulta");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    // Adiciona um "escutador" de eventos para quando o botão de submit for clicado
    form.addEventListener("submit", function (event) {

        // Previne o comportamento padrão do navegador (que seria recarregar a página)
        event.preventDefault();

        // Captura os valores dos campos digitados pelo usuário
        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const especialidade = document.getElementById("especialidade").value;

        // --- VALIDAÇÃO VIA JAVASCRIPT ---

        // 1. Validação do Nome: Verifica se tem pelo menos 3 caracteres
        if (nome.length < 3) {
            alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
            return; // Interrompe a execução do código aqui
        }

        // 2. Validação do Telefone: Remove parênteses, espaços e hifens para contar apenas os números
        const apenasNumeros = telefone.replace(/\D/g, ""); // Expressão regular que remove tudo que não é número
        
        // Um telefone com DDD precisa ter 10 dígitos (fixo) ou 11 dígitos (celular)
        if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
            alert("Por favor, insira um telefone válido com DDD. Exemplo: (41) 99999-9999");
            return; // Interrompe a execução
        }

        // 3. Validação da Especialidade: Garante que o usuário escolheu uma opção válida
        if (especialidade === "") {
            alert("Por favor, selecione uma especialidade odontológica.");
            return; // Interrompe a execução
        }

        // --- SE PASSAR NAS VALIDAÇÕES: SIMULA O ENVIO ---

        // Exibe a mensagem de sucesso na tela removendo a classe "escondido"
        mensagemSucesso.classList.remove("escondido");

        // Limpa todos os campos do formulário após o sucesso
        form.reset();

        // Oculta a mensagem de sucesso automaticamente após 5 segundos
        setTimeout(() => {
            mensagemSucesso.classList.add("escondido");
        }, 5000);
    });
});