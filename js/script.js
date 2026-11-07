function NovaBusca() {
    // Limpa valores do formulário
    document.getElementById('cep').value = "";
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    
    // Devolve o foco para o campo de CEP
    document.getElementById('cep').focus(); 
}

// Formata o CEP no input em tempo real (Ex: 00000-000)
function MascaraCep(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove letras
    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
    }
    input.value = valor;
}

// Utilizando async/await (sintaxe mais moderna e limpa)
async function BuscarCep() {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');

    // Verifica se tem exatamente 8 dígitos
    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            const response = await fetch(url);
            const dados = await response.json();

            if (!("erro" in dados)) {
                document.getElementById("rua").value = dados.logradouro;
                document.getElementById("bairro").value = dados.bairro;
                document.getElementById("cidade").value = dados.localidade;
                document.getElementById("uf").value = dados.uf;
            } else {
                alert("CEP não encontrado na base de dados.");
            }
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error);
            alert("Ocorreu um erro de conexão ao buscar o CEP.");
        }
    } else {
        // Alerta caso o usuário clique em buscar com um CEP incompleto
        alert("Por favor, digite um CEP válido com 8 números.");
    }
}