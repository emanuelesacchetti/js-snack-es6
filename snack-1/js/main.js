
const biciclette = [
    {
        'nome': 'bici1',
        'peso': 5
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
        'peso': 6
    }
];

/*
const {nome, peso} = biciclette;
console.log(nome, peso);

let bici = [];
biciclette.forEach(function(elemento, indice){
    const {peso} = elemento;
    
    bici += peso
    console.log(bici);
});*/



let bici = [];
biciclette.forEach(function(elemento, indice){
    bici.push(elemento['peso']);
});

console.log(bici);   //[5, 7, 8, 6]

for ( let i = 0; i < bici.length; i++){
    
    if(bici[i] < bici[i+1,i+2,i+3]){
        console.log(biciclette[0])
    }
}
