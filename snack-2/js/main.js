const squadre = [
    {
        'nome': 'Roma',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Juventus',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Inter',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Milan',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'Napoli',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
];



squadre.forEach(function(element){
        element.punti_fatti = generatoreNumeroCasuale(0, 100);
        element.falli_subiti = generatoreNumeroCasuale(0, 50);
});
console.log(squadre);

const teamArray = [];

squadre.forEach(squadra => {
    const {nome, falli_subiti} = squadra;
    teamArray.push({nome, falli_subiti});
});

console.log(teamArray);


function generatoreNumeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min +1));
}