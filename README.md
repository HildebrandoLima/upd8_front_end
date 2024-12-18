## DESAFIO :UPD8

Telas implementadas a partir do outro desafio conforme este link [upd8backend](https://github.com/HildebrandoLima/upd8_back_end). No projeto de front-end, abordo uma arquitetura limpa e distribuida, dividada em camadas como: Servives, Repositories, Config e Support.

No projeto abordo diversos temas com foco em demonstrar meu conhecimento com ReactJS.

Exploro o ecossistema da biblioteca do ReactJS, utilizando funcionalidades como axios e bootstrap.

### [Crie sua massa de testes para pessoa, CPF, CNPJ e afins, clicando aqui!](https://www.4devs.com.br/)

### Aplicação Web desenvolvida com:<br />
- ReactJS<br />

### Funcionalidades (Atualmente desenvolvidas)
<ul>
    <li>Cadastro de Cliente</li>
    <li>Listagem e Consulta de Clientes</li>
    <li>Edição de Cliente</li>
    <li>Remoção de Cliente</li>
    <li>[Integração com API do IBGE, para consultar as cidades por UF](https://servicodados.ibge.gov.br/api/docs/localidades)</li>
</ul>

### TELAS

### CONSULTA

![CONSULTA](image.png)

### CADASTRO

![CADASTRO](image-1.png)

### EDIÇÃO

![EDIÇÃO](image-2.png)

## PASSOS:

<details>
<summary>Detalhes</summary>

### Requesitos necessários para executar o projeto:
<ul>
    <li>Instalar o Node versão 22.11.0</li>
    <li>Instalar o axios</li>
    <li>Instalar o bootstrap</li>
    <li>Instalar uma IDE de sua escolha (VSCode)</li>
</ul>

### Executar o projeto:
<ul>
    <li>Clone o projeto: git clone https://github.com/HildebrandoLima/upd8_front_end.git</li>
    <li>Adicione o arquivo env.js n apasta ./src/config</li>
    <li>Execute o comando: npm install</li>
    <li>Certifique-se que um diretório chamado `**/node_modules**` foi criado.</li>
    <li>Execute o comando: npm install axios</li>
    <li>Execute o comando: npm install bootstrap</li>
    <li>Execute o comando: npm start</li>
</ul>

### Conectando com API:

> No seu env.js adicione da seguinte forma:<br />

> const env = {<br />
>     API_BASE_URL: 'http://localhost:8000/api/'<br />
> };<br />
> <br />
> export default env;<br />

### Para iniciar aplicação:
`npm start`
Agora acesse o endereço http://localhost:3000 em seu navegador
</details>
