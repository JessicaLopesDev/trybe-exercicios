// Exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem vinda, ' + info.personagem);


// Exercicio 2
info['recorrente'] = 'Sim';
// console.log(info);


// // Exercicio 3
// for (let i in info) {
//     console.log(i);
// }


// // Exercicio 4
// for (let i in info) {
//     console.log(info[i]);
// }

// Exercicio 5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas’',
//     recorrente: 'Sim'
// };

// for (let i in info) {
//     if (info[i] == info2[i]) {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(info[i] + ' e ' + info2[i]);
//     }
// }


// Exercicio 6 (a)
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"')

// Exercicio 6 (b)
leitor.livrosFavoritos[1] ={
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'}

// console.log(leitor);


// Exercicio 6 (c)
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')


