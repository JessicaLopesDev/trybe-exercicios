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
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas’',
    recorrente: 'Sim'
};

for (let i in info) {
    if (info[i] == info2[i]) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[i] + ' e ' + info2[i]);
    }
}


// Exercicio 6



// Exercicio 7
// Exercicio 
// Exercicio 