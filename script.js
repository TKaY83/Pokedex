let currentPokemon;
let searchedPokemons = [];

async function loadPokemon(searchedPokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);
    searchedPokemons.push(currentPokemon);
    renderPokemon();
}


function renderPokemon() {
    document.getElementById('main').innerHTML = ``;
    for (let i = 0; i < searchedPokemons.length; i++) {
        const pokemon = searchedPokemons[i];
        renderPokemonCard(i);
        renderPokemonInfo(i);
        types(pokemon, i);
        baseStats(i);
        moves(i);
        about(i);


    }
}


function searchPokemon() {
    let searchedPokemon = document.getElementById('input').value;
    loadPokemon(searchedPokemon);
    document.getElementById('input').value = ``;
}


function renderPokemonInfo(i) {
    document.getElementById('pokemonName' + i).innerHTML = searchedPokemons[i]['name'];
    document.getElementById('pokemonImage' + i).src = searchedPokemons[i]['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type' + i).innerHTML = searchedPokemons[i]['types'][0]['type']['name'];
    // console.log(searchedPokemons)
}


function about(i) {
    aboutHTML(i);
    document.getElementById('species' + i).innerHTML = searchedPokemons[i]['types'][0]['type']['name'];
    document.getElementById('height' + i).innerHTML = searchedPokemons[i]['height'] + '0 cm';
    document.getElementById('weight' + i).innerHTML = searchedPokemons[i]['weight'] + ' kg';
    for (let a = 0; a < searchedPokemons[i]['abilities'].length; a++) {
        const element = searchedPokemons[i]['abilities'][a];
        let ability = element['ability']['name'];
        document.getElementById('abilities' + i).innerHTML += `<div class="abilities-child">${ability},</div>`;
    }
}


function baseStats(i) {
    baseStatsHTML(i);
    document.getElementById('hp' + i).innerHTML = searchedPokemons[i]['stats'][0]['base_stat'];
    document.getElementById('attack' + i).innerHTML = searchedPokemons[i]['stats'][1]['base_stat'];
    document.getElementById('defense' + i).innerHTML = searchedPokemons[i]['stats'][2]['base_stat'];
    document.getElementById('special-attack' + i).innerHTML = searchedPokemons[i]['stats'][3]['base_stat'];
}


function moves(i) {
    movesHTML(i);
    for (let m = 0; m < 4; m++) {
        const move = searchedPokemons[i]['moves'][m];
        document.getElementById('move' + i).innerHTML += move['move']['name'] + ', ';
    }
}