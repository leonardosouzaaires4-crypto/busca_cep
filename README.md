# Busca CEP

Aplicação web desenvolvida com **HTML, CSS e JavaScript** que permite consultar endereços brasileiros por meio do CEP, utilizando a API pública do [ViaCEP](https://viacep.com.br/).

O projeto tem como objetivo praticar conceitos de desenvolvimento web, manipulação do DOM, consumo de APIs e utilização de funções assíncronas com `async/await`.

## Funcionalidades

- **Consulta de CEP:** busca informações de endereço a partir de um CEP informado.
- **Máscara automática:** formatação do CEP no padrão `00000-000`.
- **Preenchimento automático:** exibição dos dados encontrados:
  - Rua;
  - Bairro;
  - Cidade;
  - Estado (UF).
- **Validação de entrada:** verifica se o CEP possui exatamente 8 dígitos.
- **Tratamento de erros:** identifica CEPs não encontrados e problemas de conexão.
- **Nova busca:** permite limpar os campos e realizar outra consulta.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e layout |
| JavaScript | Lógica e interatividade |
| ViaCEP API | Consulta de endereços |

## Estrutura do projeto

```text
Busca-CEP/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   └── favicon.png
│
└── README.md
```

## Como executar o projeto

1. Faça o download ou clone este repositório:

```bash
git clone https://github.com/leonardosouzaaires4-crypto/busca_cep.git
```

2. Entre na pasta do projeto:

```bash
cd busca_cep
```

3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências ou configurar um servidor backend.

## API utilizada

O projeto utiliza a API pública **ViaCEP**, responsável por fornecer informações de endereços brasileiros a partir de um CEP.

Exemplo de requisição:

```text
https://viacep.com.br/ws/01001000/json/
```

A consulta é realizada utilizando `fetch()` e `async/await`, permitindo obter os dados de maneira assíncrona.

Documentação: https://viacep.com.br/

## Aprendizados

Durante o desenvolvimento deste projeto, foram trabalhados os seguintes conceitos:

- Estruturação de páginas com HTML5.
- Estilização de interfaces com CSS3.
- Manipulação de elementos HTML através do DOM.
- Criação de funções JavaScript.
- Expressões regulares para formatação de CEP.
- Consumo de APIs externas utilizando Fetch API.
- Programação assíncrona com `async/await`.
- Tratamento de exceções com `try/catch`.
- Validação de dados informados pelo usuário.

## Autor

**Leonardo Souza Aires**

Estudante de Análise e Desenvolvimento de Sistemas, com interesse em desenvolvimento web e tecnologias de software.

- GitHub: [Meu perfil](https://github.com/leonardosouzaaires4-crypto)

---

Desenvolvido como projeto prático de estudos em desenvolvimento web.
