let currentPokemon;
let next = 0;

async function loadPokemon(pokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);
    renderPokemonCard();
    renderPokemonInfo();
    types();
    about();
}


function searchPokemon() {
    next++;
    let pokemon = document.getElementById('input').value;
    loadPokemon(pokemon);
    document.getElementById('input').value = ``;
}


function renderPokemonInfo() {
    document.getElementById('pokemonName'+ next).innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage'+ next).src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type'+ next).innerHTML = currentPokemon['types'][0]['type']['name'];

}


function about() {
    aboutHTML();
    document.getElementById('species' + next).innerHTML = currentPokemon['types'][0]['type']['name'];
    document.getElementById('height' + next).innerHTML = currentPokemon['height'] + '0 cm';
    document.getElementById('weight' + next).innerHTML = currentPokemon['weight'] + ' kg';
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        const element = currentPokemon['abilities'][i];
        let ability = element['ability'];
        document.getElementById('abilities' + next).innerHTML = `<div class="abilities-child">${ability['name']},</div>`;
    } 
}

function baseStats() {
    baseStatsHTML();
    document.getElementById('hp' + next).innerHTML = currentPokemon['stats'][0]['base_stat'];
    document.getElementById('attack' + next).innerHTML = currentPokemon['stats'][1]['base_stat'];
    document.getElementById('defense' + next).innerHTML = currentPokemon['stats'][2]['base_stat'];
    document.getElementById('special-attack' + next).innerHTML = currentPokemon['stats'][3]['base_stat'];
}


function moves() {
    movesHTML();
    for (let i = 0; i < 4; i++) {
        const element = currentPokemon['moves'][i];
        let move = element['move']['name'];
        document.getElementById('move' + next).innerHTML += move + ', ';
    }
}