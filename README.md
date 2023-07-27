# Casa Quatro Patas

## O desafio
<p>Este projeto surgiu, inicialmente, como um desafio para uma vaga de estágio. Posteriormente, tivemos a oportunidade de desenvolvê-lo como um trabalho em conjunto de algumas disciplinas do curso de Sistemas de Informação pela UFVJM. Dito isso, a ideia central foi a construção de uma aplicação web que pudesse se conectar a um banco de dados e fazer operações simples sobre ele, como chamada de procedures, uso de pesquisas aninhadas e as operações básicas de manipulação.</p>


## O contexto
<p>Segundo o levantamento <a href= "http://institutopetbrasil.com/fique-por-dentro/numero-de-animais-de-estimacao-em-situacao-de-vulnerabilidade-mais-do-que-dobra-em-dois-anos-aponta-pesquisa-do-ipb/"> “Animais em Condição de Vulnerabilidade”(ACV) </a> realizado pelo Instituto Pet Brasil, e referente ao ano de 2020, o Brasil contava com mais de 8 milhões de animais de estimação vivendo em condições de vulnerabilidade, sendo que esse número representava mais do que o dobro daquele reportado pelo levantamento anterior (2018). </p>

<p>Nesse contexto, a pesquisa aponta que esse valor representa quase 11% da população pet total do país e, devido ao crescimento do número de animais em situação vulnerável, foi verificado uma mudança tanto no perfil, quanto no número de ONGs do país. Com mais de 400 ONGs atuando na proteção animal, hoje cerca de 60% dos animais sob seus cuidados foram resgatados de situação de maus tratos e o restante de situações de abandono. </p>

<p>Ao mesmo tempo, a Comissão de Animais de Companhia (COMAC) do Sindicato Nacional da Indústria de Produtos para a Saúde Animal (Sindan), através do levantamento <a href="https://sindan.org.br/release/pesquisa-radar-pet-brasil-conta-com-a-segunda-maior-populacao-pet-do-mundo"> Radar Pet 2020 </a>, revela que mais de 37 milhões de casas no Brasil contam com algum pet, sendo que a grande maioria chegou aos cuidados de seus tutores através de processos de adoção.</p>

<p>Esses dados revelam a grande importância na atuação de ONGs de cuidados de animais pelo país e, possivelmente, pelo mundo. Todavia, muitas vezes essas organizações estão limitadas por seus recursos financeiros e de mão de obra, o que pode levá-las ao uso de processos pouco eficientes. Esse é o caso da ONG fictícia “Casa 4 Patas” que, até então, realizava todo o controle dos animais que já passaram ou ainda estão sob seus cuidados, assim como dos processos de adoção, a partir de registros físicos em papel. Esses registros, muitas vezes, se perdem, o que dificulta o acompanhamento dos animais e de seus novos tutores. </p>



## A solução
<p>Dado o contexto da ONG fictícia "Casa 4 Patas", o sistema foi pensado de forma a permitir que a ONG possuísse um meio de gerir seus registros de forma mais fácil, rápida e organizada. Sendo uma ONG de pequeno a médio porte, bastava apenas que o sistema permitisse o cadastro dos animais sob seu cuidado, assim como dos adotantes e das adoções que ocorrem ao longo do tempo. Assim, construímos uma aplicação Web que contém os menus referentes às entidades que devem ser manipuladas (animal, adotante e adoção) através de uma interface simples e intuitiva. Para isso, usamos uma série de recursos que listamos abaixo:

<br>
<br>
<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/> 
<img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white"/>
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=white"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white"/>
<img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>

</p>



<h2>INSTALAÇÃO</h2>

## Pré-requisitos

Antes de iniciar, verifique se você possui os seguintes programas:

- [Node.js](https://nodejs.org/pt-br/download/current) instalado (versão v19.8.1 ou superior)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) (Node Package Manager) instalado

## Baixe o repositório executando o comando

```
git clone https://github.com/LucasAlexsander/Casa4Patas.git ./
```

## Criando um banco de dados

- Copie todo o código que esta no arquivo _contrucao_do_banco.sql_ e coloque no terminal do seu sql.

### segunda alternativa

- Importe todo o código do arquivo _contrucao_do_banco.sql_ para dentro do seu banco de dados.

## Como iniciar a API

Após a criação do banco, siga as etapas abaixo para inciar a API:

1. Abra o terminal na pasta API (./API).
2. Execute o seguinte comando no terminal:

```
npm install
```

3. Dentro do arquivo da API, configure a rota do banco de dados no arquivo Database.js (Database/Database.js)
4. Por fim, execute o comando a seguir para inciar a API.

```
npm run start
```

### Uso de um banco como o WorkBench 8

Caso contre um problema de conexão, utiliza o mysql2

1. Dentro do terminal da API, insira o seguinte comando:

```
npm install mysql2
```

2. Após a conclusão da instalação, é necessário realizar alteração no arquivo Database.js (Database/Database.js).

   Substitua a linha:

   ```
   const mysql = require('mysql');
   ```

   Altere por:

   ```
   const mysql = require('mysql2');
   ```

## Iniciando a aplicação

Com todos os passos anteriores já realizados, faça o seguite passo-a-passo:

1. Abra o terminal na pasta raiz da interface (./Casa4Patas-main/Página 4Patas)
2. Execute o seguinte comando no terminal:

```
npm install
```

3. Inicie a aplicação utilizando o comando:

```
npm run dev
```

4. Para acessar as páginas entre com os dados na tela de login:

- Login:
  ```
    admin@admin
  ```
- Senha:
  ```
    1234
  ```

## Desenvolvedores

- [Henrique Machado](https://www.linkedin.com/in/henrimachado/)
- [Iago Fernandes](https://www.linkedin.com/in/iago-fernandes-083309207/) 
- [Lucas Alexsander](https://www.linkedin.com/in/lucas-alexsander-barbosa-cruz-481bbb21a/) 
- [Mariano Carlos Silva](https://www.linkedin.com/in/mariano-silva-418121202/) 
