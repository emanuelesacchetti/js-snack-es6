
const biciclette = [
    {
        'nome': 'bici1',
        'peso': 15
    },
    {
        'nome': 'bici2',
        'peso': 7
    },
    {
        'nome': 'bici3',
        'peso': 8
    },
    {
        'nome': 'bici4',
        'peso': 16
    }
];

let bici = [];
biciclette.forEach(function(elemento, indice){
    bici.push(elemento['peso']);
});

console.log(bici);   //[15, 7, 8, 16]
let min = 1000;
for ( let i = 0; i < bici.length; i++){
    if(bici[i] < min){
        min = bici[i]
    }
}

console.log(min)  //PER STAMPARE SOLO IL VALORE PIù PICCOLO
for ( let i = 0; i < bici.length; i++){
    if(min == bici[i]){
        console.log(biciclette[i])   //PER STAMPARE TUTTA LA BICI COL VALORE PIù PICCOLO
    }
}
