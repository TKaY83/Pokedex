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
    searchedPokemon = searchedPokemon.toLowerCase();
    loadPokemon(searchedPokemon);
    document.getElementById('input').value = ``;
}


function renderPokemonInfo(i) {
    let name = searchedPokemons[i]['name'];
    let type = searchedPokemons[i]['types'][0]['type']['name'];
    document.getElementById('pokemonName' + i).innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById('pokemonImage' + i).src = searchedPokemons[i]['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type' + i).innerHTML = type.charAt(0).toUpperCase() + type.slice(1);
}


function about(i) {
    aboutHTML(i);
    let species = searchedPokemons[i]['types'][0]['type']['name'];
    document.getElementById('species' + i).innerHTML = species.charAt(0).toUpperCase() + species.slice(1);
    document.getElementById('height' + i).innerHTML = searchedPokemons[i]['height'] + '0 cm';
    document.getElementById('weight' + i).innerHTML = searchedPokemons[i]['weight'] + ' kg';
    for (let a = 0; a < searchedPokemons[i]['abilities'].length; a++) {
        const element = searchedPokemons[i]['abilities'][a];
        let ability = element['ability']['name'];
        let abUpperChase = ability.charAt(0).toUpperCase() + ability.slice(1);
        document.getElementById('abilities' + i).innerHTML += `<div class="abilities-child">${abUpperChase},</div>`;
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
        const move = searchedPokemons[i]['moves'][m]['move']['name'];
        let moveUpperChase = move.charAt(0).toUpperCase() + move.slice(1);
        document.getElementById('move' + i).innerHTML += moveUpperChase + ', ';
    }
}