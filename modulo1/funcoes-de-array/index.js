// Exercícios de interpretação de código:

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

//   a) O que vai ser impresso no console? 
// Aparecera em forma de  arrays, os nomes e os epelidos, perfilados um abaixo do outro. 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

//   a) O que vai ser impresso no console?
//  Apaarecere no console os nomes, dessa vez agrora ladeados, sem os apelidos. 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

//   a) O que vai ser impresso no console?
// Esta fazendo um filtro no apelido "Chijo" e aparecendo somente, Amanda Rangel e Lais Preta.

 //===================================================================================================================\\

//  Exercícios de escrita de código:

// 1. Exercício; 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos;

 const NewArray = pets.map((item, index, array) => {
    return item.nome
 })

     console.log(NewArray) 

// b) Crie um novo array apenas com os [cachorros salsicha]

const doguinhos = pets.filter((pets)=>{
    return pets.raca === "Salsicha"
})

    console.log(doguinhos); 

// c) Crie um novo array que possuirá mensagens para 
// enviar para todos os clientes (...);

const mensagen = pets.filter((pets)=>{
    
        return pets.raca === "Poodle"

})
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Madame!")

    console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!");


// 2. Dado o seguinte array de produtos, realize as operações 
// pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item;


const mostraTela = produtos.map((produtos)=>{
    console.log(produtos.nome);
})


//  b) Crie um novo array que contenha um objeto com o nome e o preço (...);

 const valorProdutos = 10 * 0.95

    const desconto = produtos.map((produtos)=> {
        return {
            
            nomeProduto: produtos.nome.toLocaleUpperCase(),
            
            precoProduto:(produtos.preco * 0.95).toFixed(2)
        }   
})
console.log(desconto);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas;

const Bebidas = produtos.filter((produtos)=>{
    return produtos.categoria === "Bebidas"

})
console.log(Bebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a 
// palavra "Ypê":

const produtosYpe = produtos.filter((produtos)=>{
    if (produtos.nome.includes("Ypê")){
        return produtos
    }
})
console.log(produtosYpe);
 

// LETRA E)

const compreOmelhorProduto = produtos.filter((produtos)=>{
    return produtos.nome === "Ypê"
})

console.log("Compre Detergente Ypê por R$2,20")
console.log("Compre Sabão em Pó Ypê por R$10,80");
