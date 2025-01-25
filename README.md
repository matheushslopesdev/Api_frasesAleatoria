# API de Frases Aleatórias

Esta é uma API simples que retorna frases motivacionais aleatórias em formato JSON. A API foi desenvolvida utilizando Node.js e Express e está hospedada no Render.

## URL Base

## Endpoints Disponíveis

### 1. `GET /fraseAleatoria`

Este endpoint retorna uma frase aleatória em formato JSON.

#### **Exemplo de Requisição:**
```bash
GET https://api-frasesaleatoria.onrender.com/fraseAleatoria
```

#### **Get de Frases **
```bash
GET https://api-frasesaleatoria.onrender.com/frases
```

#### **Resposta de Sucesso:**
```json
{
  "frase": "Quanto mais fortes forem suas provações, maiores serão suas vitórias. 😉"
}
```

### 2. Outros Endpoints (planejados)
Atualmente, a API possui apenas o endpoint de frases aleatórias, mas pode ser expandida no futuro para incluir funcionalidades como:
- Listar todas as frases.
- Adicionar novas frases.
- Excluir ou editar frases existentes.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar servidores HTTP.
- **Render**: Plataforma de hospedagem para aplicações web.

## Como Usar a API

1. Realize requisições para os endpoints utilizando ferramentas como:
   - **Postman**
   - **cURL**
   - Front-end integrado ou aplicações personalizadas.

2. Utilize a resposta JSON para exibir frases em aplicações front-end, como sites ou apps móveis.

## Exemplo de Integração com Fetch (JavaScript)

Se você estiver criando um front-end que consome esta API, aqui está um exemplo de código usando `fetch` para obter uma frase aleatória:

```javascript
async function obterFraseAleatoria() {
  try {
    const resposta = await fetch('https://api-frasesaleatoria.onrender.com/fraseAleatoria');
    const dados = await resposta.json();
    console.log(dados.frase);
  } catch (erro) {
    console.error('Erro ao obter a frase:', erro);
  }
}

obterFraseAleatoria();
```

## Como Rodar o Projeto Localmente

Se você quiser rodar esta API em sua máquina local, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone <URL-DO-REPOSITORIO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node app.js
   ```

4. Acesse o endpoint localmente:
   ```
   http://localhost:3300/fraseAleatoria
   ```

## Melhorias Futuras

- Implementar um banco de dados para armazenar as frases.
- Adicionar autenticação para endpoints de criação/edição de frases.
- Criar documentação mais detalhada usando ferramentas como Swagger.
- Suporte a idiomas diferentes.

---

Desenvolvido por [Matheus Henrique Souza Lopes](https://www.linkedin.com/in/matheus-henrique-1b8b98150/) 🚀

