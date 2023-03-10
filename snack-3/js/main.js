
const citta = ['roma', 'milano', 'napoli', 'bologna', 'catanzaro', 'olbia']

function ritornaArray(array, numero1, numero2){
    let nuovoArray = [];
    array.forEach((elemento, indice) => {
        if((indice >= numero1) && (indice <= numero2)){
            nuovoArray.push(elemento)
        }
    });
    return nuovoArray;
};

pocheCitta = ritornaArray(citta, 2, 3);
console.log(pocheCitta);

